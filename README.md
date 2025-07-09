# 🔮 Psychic Engine (Full Stack: React + Java + MongoDB)

Welcome to **Psychic Engine**, an advanced modular AI dashboard system built using **React (frontend)** and **Java (backend)**. The app simulates a powerful AI-driven multi-dashboard system with real-time visualizations, analytics, and security monitoring.

---

## 🌐 Live Tech Stack

- ⚛️ **Frontend**: React (Vite), Context API, CSS Modules
- ☕ **Backend**: Java Servlet-based API
- 🛢️ **Database**: MongoDB (via MongoDB Java Driver)
- 🔐 **Security**: Password hashing with BCrypt

---

## 📁 Features

### 🧠 Modular Sub-AIs:
- UI/UX AI
- Backend AI
- Data Analyst AI
- Security Monitor AI

### 📊 Dashboards with Real-Time Visualizations:
- Line graphs, radar charts, log charts, and weight tracking
- Smart system suggestions, warnings, and threat alerts

### 👤 Authentication:
- Signup & Login (frontend + backend integration)
- Secure password storage using `BCrypt`

### 📦 Architecture:
- Component-based modular frontend
- Centralized state with Context API
- Java Servlet backend with JSON API endpoints

---

## 🧱 Project Structure

📁 psychic-engine-React/
│
├── 📁 src/ (Frontend)
│ ├── App.jsx, main.jsx
│ ├── assets/ # Icons, logos, images
│ ├── components/
│ │ ├── ComDashboard, UiUxAIDashboard, RealTimecom
│ │ ├── Login, Signup, Header
│ │ ├── Analysis/, DashBoardWighets/, UiUixSbAI's/
│ │ └── Sidebar/
│ └── store/ # Context API and store setup
│
└── 📁 ReactServer/ (Backend)
├── src/main/java/com/ifham/Server/
│ ├── Login.java
│ ├── Signup.java
│ └── PasswordUtil.java (BCrypt helper)
├── src/main/webapp/WEB-INF/
│ ├── web.xml
│ └── lib/ (MongoDB driver, JSON, BCrypt jars)
└── build/ (Compiled classes)

---

## 🚀 Getting Started

### 🔧 Frontend Setup (React)

```bash
# Clone the repository
git clone https://github.com/ifo-aka/psychic-engine-React.git
cd psychic-engine-React

# Install dependencies
npm install

# Start the dev server
npm run dev
```
API endPoints 
POST /signup
POST /login
Payloads expected in JSON format. Passwords are securely hashed using BCrypt.

