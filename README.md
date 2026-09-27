<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=header" width="100%"/>

<p align="center" style="margin:0; padding:0;">
   <img
      alt="VanLife Logo"
      src="src/assets/logo.png"
      width="400"
      style="margin-top:-80px; margin-bottom:0; padding:0;"
    />
</p>


<p align="center">
  <a href="https://vanlife8.netlify.app/">
    <img src="https://img.shields.io/badge/Live-Demo-success?style=for-the-badge" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black&style=for-the-badge" />
  </a>
  <a href="https://reactrouter.com/">
    <img src="https://img.shields.io/badge/React_Router-6.14+-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-Frontend_Tooling-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" />
  </a>
</p>

---

## 🌐 Live Demo
<p align="center">
   
   ### 🚐 Visit *#VanLife* Live Demo: https://vanlife8.netlify.app/
   
</p>


***#VanLife*** is a modern React single-page application that simulates a **van rental marketplace** with two primary experiences:

- 🧳 **Rental discovery for visitors**
- 🏕️ **Authenticated management tools for van hosts**

The application focuses heavily on modern React Router architecture, nested routes, route loaders, protected routes, persistent authentication, dynamic filtering, and centralized application state.

---

# 📖 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Features](#-features)
- [🏗️ Application Architecture](#️-application-architecture)
- [🧩 Architecture Diagram](#-architecture-diagram)
- [🧭 Routing Architecture](#-routing-architecture)
- [🔐 Authentication & Authorization](#-authentication--authorization)
- [📊 Host Console](#-host-console)
- [📦 Data Flow](#-data-flow)
- [🔄 Application Flow](#-application-flow)
- [🗂️ Project Structure](#️-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🎨 UI & UX](#-ui--ux)
- [⚡ Performance & UX Considerations](#-performance--ux-considerations)
- [🧪 Error Handling](#-error-handling)
- [💻 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🌍 Deployment](#-deployment)
- [🔮 Future Improvements](#-future-improvements)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

# ✨ Overview

***#VanLife*** is a full-featured React SPA designed to model the frontend architecture of a van rental marketplace.

The project goes beyond basic CRUD-style interfaces by implementing a structured routing and state-management architecture using **React Router**, **Context API**, and browser persistence.

Visitors can browse available vans, filter listings by type, inspect detailed information, and navigate through the rental discovery experience.

Authenticated hosts receive access to a dedicated management console where they can inspect revenue, reviews, manage their vans, view pricing information, and edit van details.

The project also demonstrates how a React application can separate:

- Public pages
- Protected host routes
- Authentication state
- Data-loading logic
- Route-level layouts
- Mock API communication
- Browser persistence

---

# 🚀 Features

## 🧳 Rental Discovery

- Browse available van listings
- Filter vans by type
- View individual van details
- Navigate between related pages
- Dynamic route parameters
- Responsive rental discovery interface

### Available Van Types

- 🟢 Simple
- 🟠 Rugged
- 🔵 Luxury

---

## 🔐 Authentication

*#VanLife* includes a client-side authentication architecture with:

- Login form
- Persistent authentication state
- Protected host routes
- Automatic authentication checks
- Login redirection
- Logout functionality
- Browser `localStorage` persistence
- Centralized authentication state using React Context

---

## 🏕️ Host Dashboard

Authenticated hosts can access a dedicated management console containing:

### 📊 Dashboard

- Revenue overview
- Review summary
- Host statistics
- Quick navigation to management sections

### 🚐 Van Management

- View managed vans
- Inspect individual vans
- Edit van details
- View pricing information
- View van photos

### 📈 Host Analytics

- Revenue summary
- Review information
- Host-specific van data

---

## 🧭 Advanced Routing

The application uses `react-router-dom` to implement:

- Nested routes
- Dynamic routes
- Layout routes
- Protected routes
- Route-level data loading
- Child route rendering
- Navigation redirects
- Route parameters
- Error boundaries / route error handling

---

## 📦 Data Loading

The application separates UI rendering from data access through route loaders and helper functions.

This allows pages to retrieve the data they need at the routing layer instead of putting all data-fetching logic directly inside components.

The architecture includes:

- Route loaders
- Data helper functions
- Mock API
- Deferred loading
- Route-based data access
- Loading states

---

# 🏗️ Application Architecture

The application is organized around several major architectural layers:

```text
                         ┌──────────────────────┐
                         │       Visitor        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   App / Router       │
                         │       main.jsx       │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
             Rental Discovery   Authentication   Host Console
                    │               │               │
                    │               ▼               │
                    │        ┌──────────────┐       │
                    │        │  AuthContext │       │
                    │        └──────┬───────┘       │
                    │               │               │
                    │               ▼               │
                    │        Browser Storage        │
                    │                               │
                    └───────────────┬───────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    Data Helpers      │
                         │      loader.js       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │       Mock API       │
                         │       server.js      │
                         └──────────────────────┘
```
The architecture intentionally separates:

`Routing` → `Authentication` → `UI` → `Data Access` → `API`

This makes the application easier to reason about and provides a foundation that could later be connected to a real backend.

## 🧩 Architecture Diagram

The following diagram represents the application's route hierarchy, authentication layer, host console, and data-access flow.

<p align="center">
  <img src="./docs/vanlife-architecture.png" alt="VanLife Application Architecture Diagram" width="100%" />
</p>

### Major Architectural Areas

| Layer | Responsibility |
| :--- | :--- |
| 🧭 **App Routing** | Defines application routes and layouts |
| 🏕️ **Rental Discovery** | Public van browsing and details |
| 🔐 **Authentication** | Login state and protected routes |
| 🏠 **Host Console** | Host dashboard and van management |
| 📦 **Data Access** | Loads and retrieves application data |
| 🖥️ **Mock API** | Simulates backend API responses |
| 💾 **Browser Storage** | Persists authentication state |

---

## 🧭 Routing Architecture

VanLife uses a nested routing architecture.

At the top level, the application initializes the router and mounts the main application layout.

```text
Router / App
│
├── Page Layout
│   │
│   ├── Van Listings
│   │
│   ├── Home / About
│   │
│   └── Van Details
│
├── Authentication
│   │
│   ├── Login
│   │
│   └── Route Guard
│
└── Host Console
    │
    ├── Host Layout
    │
    ├── Dashboard
    │   ├── Review Summary
    │   ├── Revenue Summary
    │   └── Managed Vans
    │
    └── Van Management
        ├── Pricing
        ├── Photos
        └── Van Details Edit
```

### Why Nested Routing?

Nested routing allows common layouts to remain mounted while only the relevant child content changes.

For example:

```text
Host Layout
│
├── Dashboard
├── Reviews
├── Income
├── Vans
└── Van Details
```

This avoids duplicating navigation and layout logic across individual pages.

---

## 🔐 Authentication & Authorization

Authentication is implemented using a centralized React Context.

```text
                 ┌─────────────────┐
                 │   AuthContext   │
                 └────────┬────────┘
                          │
                provides auth state
                          │
          ┌───────────────┴───────────────┐
          │                               │
          ▼                               ▼
   ┌─────────────┐                 ┌─────────────┐
   │ Login Form  │                 │ Route Guard │
   └──────┬──────┘                 └──────┬──────┘
          │                               │
          │ writes login                  │ checks login
          ▼                               ▼
   ┌──────────────────────────────────────────┐
   │             Browser Storage              │
   └──────────────────────────────────────────┘
```

## 🔒 Authentication Flow

1. **Application Launch**: User opens the application.
2. **Context Initialization**: `AuthContext` initializes in the root wrapper.
3. **Session Retrieval**: Existing login tokens/information are retrieved from browser storage (`localStorage` / `sessionStorage`).
4. **Protected Access Attempt**: User attempts to navigate to a protected route (e.g., Host Console).
5. **Route Guard Check**: The route guard checks the current authentication state:
   - **Authenticated**: User proceeds to the requested route.
   - **Unauthenticated**: User is redirected to the `/login` page.
6. **Post-Login Redirection**: Upon successful authentication, access to the host console is granted.
7. **Logout**: Triggering logout clears the stored session and resets the global authentication state.

---

## 📊 Host Console

The host experience is strictly separated from the public rental discovery interface to ensure isolation of administrative functionality.

### Host Layout Structure

```text
Host Console
│
├── Dashboard
│   ├── Review Summary
│   ├── Revenue Summary
│   └── Managed Vans
│
├── Van Management
│   ├── Van Pricing
│   ├── Van Photos
│   └── Van Details
│
└── Protected Access
```

> **Note:** This modular structure allows host-specific features to remain completely isolated from the public-facing campervan rental discovery UI.

---

## 📦 Data Flow

VanLife follows a **route-driven data access model** leveraging React Router loaders.

### Generic Data Retrieval Pipeline

```text
Route
  │
  ▼
Route Loader
  │
  ▼
Data Helper
  │
  ▼
Mock API
  │
  ▼
Application Data
  │
  ▼
React Route Component
  │
  ▼
Rendered UI
```

### Example: Van Details Page Flow

```text
Van Details Route
        │
        ▼
     Loader
        │
        ▼
   Data Helper
        │
        ▼
     Mock API
        │
        ▼
    Van Object
        │
        ▼
   Van Details UI
```

*This approach keeps data fetching concerns decoupled from presentation components, leading to a cleaner and more maintainable UI codebase.*

---

## 🔄 Application Flow

### 👤 Visitor Flow

```text
Visitor
   │
   ▼
Application
   │
   ▼
Router
   │
   ├── Home
   │
   ├── Van Listings
   │       │
   │       └── Filter by Type
   │
   └── Van Details
```

---

### 🔑 Authentication Flow Architecture

```text
Visitor
   │
   ▼
Login Page
   │
   ▼
AuthContext
   │
   ▼
Browser Storage
   │
   ▼
Authenticated State
   │
   ▼
Protected Routes
```

## 🏕️ Host Flow

```text
Authenticated Host
        │
        ▼
   Host Dashboard
        │
        ├───────────────┐
        ▼               ▼
    Income           Reviews
        │
        ▼
   Managed Vans
        │
        ├── Pricing
        ├── Photos
        └── Edit Details
```

---

## 🗂️ Project Structure

A simplified representation of the application structure:

```text
vanlife/
│
├── public/
│   ├── images/
│   ├── logo-light.png
│   └── logo-dark.png
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── VanCard.jsx
│   │   └── ...
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Vans.jsx
│   │   ├── VanDetail.jsx
│   │   └── Login.jsx
│   │
│   ├── host/
│   │   ├── HostLayout.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Income.jsx
│   │   ├── Reviews.jsx
│   │   ├── Vans.jsx
│   │   └── VanDetail.jsx
│   │
│   ├── utils/
│   │   └── loader.js
│   │
│   ├── server.js
│   ├── App.jsx
│   └── main.jsx
│
├── docs/
│   └── vanlife-architecture.png
│
├── package.json
├── vite.config.js
└── README.md
```
---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| ⚛️ **React** | UI development |
| 🧭 **React Router DOM** | Client-side routing |
| ⚡ **Vite** | Development server and build tooling |
| 🟨 **JavaScript** | Application logic |
| 🧠 **Context API** | Global authentication state |
| 💾 **localStorage** | Persistent authentication state |
| 🎨 **CSS** | Responsive UI styling |
| 🧪 **Mock API** | Simulated backend/data layer |
| 🌐 **Netlify** | Deployment |

---

## 🎨 UI & UX

VanLife was designed with a focus on a straightforward rental experience.

### UI Principles
* Clean navigation
* Clear van categorization
* Responsive layouts
* Dedicated host interface
* Loading feedback
* Error handling
* Simple authentication experience
* Consistent page structure

---

## ⚡ Performance & UX Considerations

The application uses React Router's data APIs to keep data loading closely associated with routes. Key considerations include:

* **Route-Level Data Loading:** Instead of loading every dataset when the application initially starts, routes can retrieve the information required for their corresponding pages.
* **Deferred Loading:** Deferred route data can help avoid blocking the complete page render when some data can arrive later.
* **Loading States:** The UI provides feedback while asynchronous route data is being resolved.
* **Persistent Authentication:** Authentication state is persisted through browser storage so that users do not need to repeatedly authenticate during normal browsing sessions.

---

## 🧪 Error Handling

The application includes handling for common frontend states:

```text
Request
   │
   ▼
Loading
   │
   ├───────────────┐
   │               │
   ▼               ▼
Success           Error
   │               │
   ▼               ▼
Render UI      Error UI
```

This prevents users from being presented with a blank screen when data loading fails.

## 💻 Getting Started

Follow these steps to set up and run the project locally on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/vanlife.git
```

### 2. Navigate to the Project
```bash
cd vanlife
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```

> The application should then be available at the local development URL provided by Vite (typically `http://localhost:5173`).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (if configured) |

---

## 🌍 Deployment

The application is deployed using **Netlify**.

### Production Build
To create a production-ready build, run:
```bash
npm run build
```

The generated production files in the `dist` directory can then be deployed to a static hosting platform such as Netlify.

### 🚀 Live Application

<p align="center">
  <a href="https://vanlife8.netlify.app/" target="_blank">
    <strong>🚐 Visit Live Demo: vanlife8.netlify.app</strong>
  </a>
</p>

---

## 🔮 Future Improvements

The current project uses a simulated data layer. A production version could be extended with a real backend and database architecture:

### 🔐 Authentication
* JWT-based authentication
* Refresh tokens
* Password hashing
* OAuth / social login
* Role-based authorization

### 🗄️ Backend
* Node.js + Express API
* PostgreSQL or MongoDB
* REST or GraphQL API
* Server-side validation

### 💳 Rental System
* Reservation management
* Availability calendar
* Booking confirmation
* Payment processing
* Cancellation management

### 📍 Location Features
* Interactive maps
* Van pickup locations
* Distance-based search
* Location filtering

### ⭐ Reviews
* User reviews
* Host responses
* Rating aggregation
* Review moderation

### ☁️ Media
* Cloud image storage
* Image optimization
* Multiple van photos
* Image upload management

### 📊 Host Analytics
* Revenue charts
* Booking statistics
* Occupancy rates
* Monthly earnings
* Performance metrics

# 🚐 VanLife

## 🧠 What This Project Demonstrates

This project demonstrates a practical understanding of several modern frontend engineering concepts:

- React component architecture
- Single-page application development
- Client-side routing
- Nested routing
- Dynamic routes
- Protected routes
- Route loaders
- Deferred data loading
- Context-based state management
- Browser persistence
- Authentication flows
- Mock API integration
- Responsive UI development
- Loading and error states
- Deployment of a production React build

---

## 📈 Architecture Highlights

### 🧩 Separation of Concerns

The application separates major responsibilities:

```text
Routing
   ↓
Page / Layout
   ↓
Authentication
   ↓
Data Access
   ↓
Mock API
```

This makes individual parts of the application easier to maintain and replace.

### 🔌 Replaceable Data Layer

The current mock API can eventually be replaced with a real backend without fundamentally changing the application's routing architecture.

**Current:**
```text
React → Data Helpers → Mock API
```

**Future:**
```text
React → Data Helpers → Express API → Database
```

This provides a natural path from a frontend learning project toward a full-stack implementation.

---


## 👨‍💻 Author

<p align="center">
  <strong>MD Sifat Ahammed Akash</strong><br>
  Full-Stack Developer | Computer Science & Engineering <br>
  📧 Email: sifatahammed821@gmail.com
</p>

<p align="center">
  <a href="https://github.com/sifatahammed">
    <img src="https://img.shields.io/badge/GitHub-sifatahammed-181717?logo=github&style=for-the-badge" alt="GitHub Badge" />
  </a>
</p>

## 📄 License

<div align="center">

MIT License © MD Sifat Ahammed Akash
</div>

<p align="center">
  🚐 ***#VanLife*** — Explore. Ride. Host.<br>
  Built with ❤️ using React.
</p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" width="100%"/>
