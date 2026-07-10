# Evermore

A full-stack social media platform built with modern web technologies and production-focused DevOps practices. Evermore demonstrates end-to-end software engineering, from frontend and backend development to containerization, cloud deployment, CI/CD automation, monitoring, security, and scalable application architecture.

**Build Status:** [![CI](https://github.com/Wasi-Genius/Evermore/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Wasi-Genius/Evermore/actions/workflows/ci.yml)

---

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Architecture](#architecture)
- [DevOps & Infrastructure](#devops--infrastructure)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring & Observability](#monitoring--observability)
- [API Documentation](#api-documentation)
- [Contact](#contact)

---

# Overview

Evermore is a production-ready social media application that combines a modern React frontend with a scalable Node.js backend and a complete DevOps workflow.

The project emphasizes real-world engineering practices including Docker containerization, automated CI/CD pipelines, cloud deployment, monitoring, centralized logging, caching, security hardening, and production-ready infrastructure.

---

# Demo

![Main Feed Demo](https://github.com/Wasi-Genius/Twitter-Clone/blob/main/Read%20Me%20Assets/Overview%20Demo%20Gif.gif)

---

# Features

## Authentication & Authorization

- Secure JWT authentication
- User registration and login
- Password hashing with Bcrypt
- Protected API routes
- Session management

https://github.com/user-attachments/assets/e4fc274e-8ca0-4e19-a243-566fa8341f99

<br>

## User Profiles

- Edit profile information
- Upload profile and banner images
- View personal posts
- View liked and bookmarked posts

https://github.com/user-attachments/assets/d5eea438-984d-49de-b9c5-e32d22d1b032

<br>

## Posts

- Create and delete posts
- Like posts
- Comment on posts
- Repost content
- Bookmark posts
- Upload images
- Remove likes, bookmarks, and comments

https://github.com/user-attachments/assets/f16bbb3b-2cb6-4192-ae29-f3b0b9d332f3

<br>

## Social Features

- Follow and unfollow users
- Followers and following lists
- Personalized feed
- Suggested users

https://github.com/user-attachments/assets/31719900-211d-4d77-a59e-30c647f455b6

<br>

## Notifications

- Follow notifications
- Like notifications
- Comment notifications
- Bookmark notifications
- Delete individual notifications
- Clear all notifications

https://github.com/user-attachments/assets/f6e8d0e9-54b4-4404-be8b-282392518321

<br>

## Responsive User Interface

- Mobile-first responsive design
- Desktop support
- Skeleton loading states
- Real-time UI updates
- Dynamic data fetching

https://github.com/user-attachments/assets/3a4b3a7a-e786-4c01-a518-94bafcea76de

<br>

## Developer Features

- Modular REST API
- Reusable React components
- Custom hooks
- Environment-based configuration
- Clean project architecture

---

# Architecture

```
                        User
                          │
                          ▼
                React + Vite Frontend
                     (Render Hosting)
                          │
                          ▼
                 Express REST API
                  (Render Hosting)
                          │
          ┌───────────────┴────────────────┐
          ▼                                ▼
   MongoDB Atlas                    Upstash Redis
          │
          ▼
     Cloudinary Storage
```

---

# DevOps & Infrastructure

## Containerization

- Dockerized frontend
- Dockerized backend
- Dockerized local MongoDB
- Multi-container development using Docker Compose
- Production-ready Docker configuration
- Health checks
- Multi-stage Docker builds

---

## Cloud Deployment

- Frontend deployed on Render
- Backend deployed on Render
- MongoDB Atlas cloud database
- HTTPS enabled
- Environment-based configuration
- Production CORS configuration

---

## CI/CD

- GitHub Actions pipeline
- Automatic dependency installation
- Automated linting
- Automated build verification
- Automated testing
- Docker image validation
- Automatic deployment through Render

---

## Monitoring & Observability

- Health check endpoint
- Request logging
- Centralized error handling
- API response time logging
- Uptime monitoring
- Error tracking
- Monitoring dashboards

---

## Production Improvements

- Rate limiting
- Security headers with Helmet
- Redis caching
- Cloudinary image storage
- Background job processing
- Centralized application configuration

---

# Tech Stack

| Layer | Technologies |
|--------|--------------|
| Frontend | React, Vite, JavaScript, HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, Bcrypt |
| Containerization | Docker, Docker Compose |
| Cloud | Render |
| CI/CD | GitHub Actions |
| Monitoring | UptimeRobot, Grafana Cloud, Sentry |
| Performance | Upstash Redis |
| Media Storage | Cloudinary |
| Security | Helmet, Express Rate Limit |
| Development Tools | Git, GitHub, ESLint |

---

# Project Structure

```
Evermore/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── context/
│       ├── utils/
│       └── assets/
│
├── .github/
│   └── workflows/
│
├── docker-compose.yml
├── README.md
└── package.json
```

---

# Setup & Installation

## Prerequisites

- Node.js (v18+)
- Docker Desktop
- Git
- MongoDB Atlas account
- Cloudinary account
- Upstash Redis account

---

## Clone Repository

```bash
git clone https://github.com/Wasi-Genius/Evermore.git

cd Evermore
```

---

## Run with Docker

```bash
docker compose up --build
```

---

## Local Development

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

### Backend

```env
MONGODB_URI=

JWT_SECRET=

CLIENT_URL=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

REDIS_URL=

NODE_ENV=production
```

---

### Frontend

```env
VITE_API_URL=
```

---

# CI/CD Pipeline

The project uses GitHub Actions to automate quality checks before deployment.

```
Developer
     │
     ▼
Git Push
     │
     ▼
GitHub Actions
     │
 ├── Install Dependencies
 ├── Lint
 ├── Run Tests
 ├── Build Application
 └── Validate Docker Images
     │
     ▼
Render Automatic Deployment
```

This ensures every deployment is validated before reaching production.

---

# Monitoring & Observability

Evermore includes several production monitoring features:

- Health endpoint (`/health`)
- Request logging
- Response time monitoring
- Centralized error handling
- Uptime monitoring
- Error tracking
- Performance dashboards

These tools help identify failures, monitor application health, and improve production reliability.

---

# API Documentation

### Authentication

- `POST /api/auth/signup`
- `POST /api/auth/login`

### Users

- `GET /api/users/:id`
- `PUT /api/users/:id`
- `POST /api/users/:id/follow`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `DELETE /api/posts/:id`
- `POST /api/posts/:id/like`
- `POST /api/posts/:id/comment`
- `POST /api/posts/:id/bookmark`

### Notifications

- `GET /api/notifications`
- `DELETE /api/notifications/:id`

### Health

- `GET /health`

---

# Contact

**Wasi Genius**

- GitHub: https://github.com/Wasi-Genius
- LinkedIn: https://www.linkedin.com/in/wasi-genius

Feel free to connect if you'd like to discuss software engineering, DevOps, cloud technologies, or collaborate on future projects.
