# PIWC Church Management App

A modern church management application built for **PIWC Barcelona**, designed to streamline internal church operations while providing a professional public-facing platform for visitors and members.

This application combines a secure **Admin Dashboard** for leadership and ministries with a **Public Website** where anyone can access key information about the church.

---

## ✨ Overview

The PIWC Church Management App is a web-based platform that supports the digital transformation of church administration. It allows efficient management of members, events, services, communications, and content — all in one central system.

It is separated into two main areas:

* 🌍 **Public Session** – Open access for the general public
* 🔐 **Admin Session** – Restricted access for church administrators

---

## 🌍 Public Session Features

Accessible to anyone without authentication. This section represents the church online and provides essential information including:

* Church Overview (About Us)
* Mission & Vision
* Contact Information
* Leadership Information
* Upcoming Services & Events
* Announcements
* Service Times & Location Map
* Visitor Information

This section is designed to be modern, responsive, and informative, serving as the digital front door of PIWC Barcelona.

---

## 🔐 Admin Session Features

A secure dashboard for authorized church staff and leadership. Features include:

* Member Management
* Attendance Tracking
* Event Management
* Task Management
* Media Upload & Content Control
* Announcements Management
* Dashboard Analytics
* Leadership Directory Management

Admins can create, update, and delete content that reflects on the public-facing side of the platform.

---

## 🛠️ Tech Stack

**Frontend:**

* React / HTML / CSS
* Tailwind CSS
* DaisyUI
* JavaScript

**Backend / Database:**

* NocoDB (Headless No-Code Database)

**Hosting:**

* GitHub Pages (Frontend)
* NocoDB (Self-hosted or Cloud)

---

## 👥 User Roles

* **Admin** – Full system control and content management
* **Staff** – Limited access to specific modules
* **Public User** – View-only access to general church information

---

## 🔒 Security

* Secure Admin Authentication
* Protected API Routes
* Role-Based Permissions
* Encrypted Credentials

---

## 🚀 Deployment

### Frontend Deployment (GitHub Pages)

1. Build your project:

```bash
npm run build
```

2. Install GitHub Pages:

```bash
npm install gh-pages --save-dev
```

3. Add to `package.json`:

```json
"homepage": "https://your-username.github.io/your-repo-name"
```

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:

```bash
npm run deploy
```

### Backend (NocoDB)

* Set up a NocoDB instance
* Create tables for Members, Events, Services, Finances, etc.
* Connect frontend via REST API
* Secure with environment variables and tokens

---

## 📁 Project Structure

```
piwc-app/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── admin/
│   ├── assets/
│   └── utils/
├── .env
├── package.json
└── README.md
```

---

## 📌 Future Roadmap

* Online Giving Integration
* Member Self-Service Portal
* SMS & Email Notifications
* Event Registration System
* Mobile App Version
* Sermon Streaming Module

---

## 🤝 Contribution Guidelines

This is a private application for PIWC Barcelona. Contributions are not considered for now.

---

## 📄 License

This project is private and proprietary. All rights reserved by PIWC Barcelona.

---

👨‍💻 Author

Mcdavis Albertio
Web Developer
Email: mcdavis705@gmail.com

LinkedIn: Mcdavis Albertio

## 📞 Contact

**PIWC Barcelona**
Email: [barcelonapiwc@gmail.com](mailto:barcelonapiwc@gmail.com)
Location: Barcelona, Spain

---

> Built with passion to support church growth, organization, and digital excellence.
