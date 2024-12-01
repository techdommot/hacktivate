# Hacktivate - Interactive Game Booking Platform

Hacktivate is a modern, dark-themed game booking platform built with Vue.js and Tailwind CSS. It features an immersive user interface designed for booking various gaming experiences, from laser tag to escape rooms.

## 🎮 Features

- **Dark Mode by Default**: Sleek, modern interface with a gaming aesthetic
- **Interactive Game Booking**: Browse and book various gaming experiences
- **User Authentication**: Simple email-based authentication system
- **Digital Waiver System**: Integrated waiver signing process
- **Points System**: Earn points for bookings and track progress
- **Responsive Design**: Fully responsive across all devices
- **Real-time Slot Availability**: Track available slots for each game
- **Mock Payment Integration**: Simulated payment system with deposit handling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/hacktivate.git
cd hacktivate
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

3. Run the development server:

```sh
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎯 Available Games

- Laser Tag: Cyber Arena
- Press Start: Retro Gaming
- Hoops Challenge
- Escape Room: Prison Break
- Murder Mystery

## 💻 Tech Stack

- **Vue 3**: Frontend framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Pinia**: State management
- **Vue Router**: Navigation
- **Vite**: Build tool

## 🏗 Project Structure

```
hacktivate/
├── src/
│   ├── assets/         # Static assets
│   ├── components/     # Reusable components
│   ├── router/         # Route configurations
│   ├── stores/         # Pinia stores
│   ├── types/          # TypeScript types
│   └── views/          # Page components
├── public/             # Public assets
└── index.html          # Entry HTML file
```

## 🔑 Key Features Explained

### User Flow
1. Browse available games
2. Click "Book Now" on any game
3. Sign in or create account
4. Complete profile
5. Sign digital waiver
6. Make booking and pay deposit
7. Track bookings in dashboard

### Points System
- Earn 1 point per $10 spent
- Track points in dashboard
- Level up based on points earned

### Booking System
- Select date and time
- Choose number of players (2-5)
- Pay 10% deposit
- Track available slots
- View booking status

## 🎨 Styling

The project uses a custom dark theme with:
- Primary color: Light blue accents
- Background: Pure black
- Text: White and muted grays
- Interactive elements with hover effects
- Custom animations and transitions

## 🛠 Development

### Commands

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Hacktivate
VITE_APP_API_URL=your_api_url
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of the platform
