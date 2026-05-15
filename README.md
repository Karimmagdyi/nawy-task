# Nawy Apartments Listing App

A full-stack apartments listing application built as a technical assignment for Nawy.

## Features

### Frontend (Next.js)

* Apartments listing page
* Apartment details page
* Search functionality
* Pagination
* Responsive UI
* Similar apartments section

### Backend (Node.js + Express + TypeScript)

* Get all apartments endpoint
* Get apartment details endpoint
* Add apartment endpoint
* Search and filtering support
* Pagination support

### Database

* MongoDB

### Docker

* Dockerized frontend and backend
* Docker Compose support

---

# Tech Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Mongoose

---

# API Endpoints

## Get Apartments

```bash
GET /api/apartment
```

### Query Params

| Param  | Description                             |
| ------ | --------------------------------------- |
| search | Search by name, unit number, or project |
| page   | Pagination page number                  |
| limit  | Number of apartments per page           |

Example:

```bash
GET /api/apartment?search=palm&page=1&limit=6
```

---

## Get Apartment Details

```bash
GET /api/apartment/:id
```

---

## Add Apartment

```bash
POST /api/apartment
```

---

# Running Locally

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

## Backend `.env`

```env
MONGODB_URI=mongodb://localhost:27017/nawy-apartments
```

## Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# Running with Docker

From the root directory:

```bash
docker compose up --build
```

Application URLs:

```txt
Frontend: http://localhost:3000
Backend: http://localhost:5000
```

---

# Project Structure

```txt
nawy-task
│
├── frontend
├── backend
├── docker-compose.yml
```

---

# Notes

* The application supports responsive layouts for desktop and mobile.
* Search functionality supports apartment name, unit number, and project.
* Pagination is implemented on both backend and frontend.
* Docker setup is included for easier local development.
