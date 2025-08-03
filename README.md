# Taha Shahid Portfolio Website

A responsive portfolio website built with React, TypeScript, Node.js, and Tailwind CSS featuring gradients, animations, and a functional contact form.

## Features

- 🎨 Dark theme with gradient backgrounds and smooth animations
- 📱 Fully responsive design across all devices
- 📧 Working contact form with email delivery
- 📄 Resume download functionality
- 🚀 Modern tech stack with React 18 and TypeScript
- 🎯 Smooth scrolling navigation
- ✨ Interactive animations and hover effects

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development and building
- **Wouter** for lightweight routing
- **TanStack React Query** for state management
- **Radix UI** components for accessibility

### Backend
- **Node.js** with Express
- **Nodemailer** for email functionality
- **Zod** for validation

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project**
   ```bash
   cd taha-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   GMAIL_APP_PASSWORD=your_gmail_app_password_here
   ```

4. **Start the development server**
   
   **For Windows:**
   ```cmd
   npx cross-env NODE_ENV=development HOST=127.0.0.1 npx tsx server/index.ts
   ```
   
   **For macOS/Linux:**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## Gmail App Password Setup

To enable the contact form email functionality:

1. Go to your Google Account settings
2. Select "Security" from the left panel
3. Under "How you sign in to Google," select "2-Step Verification" (must be enabled)
4. At the bottom, select "App passwords"
5. Select "Mail" and choose your device
6. Copy the generated 16-character password
7. Add it to your `.env` file as `GMAIL_APP_PASSWORD`

## Windows Compatibility

If you encounter `NODE_ENV is not recognized` error on Windows, you have two options:

### Option 1: Use cross-env (Recommended)
```cmd
npx cross-env NODE_ENV=development HOST=127.0.0.1 npx tsx server/index.ts
```

### Option 2: Set environment variables separately
```cmd
set NODE_ENV=development
set HOST=127.0.0.1
npx tsx server/index.ts
```

## Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and config
│   │   └── hooks/         # Custom React hooks
│   └── public/            # Static assets
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage interface
├── shared/               # Shared types and schemas
└── package.json         # Dependencies and scripts
```

## Features Overview

### Sections
- **Hero** - Introduction with gradient background
- **Education** - Educational background timeline
- **Projects** - Featured projects showcase
- **Skills** - Technical skills organized by category
- **Certifications** - Professional certifications
- **Leadership** - Leadership roles and activities
- **Contact** - Working contact form with email delivery

### Responsive Design
- Mobile-first approach
- Smooth animations and transitions
- Optimized for all screen sizes
- Touch-friendly navigation

## Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- Railway
- Heroku

Remember to set the `GMAIL_APP_PASSWORD` environment variable in your deployment platform.

## Troubleshooting

### Common Issues

1. **NODE_ENV not recognized (Windows)**
   - Use the cross-env commands provided above

2. **Contact form not sending emails**
   - Verify GMAIL_APP_PASSWORD is set correctly
   - Check if 2-step verification is enabled on your Google account
   - Ensure the app password is generated correctly

3. **Port already in use**
   - The server runs on port 5000 by default
   - Kill any processes using port 5000 or change the port in server/index.ts

## License

MIT License - Feel free to use this project as a template for your own portfolio!

## Contact

- **Email**: tahashahid203@gmail.com
- **GitHub**: [TahaShahid203](https://github.com/TahaShahid203)
- **LinkedIn**: [taha-shahid](https://linkedin.com/in/taha-shahid)