# E-Commerce API Project

Next.js SQLite API Project with Zustand and useReducer

## Project Setup

Follow the instructions below to set up the project locally:

# Clone the Repository:

git clone [<repository-url>](https://github.com/waliullah9099/task/)
cd <repository-folder>

## Install Dependencies:

```bash
npm install
```

## Run the Development Server:

```bash
npm run dev
```

The development server will start at http://localhost:3000.

## Database Setup

This project uses SQLite as the database. Follow these steps to set it up:

1. Create the database file:

```bash
touch database.sqlite
```

2. Create the necessary tables using the following SQL schema:

```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT NOT NULL,
    title TEXT NOT NULL,
    price REAL NOT NULL,
    oldPrice REAL,
    rating REAL NOT NULL,
    description TEXT NOT NULL,
    addTime TEXT NOT NULL
);
```

## Features

# route: http://localhost:3000/dashboard

- GET /products: Fetches all products.
- POST /products: Adds a new product to the database.
- PUT /products/id: Update a single product
- DELETE /products/id: Delete a single product

## Live Link: [task-six-psi.vercel.app](https://task-six-psi.vercel.app/)

## Video Link: https://drive.google.com/file/d/1kaQlwRMBbAofx4i7dLJKlzF8STsqKMfz/view?usp=sharing
