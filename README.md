# 🛒 Shopping Cart Application

A full-stack Shopping Cart application built using **React**, **Node.js**, **Express**, and **MongoDB**.  
The app supports user authentication, item listing, cart management, and secure logout.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Single-device login restriction
- Item listing
- Add items to cart
- View cart items
- Logout functionality
- Backend API protected using middleware

---

## 🧰 Tech Stack

### Frontend
- React
- Vite
- Axios

### Backend
- Node.js
- Express.js
- JWT (Authentication)
- bcryptjs (Password hashing)

### Database
- MongoDB (MongoDB Compass for local testing)

---

## 📁 Project Structure
shopping-cart-app/
│
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ ├── Item.js
│ │ ├── Cart.js
│ │ └── Order.js
│ │
│ ├── routes/
│ │ ├── userRoutes.js
│ │ ├── cartRoutes.js
│ │ └── orderRoutes.js
│ │
│ ├── middleware/
│ │ └── auth.js
│ │
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.jsx
│ │ │ ├── Navbar.jsx
│ │ │ ├── ItemList.jsx
│ │ │ └── Cart.jsx
│ │ │
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
│
└── README.md



---


## ⚙️ How to Run the Project Locally


### 1️⃣ Backend Setup


```bash
cd backend
npm install
npm start

Server runs on:

http://localhost:5000
2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🔐 Authentication Notes

JWT token is stored in localStorage after login

Token is sent in request headers as:

Authorization: Bearer <token>

Logout clears token from both database and local storage

Single-device login is enforced

🧪 API Testing

You can test APIs using:

Thunder Client

Postman

Example:

GET /api/cart
Authorization: Bearer <JWT_TOKEN>
📌 Current Status

Cart functionality implemented

Order placement feature can be added next

UI kept minimal for functionality focus

📚 Future Enhancements

Place Order feature

Quantity management

Remove item from cart

UI improvements

Deployment (optional)

👨‍💻 Author

Nadipelli Sai Kiran Deepak rao
Developed as part of a Full-Stack Learning Project using MERN stack principles.