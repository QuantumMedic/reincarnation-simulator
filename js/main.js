class ReincarnationGame {
  constructor() {
    this.countries = [];
    this.totalPopulation = 0;
    this.worldMap = new WorldMap();
    this.history = JSON.parse(localStorage.getItem('reincarnationHistory')) || [];
    this.isAnimating = false;
    this.totalReincarnations = parseInt(localStorage.getItem('totalReincarnations')) || 0;
    this.visitedCountries = new Set(JSON.parse(localStorage.getItem('visitedCountries')) || []);
    this.taiwanCount = parseInt(localStorage.getItem('taiwanCount')) || 0;
    this.populationRanges = [];
    
    // 檢查 DOM 是否已經載入
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initialize());
    } else {
      this.initialize();
    }
  }

  async initialize() {
    try {
      await this.fetchCountryData();
      console.log("取得國家資料:", this.countries);
      this.initializePopulationRanges();
      this.setupEventListeners();
      this.updateStats();
    } catch (error) {
      console.error("初始化失敗：", error);
    }
  }

  async fetchCountryData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    
    this.countries = data
      .filter(country => country.latlng?.length === 2)
      .map(country => {
        const hdiInfo = HDI_DATA[country.cca3];
        const localizedName = this.getLocalizedName(country);
        
        return {
          name: localizedName,
          population: country.population,
          lat: country.latlng[0],
          lng: country.latlng[1],
          region: country.region,
          capital: country.capital?.[0] || '無首都資料',
          flag: country.flags.svg,
          hdi: hdiInfo?.hdi || null,
          hdiRank: hdiInfo?.rank || null,
          lifeExpectancy: hdiInfo?.life || null,
          gni: hdiInfo?.gni || null,
          gii: hdiInfo?.gii || null,
          cca3: country.cca3
        };
      });

    this.totalPopulation = this.countries.reduce((sum, country) => sum + country.population, 0);
  }

  initializePopulationRanges() {
    this.populationRanges = [];
    let accumulator = 0;
    
    this.countries.forEach(country => {
      if (country.population) {
        this.populationRanges.push({
          country: country,
          start: accumulator,
          end: accumulator + country.population
        });
        accumulator += country.population;
      }
    });
  }

  getRandomCountry() {
    const randomNum = Math.random() * this.totalPopulation;
    const selectedRange = this.populationRanges.find(range =>
      randomNum >= range.start && randomNum < range.end
    );
    if (!selectedRange) {
      console.error("random找不到範圍, randomNum:", randomNum, " totalPopulation:", this.totalPopulation);
      // 若找不到，直接返回第一個國家以避免錯誤
      return this.countries[0];
    }
    return selectedRange.country;
  }

  updateCountryInfo(country) {
    const averages = {
      hdi: 0.732,
      life: 72.8,
      gni: 16752,
      gii: 0.465
    };

    const getColorClass = (value, average, isReverse = false) => {
      if (!value) return '';
      return isReverse ? 
        (value < average ? 'above-average' : 'below-average') :
        (value > average ? 'above-average' : 'below-average');
    };

    const populationPercent = ((country.population / this.totalPopulation) * 100).toFixed(4);
    
    // 更新簡化版國家資訊
    const countryInfoSimple = document.getElementById('countryInfo');
    const flagImg = countryInfoSimple.querySelector('.country-flag');
    const countryName = countryInfoSimple.querySelector('.country-name');
    
    flagImg.src = country.flag;
    flagImg.alt = `${country.name}國旗`;
    countryName.textContent = country.name;
    
    // 更新基本統計數據
    document.getElementById('birthProb').textContent = `${populationPercent}%`;
    const hdiElement = document.getElementById('hdiValue');
    hdiElement.textContent = country.hdi ? country.hdi.toFixed(3) : '無資料';
    hdiElement.className = `stat-value ${getColorClass(country.hdi, averages.hdi)}`;
    document.getElementById('hdiRank').textContent = country.hdiRank || '無資料';
    const gniElement = document.getElementById('gniValue');
    gniElement.textContent = country.gni ? `$${country.gni.toLocaleString()}` : '無資料';
    gniElement.className = `stat-value ${getColorClass(country.gni, averages.gni)}`;

    // 更新詳細資訊
    const detailInfo = document.getElementById('countryDetailInfo');
    const detailedStats = detailInfo.querySelector('.detailed-stats');
    
    detailedStats.innerHTML = `
      <div class="stat-item">
        <div class="stat-label">投胎機率</div>
        <div class="stat-value">${populationPercent}%</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">人口數量</div>
        <div class="stat-value">${country.population.toLocaleString()} 人</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">HDI 排名</div>
        <div class="stat-value">${country.hdiRank || '無資料'}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">HDI 指數</div>
        <div class="stat-value ${getColorClass(country.hdi, averages.hdi)}">
          ${country.hdi ? country.hdi.toFixed(3) : '無資料'}
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-label">預期壽命</div>
        <div class="stat-value ${getColorClass(country.lifeExpectancy, averages.life)}">
          ${country.lifeExpectancy ? `${country.lifeExpectancy}歲` : '無資料'}
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-label">人均國民收入</div>
        <div class="stat-value ${getColorClass(country.gni, averages.gni)}">
          ${country.gni ? `$${country.gni.toLocaleString()}` : '無資料'}
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-label">性別不平等指數</div>
        <div class="stat-value ${getColorClass(country.gii, averages.gii, true)}">
          ${country.gii ? country.gii.toFixed(3) : '無資料'}
        </div>
      </div>
    `;
  }

  saveToHistory(country) {
    const historyItem = {
      country: country,
      date: new Date().toLocaleString('zh-TW'),
    };
    this.history.unshift(historyItem);
    localStorage.setItem('reincarnationHistory', JSON.stringify(this.history));
    this.totalReincarnations++;
    this.visitedCountries.add(country.name);
    
    // 更新台灣的計數
    if (country.name.includes('臺灣') || country.name.includes('台灣')) {
      this.taiwanCount++;
      localStorage.setItem('taiwanCount', this.taiwanCount);
    }
    
    localStorage.setItem('totalReincarnations', this.totalReincarnations);
    localStorage.setItem('visitedCountries', JSON.stringify([...this.visitedCountries]));
    this.updateStats();
  }

  showHistory() {
    const modal = document.getElementById('historyModal');
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    this.history.forEach(item => {
      const historyItem = document.createElement('div');
      historyItem.className = 'history-item';
      historyItem.innerHTML = `
        <img src="${item.country.flag}" alt="${item.country.name}國旗">
        <div class="history-item-info">
          <span class="country-name">${item.country.name}</span>
          <span class="date">${item.date}</span>
          <span class="stats">
            人口：${item.country.population.toLocaleString()} 人
            (${((item.country.population / this.totalPopulation) * 100).toFixed(4)}%)
          </span>
        </div>
      `;
      historyList.appendChild(historyItem);
    });

    modal.style.display = 'flex';
  }

  async shareResult(country) {
    const text = `我在轉世投胎模擬器中投胎到了${country.name}！
人口比例：${((country.population / this.totalPopulation) * 100).toFixed(2)}%
來試試看你會投胎到哪裡？`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '轉世投胎模擬器',
          text: text,
          url: window.location.href
        });
      } catch (err) {
        console.error('分享失敗:', err);
      }
    } else {
      // 如果瀏覽器不支持原生分享，則複製到剪貼板
      navigator.clipboard.writeText(text)
        .then(() => alert('結果已複製到剪貼板！'))
        .catch(err => console.error('複製失敗:', err));
    }
  }

  async startReincarnation() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const countryInfo = document.getElementById('countryInfo');

    // 檢查是否有國家資料
    if (!this.countries || this.countries.length === 0) {
      this.isAnimating = false;
      return;
    }

    // 選擇國家並更新顯示
    const finalCountry = this.getRandomCountry();
    this.updateCountryInfo(finalCountry);
    
    if (this.worldMap) {
      this.worldMap.updateMarker(finalCountry);
    }
    
    this.saveToHistory(finalCountry);
    countryInfo.style.display = 'block';
    
    this.isAnimating = false;
  }

  updateStats() {
    document.getElementById('totalReincarnations').textContent = this.totalReincarnations;
    document.getElementById('uniqueCountries').textContent = this.visitedCountries.size;
    document.getElementById('taiwanCount').textContent = this.taiwanCount;
  }

  setupEventListeners() {
    // 開始投胎按鈕
    const reincarnateButton = document.getElementById('reincarnateButton');
    if (reincarnateButton) {
      reincarnateButton.addEventListener('click', this.startReincarnation.bind(this));
    }

    // 歷史記錄按鈕
    const historyButton = document.getElementById('historyButton');
    if (historyButton) {
      historyButton.addEventListener('click', this.showHistory.bind(this));
    }

    // 查看所有國家按鈕
    const countriesListBtn = document.getElementById('countriesListBtn');
    if (countriesListBtn) {
      countriesListBtn.addEventListener('click', this.showCountriesList.bind(this));
    }

    // 關閉按鈕
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
      btn.addEventListener(
        'click', () => {
          const modal = btn.closest('.modal');
          if (modal) modal.style.display = 'none';
        }
      );
    });

    // 模態框點擊外部關閉
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });

    // 分享按鈕
    const fbShareButton = document.getElementById('fbShareButton');
    const lineShareButton = document.getElementById('lineShareButton');
    const copyButton = document.getElementById('copyButton');

    if (fbShareButton) {
      fbShareButton.addEventListener('click', () => {
        const shareUrl = encodeURIComponent(window.location.href);
        const shareTitle = encodeURIComponent('轉世投胎模擬器');
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareTitle}`, 
          'facebook-share-dialog', 
          'width=800,height=600'
        );
      });
    }

    if (lineShareButton) {
      lineShareButton.addEventListener('click', () => {
        const shareUrl = encodeURIComponent(window.location.href);
        window.open(`https://social-plugins.line.me/lineit/share?url=${shareUrl}`,
          'line-share-dialog',
          'width=800,height=600'
        );
      });
    }

    if (copyButton) {
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href)
          .then(() => alert('網址已複製到剪貼板！'))
          .catch(err => console.error('複製失敗:', err));
      });
    }

    // 重置按鈕
    const resetStatsButton = document.getElementById('resetStatsButton');
    if (resetStatsButton) {
      resetStatsButton.addEventListener('click', () => {
        if (confirm('確定要重置所有統計數據嗎？這將清除所有歷史記錄。')) {
          this.resetAllStats();
        }
      });
    }

    // 添加搜尋功能
    document.getElementById('countrySearch').addEventListener('input', (e) => {
      const searchText = e.target.value.toLowerCase();
      const rows = document.querySelectorAll('#countriesTableBody tr');
      
      rows.forEach(row => {
        const countryName = row.querySelector('td').textContent.toLowerCase();
        row.style.display = countryName.includes(searchText) ? '' : 'none';
      });
    });

    // 添加排序功能
    document.querySelectorAll('.sortable').forEach(header => {
      header.addEventListener('click', () => {
        const sortType = header.dataset.sort;
        const isAsc = header.classList.contains('asc');
        
        // 清除其他排序標記
        document.querySelectorAll('.sortable').forEach(h => {
          h.classList.remove('asc', 'desc');
        });
        
        // 設置新的排序方向
        header.classList.add(isAsc ? 'desc' : 'asc');
        
        this.sortCountries(sortType, !isAsc);
      });
    });
  }

  resetAllStats() {
    this.history = [];
    this.totalReincarnations = 0;
    this.visitedCountries = new Set();
    this.taiwanCount = 0;

    localStorage.removeItem('reincarnationHistory');
    localStorage.removeItem('totalReincarnations');
    localStorage.removeItem('visitedCountries');
    localStorage.removeItem('taiwanCount');

    this.updateStats();
    
    const countryInfo = document.getElementById('countryInfo');
    countryInfo.style.display = 'none';
  }

  // 添加顯示國家列表的方法
  showCountriesList() {
    const modal = document.getElementById('countriesModal');
    const tbody = document.getElementById('countriesTableBody');
    tbody.innerHTML = '';

    const sortedCountries = [...this.countries].sort((a, b) => {
      if (!a.hdi) return 1;
      if (!b.hdi) return -1;
      return b.hdi - a.hdi;
    });

    sortedCountries.forEach((country, index) => {
      const row = document.createElement('tr');
      const hdiRank = country.hdi ? index + 1 : '無排名';
      const hdiClass = this.getHDIClass(country.hdi);
      const name = country.name.split('（')[0]; // 只顯示中文名稱部分
      
      row.innerHTML = `
        <td>
          <img src="${country.flag}" alt="${name}國旗">
          ${name}
        </td>
        <td>${country.population.toLocaleString()}</td>
        <td class="rank-cell">${hdiRank}</td>
        <td class="hdi-cell ${hdiClass}">${country.hdi ? country.hdi.toFixed(3) : '無資料'}</td>
        <td>${country.lifeExpectancy ? `${country.lifeExpectancy}歲` : '無資料'}</td>
      `;
      tbody.appendChild(row);
    });

    modal.style.display = 'flex';
  }

  // 添加排序方法
  sortCountries(sortType, ascending) {
    const tbody = document.getElementById('countriesTableBody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
      let aVal, bVal;
      
      switch(sortType) {
        case 'population':
          aVal = parseInt(a.children[1].textContent.replace(/,/g, ''));
          bVal = parseInt(b.children[1].textContent.replace(/,/g, ''));
          break;
        case 'hdi-rank':
          aVal = a.children[2].textContent === '無排名' ? Infinity : parseInt(a.children[2].textContent);
          bVal = b.children[2].textContent === '無排名' ? Infinity : parseInt(b.children[2].textContent);
          break;
        case 'hdi':
          aVal = parseFloat(a.children[3].textContent) || -1;
          bVal = parseFloat(b.children[3].textContent) || -1;
          break;
        case 'life':
          aVal = parseFloat(a.children[4].textContent) || -1;
          bVal = parseFloat(b.children[4].textContent) || -1;
          break;
        default:
          aVal = a.children[0].textContent;
          bVal = b.children[0].textContent;
      }
      
      return ascending ? aVal - bVal : bVal - aVal;
    });
    
    // 重新插入排序後的行
    rows.forEach(row => tbody.appendChild(row));
  }

  getLocalizedName(country) {
    const name = window.zhNames[country.name.common];
    if (name) {
      // 使用全形括號
      return `${name}（${country.name.common}）`;
    }
    return `${country.translations.zho?.official || country.name.common}（${country.name.common}）`;
  }

  getHDIClass(hdi) {
    if (!hdi) return '';
    if (hdi >= 0.9) return 'very-high';
    if (hdi >= 0.8) return 'high';
    if (hdi >= 0.7) return 'medium';
    return 'low';
  }

  displayCountryStats(country) {
    const averages = {
      hdi: 0.732,
      life: 72.8,
      gni: 16752,
      gii: 0.465
    };

    const stats = document.querySelector('.country-stats');
    stats.innerHTML = `
      <div class="stat ${country.hdi > averages.hdi ? 'above-average' : 'below-average'}">
        HDI指數：${country.hdi || '無資料'}
      </div>
      <div class="stat ${country.life > averages.life ? 'above-average' : 'below-average'}">
        預期壽命：${country.life || '無資料'} 歲
      </div>
      <div class="stat ${country.gni > averages.gni ? 'above-average' : 'below-average'}">
        人均國民收入：${country.gni ? `$${country.gni.toLocaleString()}` : '無資料'}
      </div>
      <div class="stat ${country.gii < averages.gii ? 'above-average' : 'below-average'}">
        性別不平等指數：${country.gii || '無資料'}
      </div>
    `;
  }
}

// 等待 DOM 完全載入後再創建遊戲實例
window.addEventListener('load', () => {
  window.game = new ReincarnationGame();
}); 
