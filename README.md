
# StockDash Frontend

StockDash is a Zerodha-style stock market dashboard that provides real-time stock listings, interactive candlestick charts, and user authentication. This is the frontend repository built with **Next.js**.

## 🚀 Features

- **Stock Listings**: Displays a list of stocks with real-time updates.
- **Candlestick Charts**: Interactive charts to analyze stock trends.
- **User Authentication**: Secure login and signup pages.
- **Landing Page**: Informative and intuitive entry page for new users.
- **Responsive UI**: Fully optimized for desktop and mobile devices.

## 🛠 Tech Stack

- **Frontend**: Next.js, React.js, Tailwind CSS
- **State Management**: React Context API / Redux (if applicable)
- **Charting Library**: TradingView / Recharts
- **Authentication**: JWT-based authentication (if applicable)

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/VinamraSaurav/stockdash-frontend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd stockdash-frontend
   ```
3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:
```env
NEXT_PUBLIC_API_BASE_URL=<your-backend-api-url>
NEXT_PUBLIC_WEBSOCKET_URL=<your-websocket-url>
```

## 🖥️ Folder Structure
```
stockdash-frontend/
│-- public/          # Static assets
│-- src/
│   │-- components/  # Reusable UI components
│   │-- pages/       # Next.js pages (landing, dashboard, auth, etc.)
│   │-- hooks/       # Custom React hooks
│   │-- styles/      # Global styles (TailwindCSS)
│-- .env.local       # Environment variables
│-- next.config.js   # Next.js configuration
│-- package.json     # Project dependencies
```

## 🔧 Upcoming Features
- **Dark Mode** for better user experience.
- **Stock Filtering & Sorting** options.
- **Live Trading API Integration**.

## 🏗 Contributing
Feel free to contribute to the project by submitting issues and pull requests!

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push the branch and create a PR.

## 📄 License
This project is licensed under the MIT License.


