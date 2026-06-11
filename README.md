# DineFlow - Restaurant Management & Online Ordering System

## Overview

DineFlow is a modern restaurant web application developed using React and Cloud Firestore. The system allows customers to browse food items, create accounts, manage their profiles, and place food orders online. Administrators can manage foods, orders, users, sales, inquiries, and other restaurant operations through a dedicated admin dashboard.

The application uses Cloud Firestore as the primary database for storing restaurant and customer information.

---

## Features

### Customer Features

* User Registration
* User Login
* Customer Profile Management
* Browse Restaurant Menu
* View Food Details
* Food Categories
* Shopping Cart
* Checkout Process
* Responsive User Interface

### Administrator Features

* Admin Dashboard
* Food Management

  * Add Foods
  * Update Foods
  * Delete Foods
* Category Management
* User Management
* Order Management
* Sales Management
* Customer Inquiry Management
* Login Activity Monitoring

---

## Technology Stack

### Frontend

* React JS
* React Router DOM
* React Icons
* CSS3

### Backend Services

* Cloud Firestore Database

### Development Tools

* Visual Studio Code
* Vite
* GitHub

---

## Project Structure

```text
src
│
├── admin
│   ├── AddFood.jsx
│   ├── EditFood.jsx
│   ├── Dashboard.jsx
│   ├── Foods.jsx
│   ├── Orders.jsx
│   ├── Users.jsx
│   ├── Sales.jsx
│   ├── Inquiries.jsx
│   └── LoginDetails.jsx
│
├── components
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   ├── Foods.jsx
│   ├── FoodDetails.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
│
├── firestore.js
├── App.jsx
└── main.jsx
```

---

## Database Structure

### Users Collection

```text
users
 └── userId
      ├── name
      ├── email
      ├── phone
      ├── role
      ├── createdAt
```

### Foods Collection

```text
foods
 └── foodId
      ├── name
      ├── description
      ├── category
      ├── price
      ├── imageUrl
      ├── available
      ├── createdAt
```

### Orders Collection

```text
orders
 └── orderId
      ├── customerId
      ├── items
      ├── total
      ├── status
      ├── createdAt
```

### Inquiries Collection

```text
inquiries
 └── inquiryId
      ├── customerName
      ├── email
      ├── message
      ├── status
      ├── createdAt
```

---

## User Roles

### Customer

* Browse menu
* View food details
* Manage profile
* Add items to cart
* Place orders
* Track order history

### Administrator

* Access admin dashboard
* Manage food items
* Manage customer records
* Manage orders
* View sales information
* Respond to customer inquiries

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-repository/dineflow.git
```

### Navigate to Project Folder

```bash
cd dineflow
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Database Configuration

Create a Cloud Firestore database project and configure the connection file.

Configuration file:

```javascript
src/firestore.js
```

Example:

```javascript
const firestoreConfig = {
  projectId: "YOUR_PROJECT_ID",
  databaseURL: "YOUR_DATABASE_URL"
};
```

---

## Future Enhancements

* Online Payment Gateway Integration
* Email Notifications
* SMS Notifications
* Order Tracking System
* Customer Reviews and Ratings
* Loyalty and Rewards Program
* Discount and Coupon Management
* Real-Time Order Updates
* Restaurant Table Reservations
* Mobile Application Development

---

## Author

Developed as a Restaurant Management and Online Food Ordering System using React and Cloud Firestore.

**DineFlow © 2026**
