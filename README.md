# 💬 MERN Chat App

A full-featured real-time chat application built with the **MERN** stack (MongoDB, Express, React, Node.js) and **Socket.IO**. Chat with multiple users, manage conversations, and enjoy real-time messaging with a modern, responsive UI.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0-green?style=flat-square&logo=mongodb)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-black?style=flat-square&logo=socket.io)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage Guide](#usage-guide)
- [Real-time Communication](#real-time-communication)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### User Features
- **User Registration & Login**: Secure authentication with JWT
- **User Discovery**: Search and find other users
- **User Profiles**: Customizable user profiles with avatars
- **Online Status**: See who's online in real-time
- **User Search Modal**: Quick user search and chat initialization

### Messaging Features
- **One-on-One Chat**: Direct messaging with individual users
- **Group Chat**: Create and manage group conversations
- **Message History**: View complete chat history
- **Real-time Messaging**: Instant message delivery with Socket.IO
- **Message Timestamps**: Know exactly when messages were sent
- **Read Receipts**: See message delivery status
- **Emoji Support**: Express yourself with emoji picker

### Media & Files
- **Image Upload**: Share images in conversations
- **File Attachment**: Support for file sharing
- **Cloudinary Integration**: Secure image hosting

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Typing Indicators**: See when someone is typing
- **Last Seen**: Display user's last activity
- **Toast Notifications**: Real-time notifications for new messages
- **Sidebar Navigation**: Easy chat and user management

## 🛠️ Tech Stack

### Frontend
- **React** 18.3 - UI library
- **Vite** - Next-generation build tool
- **React Router** - Client-side routing
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS
- **React Hot Toast** - Toast notifications
- **Emoji Picker React** - Emoji selection
- **React Icons** - Icon library
- **Date-fns** - Date formatting
- **Moment.js** - Time utilities

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Image hosting
- **Express Async Handler** - Error handling
- **CORS** - Cross-origin requests

## 📁 Project Structure

```
MERN Chat App/
├── BackEnd/
│   ├── server.js                # Server entry point
│   ├── socket.js                # Socket.IO configuration
│   ├── package.json
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   ├── userController.js    # User operations
│   │   ├── chatController.js    # Chat operations
│   │   └── messageController.js # Message operations
│   ├── models/
│   │   ├── userModel.js         # User schema
│   │   ├── chatModel.js         # Chat schema
│   │   └── messageModel.js      # Message schema
│   ├── routes/
│   │   ├── userRoutes.js        # User endpoints
│   │   ├── chatRoutes.js        # Chat endpoints
│   │   └── messageRoutes.js     # Message endpoints
│   ├── middleware/
│   │   ├── authMiddleware.js    # Auth verification
│   │   └── errorMiddleware.js   # Error handling
│   └── utils/
│       ├── cloudinary.js        # Image upload
│       └── generateToken.js     # JWT token generation
│
├── FrontEnd/
│   ├── src/
│   │   ├── main.jsx             # Entry point
│   │   ├── App.jsx              # Main component
│   │   ├── components/
│   │   │   ├── Avatar.jsx       # User avatar
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   ├── ChatBox.jsx      # Chat interface
│   │   │   ├── ChatListItem.jsx # Chat list item
│   │   │   ├── MessageItem.jsx  # Message display
│   │   │   ├── Sidebar.jsx      # Sidebar navigation
│   │   │   ├── UserSearchModal.jsx # User search
│   │   │   └── ProtectedRoute.jsx  # Auth protection
│   │   ├── pages/
│   │   │   ├── Chat.jsx         # Main chat page
│   │   │   ├── ChatPage.jsx     # Chat interface
│   │   │   ├── Login.jsx        # Login page
│   │   │   ├── Register.jsx     # Registration page
│   │   │   └── Profile.jsx      # User profile
│   │   ├── contexts/
│   │   │   ├── AuthContext.jsx  # Auth state
│   │   │   └── ChatContext.jsx  # Chat state
│   │   └── utils/
│   │       └── dateUtils.js     # Date formatting
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
```

## 📦 Prerequisites

- **Node.js** v14+ or higher
- **npm** or **yarn** package manager
- **MongoDB** database (local or MongoDB Atlas)
- **Cloudinary Account** (for image hosting)

## 🚀 Installation

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd MERN\ Chat\ App
```

### Step 2: Install Dependencies

**Backend:**
```bash
cd BackEnd
npm install
```

**Frontend:**
```bash
cd ../FrontEnd
npm install
```

### Step 3: Set Up Environment Variables

**Backend `.env` file** (in `BackEnd/` directory):
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/mern-chat
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-chat?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long
JWT_EXPIRE=7d

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Socket.IO Configuration
SOCKET_CLIENT_URL=http://localhost:5173
```

**Frontend `.env` file** (in `FrontEnd/` directory):
```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

## ⚙️ Configuration

### Cloudinary Setup
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Navigate to your dashboard
3. Copy your Cloud Name, API Key, and API Secret
4. Add them to your backend `.env` file

### MongoDB Setup

**Option 1: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option 2: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string
5. Add to backend `.env`

## ▶️ Running the Application

### Option 1: Run Both Services Concurrently

**Terminal 1 - Start Backend:**
```bash
cd BackEnd
npm start
# Or with nodemon for development:
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd FrontEnd
npm run dev
```

### Build for Production

**Backend:** Ready to deploy as-is (runs on Node.js)

**Frontend:**
```bash
cd FrontEnd
npm run build
```

## 📡 API Endpoints

### User Routes (`/api/users`)
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /` - Get all users
- `GET /search?search=query` - Search users
- `GET /:id` - Get specific user profile
- `PUT /:id` - Update user profile
- `POST /upload-picture` - Upload profile picture

### Chat Routes (`/api/chats`)
- `GET /` - Get user's chats
- `POST /` - Create new chat or group
- `GET /:id` - Get specific chat
- `PUT /:id` - Update chat
- `DELETE /:id` - Delete chat
- `POST /:id/add-user` - Add user to group
- `POST /:id/remove-user` - Remove user from group

### Message Routes (`/api/messages`)
- `GET /:chatId` - Get messages for chat
- `POST /` - Send new message
- `PUT /:id` - Edit message
- `DELETE /:id` - Delete message

## 💡 Usage Guide

### Getting Started
1. **Create Account**: Sign up with email and password
2. **Set Profile Picture**: Upload a profile avatar
3. **Find Users**: Use the search feature to discover other users
4. **Start Chatting**: Click on a user to begin conversation

### Creating Chats
- **Direct Message**: Click on any user to open a direct chat
- **Group Chat**: Use the "Create Group" option in the menu
- **Add Members**: Click the add members button to invite users

### Messaging Features
- **Send Message**: Type and press Enter or click send button
- **Add Emoji**: Click emoji button and select from picker
- **Upload Image**: Click attachment button to share images
- **View History**: Scroll up to see previous messages
- **Delete Message**: Hover over message and click delete

## 🔄 Real-time Communication

The application uses **Socket.IO** for real-time features:

- **Message Delivery**: Messages appear instantly across all clients
- **Typing Indicators**: See when someone is typing
- **Online Status**: Real-time online/offline status
- **User Join/Leave**: Get notifications when users join or leave
- **Presence Updates**: Know when users are active

## ⌨️ Keyboard Shortcuts

- **Enter** - Send message
- **Shift + Enter** - New line in message
- **Escape** - Close modals
- **Ctrl/Cmd + K** - Quick user search (if implemented)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Socket.IO Connection Issues
- Ensure backend server is running on correct port
- Check VITE_SOCKET_URL in frontend .env
- Verify CORS settings in backend

### MongoDB Connection Failed
- Check MongoDB is running (if local)
- Verify MONGODB_URI in .env
- Check MongoDB Atlas credentials

### Image Upload Not Working
- Verify Cloudinary credentials
- Check file size limits
- Ensure proper permissions

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Made with ❤️ using MERN Stack and Socket.IO**
