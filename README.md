# i_am Backend

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)  
[![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express%20%7C%20MongoDB-green.svg)]()  

## Description

The **i_am** project is a backend REST API built with **Node.js, Express, and MongoDB**.  
It provides endpoints for managing:  

- **Workers (Personnes)**  
- **Companies (Entreprises)**  
- **Users & Authentication**  

It also includes **JWT authentication** and **role-based access control**.  

---

## Features

- Manage **workers** (CRUD)  
- Manage **companies** (CRUD)  
- User authentication (signup & login)  
- JWT-based authentication  
- Admin role management  
- Search functionality  

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/i_am.git
   cd i_am
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the root of your project:  
   ```
   SECRET=your-secret-key
   ```

4. **Run the server**
   ```bash
   npm start
   ```

---

## API Endpoints

### Users & Authentication (`/i_am/user`)

- **POST /login** → Login  
- **POST /signup** → Register new user  
- **GET /** → Get all users (Admin only)  
- **GET /:id** → Get user by ID (Admin only)  
- **PUT /:id** → Update user (Admin only)  
- **DELETE /:id** → Delete user (Admin only)  
- **PATCH /:id/upgrade** → Upgrade user to admin (Admin only)  

---

### Workers (Personnes) (`/i_am/personnes`)

- **GET /** → Get all workers  
- **GET /search** → Search workers  
- **GET /:id** → Get worker by ID  
- **POST /** → Create worker (Admin only)  
- **PUT /:id** → Update worker (Admin only)  
- **DELETE /:id** → Delete worker (Admin only)  

---

### Companies (Entreprises) (`/i_am/entreprises`)

- **GET /** → Get all companies  
- **GET /search** → Search companies  
- **GET /:id** → Get company by ID  
- **POST /** → Create company (Admin only)  
- **PUT /:id** → Update company (Admin only)  
- **DELETE /:id** → Delete company (Admin only)  

---

## Example Request

### Create a Worker (Personne)

**POST** `/i_am/personnes`  
**Headers:**
```
Content-Type: application/json
Authorization: Bearer <token>
```
**Body:**
```json
{
  "nom": "Doe",
  "prenom": "John",
  "poste": "Electrician",
  "email": "johndoe@email.com",
  "telephone": "+21612345678"
}
```

---

## Contact

**Author:** Sana Layouni  
**Email:** sanalayouni20@gmail.com  
**LinkedIn:** [Sana Layouni](https://www.linkedin.com/in/sana-layouni-648700338)  
