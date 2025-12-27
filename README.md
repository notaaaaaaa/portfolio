# Portfolio SPA - React + Bootstrap

A production-ready single-page application built with React 18, React Router v6, and Bootstrap 5.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Server will start at `http://localhost:3000`

### Build

```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/         # Reusable UI components
│   │   └── Navbar.jsx     # Sticky navbar with theme toggle
│   ├── pages/             # Route-based page components
│   │   ├── Home.jsx       # Main landing page
│   │   └── ProjectDetails.jsx  # Individual project page
│   ├── context/           # React Context providers
│   │   └── ThemeContext.jsx    # Theme management (light/dark)
│   ├── data/              # Static JSON data
│   │   ├── projects.json
│   │   ├── experience.json
│   │   └── certificates.json
│   ├── styles/            # Global styles
│   │   ├── index.css      # Bootstrap imports + theme variables
│   │   └── custom.css     # Additional custom styles
│   ├── hooks/             # Custom React hooks (empty for now)
│   ├── App.jsx            # Main app component with routing
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **React Router v6** - Client-side routing
- **Bootstrap 5.3.2** - CSS framework
- **Vite 5** - Build tool and dev server

## 🎯 Features

### ✅ Implemented

- React Router v6 navigation
- Home page with sections (Hero, About, Projects, Experience, Certificates, Contact)
- Individual project detail pages (`/projects/:id`)
- Sticky navbar with React Router links
- Theme context (light/dark mode) with localStorage persistence
- Bootstrap 5 integration
- Placeholder JSON data structure

### 🔜 Pending

- Contact form with Formspree integration
- UI polish and animations
- Additional components as needed

## 🧭 Routes

- `/` - Home page (all sections)
- `/projects/:id` - Individual project details

## 🎨 Theme System

The app includes a theme context that:

- Toggles between light and dark modes
- Persists preference to localStorage
- Uses Bootstrap-compatible CSS custom properties
- Updates `data-theme` attribute on document root

## 📦 Data Structure

All data is stored in JSON files under `src/data/`:

- `projects.json` - Portfolio projects with full details
- `experience.json` - Work experience timeline
- `certificates.json` - Professional certifications

## 🔧 Development Notes

- No unnecessary libraries or dependencies
- Clean, commented code following React best practices
- Interview-grade structure and organization
- Scalable architecture for future enhancements
- Bootstrap classes used; minimal custom styling

## 📝 Next Steps

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start development server
3. Add Formspree integration for contact form
4. Customize content in JSON data files
5. Add additional components as needed
6. Implement animations and UI polish

---

Built with ❤️ using React + Bootstrap
