class WorldMap {
  constructor() {
    this.map = null;
    this.marker = null;
    this.init();
  }

  init() {
    this.map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  updateMarker(country) {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    
    this.marker = L.marker([country.lat, country.lng]).addTo(this.map)
      .bindPopup(country.name)
      .openPopup();
    
    this.map.setView([country.lat, country.lng], 4);
  }
} 