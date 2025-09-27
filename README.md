<img width="1012" height="633" alt="image" src="https://github.com/user-attachments/assets/e72366a1-d555-408a-be98-52532047e9ed" /># 🌤️ TRIVERA - Environmental Monitoring Platform

A comprehensive environmental monitoring platform that provides real-time weather, air quality, water quality, and traffic information.

🔗 **Live Demo**: [weather-report-taupe.vercel.app](https://trivera.netlify.app/)

---

## 🚀 Features

### Weather Module 🌤️
- 🌍 Search weather by city name
- 🌡️ Displays temperature, humidity, and wind speed
- ⛅ Shows current weather conditions with hourly forecasts
- 🕒 Real-time updates with precise timestamps
- � Save favorite locations for quick access

### Air Quality Report 💨
- 📊 Real-time AQI (Air Quality Index) monitoring
- 🏭 PM2.5 and CO₂ level tracking
- �️ Air quality maps and trends

### Water Quality Monitor 💧
- 🧪 pH level monitoring
- 💧 Turbidity measurements
- 📈 Water quality trends and alerts

### Traffic Updates 🚗
- � Real-time traffic conditions
- 🚧 Road work and incident alerts
- 🗺️ Interactive traffic maps

### Platform Features 🛠️
- � Fully responsive design for all devices
- 🎨 Modern, intuitive UI with blur effects
- 🔄 Real-time data updates
- 📊 Interactive data visualizations
- 🌙 Light/Dark mode support

---

## ⚙️ Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons, Lucide React
- **State Management**: React Context
- **Routing**: React Router DOM

### APIs & Services
- **Weather**: OpenWeatherMap API
- **Air Quality**: Air Quality Open Data Platform
- **Traffic**: Maps & Traffic API Services
- **Data Storage**: Local Storage for favorites

### Development & Deployment
- **Build Tool**: Vite
- **Package Manager**: npm/yarn
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

---

## 🔧 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Mayankkr2705/Weather-Report.git
   cd Weather-Report
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_OPENAQ_API_KEY=your_openaq_api_key_here       # For air quality data
   VITE_TOMTOM_API_KEY=your_tomtom_api_key_here      # For traffic and maps
   VITE_WEATHER_API_KEY=your_weather_api_key_here     # For weather data

   # How to get API keys:
   # - OpenAQ API: Sign up at https://openaq.org/#/login
   # - TomTom API: Register at https://developer.tomtom.com/
   # - Weather API: Get key from https://openweathermap.org/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 📱 Screenshots

[Add your application screenshots here]

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/Mayankkr2705/Weather-Report/issues).

---

## 📝 License

This project is [MIT](./LICENSE) licensed.

---

## 👨‍💻 Author

**Mayank Kumar**
- GitHub: [@Mayankkr2705](https://github.com/Mayankkr2705)
