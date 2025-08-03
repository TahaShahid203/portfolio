# replit.md

## Overview

This is a personal portfolio website for Taha Shahid, a Computer Science student and full-stack developer. The project showcases his educational background, projects, skills, certifications, and leadership experience through an interactive, modern web interface. The portfolio is built as a single-page application with smooth scrolling navigation between sections including Hero, Education, Projects, Skills, Certifications, Leadership, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Styling**: Tailwind CSS with custom CSS variables for dark theme styling and responsive design
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui components for consistent, accessible interface elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints and static file serving
- **Data Layer**: Interface-based storage abstraction with in-memory implementation for user management
- **Database Integration**: Drizzle ORM configured for PostgreSQL with schema definitions and migrations
- **Development**: Hot module replacement and development middleware integration with Vite

### Design System
- **Component Structure**: Modular React components with intersection observer animations for scroll-triggered effects
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts and navigation
- **Theme**: Dark theme with gradient accents and smooth transitions throughout the interface
- **Accessibility**: ARIA labels, semantic HTML structure, and keyboard navigation support

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM with user schema including username and password fields
- **Migrations**: Automated database schema management through Drizzle Kit
- **Storage Interface**: Abstracted CRUD operations with implementation for user management operations

### Development Infrastructure
- **TypeScript Configuration**: Strict type checking with path aliases for clean imports and modular code organization
- **Build Process**: Separate client and server builds with ESM module support and external package bundling
- **Development Tools**: Runtime error overlay, source mapping, and cartographer integration for Replit environment

## External Dependencies

### Core Frameworks
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation for form handling
- **TanStack React Query**: Server state management and caching for API interactions
- **Wouter**: Lightweight routing solution for single-page application navigation

### UI and Styling
- **Radix UI**: Complete suite of accessible component primitives including dialogs, dropdowns, navigation menus
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer for browser compatibility
- **Lucide React**: Icon library for consistent iconography throughout the interface
- **Class Variance Authority**: Type-safe component variants for systematic component styling

### Database and Backend
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema validation and migration management
- **Neon Database**: Serverless PostgreSQL database service for production data storage
- **Connect PG Simple**: PostgreSQL session store for Express.js session management
- **Drizzle Zod**: Schema validation integration between Drizzle and Zod for type safety

### Development Tools
- **Vite**: Modern build tool with plugin ecosystem for development and production optimization
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **TSX**: TypeScript execution environment for development server running
- **Replit Plugins**: Development environment integration including error overlay and cartographer

### Utility Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **Clsx & Tailwind Merge**: Conditional CSS class composition and conflict resolution
- **Nanoid**: URL-safe unique ID generation for various application needs
- **CMDK**: Command palette component for enhanced user interactions