# E-commerce Project

This project is an e-commerce application built with Node.js, Express.js, Prisma for the backend, and Angular for the frontend. It aims to provide a robust platform for managing products, orders, and user interactions in an e-commerce environment.

## Project Structure

The project is divided into two main folders:

1. **Backend:**
   - This folder contains all the server-side code built with Node.js and Express.js.
   - It utilizes Prisma as the ORM (Object-Relational Mapping) tool for communicating with the database.
   - Backend functionalities include handling authentication, managing products, processing orders, and interacting with the database.

2. **Frontend:**
   - The frontend folder consists of the Angular application responsible for the user interface.
   - It communicates with the backend API to fetch and display data, manage user authentication, and handle user interactions such as product browsing, adding items to the cart, and placing orders.

## Setup Instructions

Follow the steps below to set up and run the project locally:

### Backend Setup:

1. Navigate to the `backend` folder.
2. Install dependencies by running:
    -npm install
3. Run the server by using command
     -npm run start
### Frontend Setup:
1. Navigate to the `frontend` folder.
   -go to `eCommerce` file
   -npm install
2.  Run the application by using command
     -npm run start
    
## Setup env file
**Update example with your actual username, password, port, secret key**
DATABASE_URL="mysql://username:password@localhost:port/library"
SECRET_KEY ="your-secret-key"


