# MERN Stack Blog Application

Welcome to the MERN Stack Blog Application! This full-stack web application allows users to register, log in, create and edit posts, view all posts on the main page, comment on posts, and manage their account details. The application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Technologies_Used](#technologies_used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- **User Authentication:** Users can register and log in to the application securely.
- **Create and Edit Posts:** Logged-in users can create new blog posts and edit their existing posts.
- **View All Posts:** Users, whether logged in or not, can view all posts on the main page.
- **Comments:** Users can leave comments on any blog post.
- **Account Management:** Logged-in users can delete their posts, delete their account, and update their username, password, and email.
- **Image Upload:** Multer is used for image upload, with images stored in the backend's image folder.
- **Navbar with Search:** A navigation bar is available for users to search for specific posts.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [mongodb](https://www.mongodb.com/)

## Technologies Used

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **React Router DOM:** Provides navigation and routing functionality for React applications.
- **React Icons:** A library of popular icons for React applications.
- **React Toastify:** A notification library for React applications.

### Backend

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A web application framework for Node.js.
- **MongoDB:** A NoSQL database for storing data.
- **Bcrypt:** A password hashing library for securing user passwords.
- **Cookie-parser:** A middleware for parsing cookies in Express.
- **Cors:** A middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv:** A module for loading environment variables from a .env file.
- **Jsonwebtoken:** A library for creating JSON Web Tokens for user authentication.
- **Mongoose:** An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Multer:** A middleware for handling file uploads in Express.
- **Nodemon:** A utility for automatically restarting the server during development.
- **Path:** A module for working with file paths.

## Installation

1. **Create a folder:**

    Create a folder in your machine (ex:MERN-APP)

2. **Navigate to the folder:**

    ```bash
    cd MERN-APP
    ```

3. **Clone the repository:**

    ```bash
    git clone https://github.com/iamsuriyan/MERN_Blog.git
    ```

4. **Navigate to the project directory:**

   Open 2 terminals one for Frontend and another one is for Backend, type the commands respectively
   
    ```bash
    cd frontend
    ```

     ```bash
    cd backend
    ```

5. **Install dependencies using npm:**

   type this command in both terminals
   
    ```bash
    # Using npm
    npm install
    ```

## Usage

1. **Start the development server:**

    For frontend
   
    ```bash
    # Using npm
    npm run dev
    ```
    For backend

    ```bash
    # Using npm
    npm start
    ```

2. **Open your browser and go to [http://localhost:(host number displayed in your code editor)] to view the MERN-Blog website.**

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/new-feature
    ```

3. **Make your changes and commit them:**

    ```bash
    git commit -m 'Add new feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/new-feature
    ```

5. **Submit a pull request.**


--- 
