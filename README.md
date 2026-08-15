# Next Shop - Full Stack E-Commerce Platform

A modern, full-stack e-commerce web application built with **Next.js (App Router)**, **Express.js**, **TypeScript**, **Drizzle ORM**, **PostgreSQL**, and **Better-Auth**.

---

## 🚀 Key Features

### 🛍️ Customer Experience
- **Dynamic Product Catalog**: Browse complete product collections with responsive grid displays.
- **Advanced Filtering**: Filter products by price range (interactive slider) and category/type (Tee-shirts, Jackets, Shirts, Shorts, Dresses, Shoes, Trousers).
- **Product Detail Views**: Detailed views with image galleries, pricing, and related/similar product recommendations.
- **Checkout & Order Flow**: Streamlined checkout process supporting multiple payment methods (**M-Pesa STK push**, **Card payment**, and **Cash on Delivery**) with order confirmation receipts.

### 🔐 Admin Management & Security
- **Secure Authentication**: Admin login and session management powered by **Better-Auth**.
- **Admin Dashboard**: Protected management interface allowing administrators to view, add, edit, and delete store products via a fully-featured table interface.

---

## 🛠️ Architecture & Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, FontAwesome, TanStack Table, React Hook Form, Zod, Axios.
- **Backend**: Node.js / Express.js, TypeScript, Bun.
- **Database & ORM**: PostgreSQL (running in Docker/Podman), Drizzle ORM.
- **Authentication**: Better-Auth (Node handler + Drizzle adapter).

---

## ⚙️ Getting Started & Local Setup

### Prerequisites
- [Bun](https://bun.sh/) (or Node.js)
- Docker / Podman & Docker Compose

### 1. Spin up the Database
Start the PostgreSQL container via Docker Compose:
```bash
docker compose up -d
```

### 2. Configure Environment Variables
Ensure `shop-backend/.env` is configured with your database connection string and secrets:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/next_shop"
ADMIN_EMAIL="admin@shop.com"
ADMIN_PASSWORD="adminpassword"
BETTER_AUTH_SECRET="super-secret-key-that-is-long-enough"
BETTER_AUTH_URL="http://localhost:8000"
```

And `shop-frontend/.env`:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### 3. Run Backend Server & Database Seeding
Navigate to `shop-backend`, push database migrations, seed products, and start the server:
```cd shop-backend
bun run db:push
bun run db:seed
bun run dev
```

### 4. Run Frontend Development Server
In a new terminal, navigate to `shop-frontend` and start the Next.js development server:
```cd shop-frontend
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Endpoints

- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Retrieve product by ID
- `GET /api/products/slug/:slug` - Retrieve product by slug
- `POST /api/products` - Create a new product (Admin)
- `PUT /api/products/:id` - Update an existing product (Admin)
- `DELETE /api/products/:id` - Delete a product (Admin)
- `ALL /api/auth/*` - Better-Auth authentication endpoints
