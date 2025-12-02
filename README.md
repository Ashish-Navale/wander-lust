# 🌍 Wander-lust

**Wander-lust** is a full-stack travel listing web application that allows users to explore, create, and manage travel destinations with image uploads, descriptions, and user authentication.  
It was developed as part of my web development learning journey and internship experience to demonstrate complete end-to-end deployment of a cloud-based Node.js application.

---

## 🧠 Project Overview

The main aim of Wander-lust is to provide a platform where users can:
- Browse various travel listings.
- Add their own destinations with details and images.
- Edit or delete listings with secure authentication.
- Manage images and data stored safely in the cloud.

This project helped me strengthen my full-stack web development skills, including backend APIs, database integration, and deployment handling using Render and MongoDB Atlas.

---

## 🚀 Features

- 🏕️ Create, edit, and delete travel listings  
- 📸 Image uploads and management using **Cloudinary**  
- 🔒 Secure login and session handling  
- 💾 MongoDB integration for data storage  
- ⚙️ Environment variable configuration using `.env`  
- 🌐 Full deployment on **Render**  
- 🧩 Error handling and route-level middleware  
- 🌍 Responsive design and user-friendly interface  

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| **Frontend** | HTML, CSS, JavaScript, EJS Templates |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Cloud Storage** | Cloudinary |
| **Deployment** | Render |
| **Version Control** | Git & GitHub |
| **Environment Management** | dotenv |

---

## 📁 Folder Structure
```
wander-lust/
│
├── models/
│ ├── Listing.js
│ ├── Review.js
│ └── User.js
│
├── routes/
│ ├── listings.js
│ ├── reviews.js
│ └── user.js
│
├── public/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── script.js
│
├── views/
│ ├── layouts/
│ │ └── boilerplate.ejs
│ ├── listings/
│ │ ├── index.ejs
│ │ ├── new.ejs
│ │ └── show.ejs
│ ├── reviews/
│ └── users/
│
├── app.js
├── package.json
└── README.md
```

##🌍 Wanderlust – Live Project

Explore the live deployed version of the Wanderlust application:

🔗 Live Demo: [Wanderlust Project](https://wander-lust-project-838y.onrender.com/)

Wanderlust is a travel-stay booking web application where users can browse listings, view details, and manage their stays. Built using the MVC architecture and deployed using Render.


