# Tatvam Ceramics - MERN Stack Project

Welcome to the Tatvam Ceramics project! This application is designed to showcase and publicize a wide range of ceramic products, while also providing e-commerce functionality for users to browse and purchase items.

## Project Overview

Tatvam Ceramics is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It features user-friendly navigation, detailed product displays, and administrative tools for product management.

### Key Pages

1. **Home**: Showcases featured products and highlights Tatvam Ceramics.
2. **About Us**: Details the company's history, mission, and values.
3. **Products**: Displays the full catalog of ceramic products with search and filter options.
4. **Contact Us**: Includes a form for users to get in touch with the company.
5. **Cart**: Accessible when logged in, allows users to manage their selected products.
6. **Product Management**: Admin-only section for managing product listings.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/tatvam-ceramics.git
    cd tatvam-ceramics
    ```

2. **Install server dependencies**:
    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies**:
    ```bash
    cd ../client
    npm install
    ```

4. **Create environment variables**:
    - Create a `.env` file in the `server` directory with the following content:
      ```plaintext
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```

5. **Run the server**:
    ```bash
    cd ../server
    npm run dev
    ```

6. **Run the client**:
    ```bash
    cd ../client
    npm start
    ```

The application should now be running at `http://localhost:3000`.

## Usage

### User Authentication

- **Register**: Create a new account to access the cart and make purchases.
- **Login**: Log in to view your cart and purchase products.
- **Admin Login**: Access product management features as an admin.

### Features

- **Home Page**: Showcases featured products and company highlights.
- **About Us Page**: Provides comprehensive information about Tatvam Ceramics.
- **Products Page**: Explore the entire catalog of ceramic products with options to filter and search.
- **Contact Us Page**: Fill out a form to reach out to the company.
- **Cart**: Manage your selected products (available after login).
- **Product Management**: Admin-only functionality to add, edit, and delete products.
