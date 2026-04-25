# GrubGuide 🍽️

A full-stack restaurant finder web application that allows users to search 
for restaurants and cuisines by location. Users can manually enter a location 
or use geolocation to automatically find restaurants nearby. Built with the 
MERN stack and deployed on Render.

## 🔗 Live Demo
[grubguide.onrender.com](https://grubguide.onrender.com)

---

## 🚀 Features

- Search restaurants by location or cuisine type
- Automatic "Near Me" results using browser geolocation
- User registration and login with JWT authentication
- Protected routes and persistent user sessions
- Save and manage favorite restaurants
- Server-side caching reducing API latency by 20%
- Fully responsive UI

---

## 🛠️ Tech Stack

**Frontend**
- React
- TypeScript
- Chakra UI
- React Hooks for state management

**Backend**
- Node.js
- Express.js
- JWT (jsonwebtoken) for authentication
- Mongoose / MongoDB for data persistence
- Yelp Fusion API for restaurant data
- dotenv for environment configuration

**DevOps & Tools**
- Deployed on Render
- Nodemon for development
- Prettier for code formatting
- Concurrently for running client and server together

## ⚙️ Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Yelp Fusion API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/JavyLopez-20/GrubGuide.git
cd GrubGuide
```

2. Install all dependencies (client and server)
```bash
npm run install
```

3. Create a `.env` file in the `/server` directory

4. 4. Run the application
```bash
npm start
```

The app will build the React client and start the Express server.

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| MONGODB_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for signing JWT tokens |
| YELP_API_KEY | API key from Yelp Fusion Developer portal |

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and receive JWT token |
| GET | /api/results | Search and get results for restaurants via Yelp API |

---

## 👤 Author

**Javier Lopez**
- GitHub: [@JavyLopez-20](https://github.com/JavyLopez-20)
- LinkedIn: (linkedin.com/in/javier-lopez-619926157)
