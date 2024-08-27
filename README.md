# Backend for YourHR

## Description

This is the backend part of the YourHR application. It is built with Node.js and Express, and connects to MongoDB to handle user data and file uploads.

## Features

- User Signup: Allows users to sign up with their name, email, phone number, and resume.
- File Upload: Handles resume file uploads and stores them on the server.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas cluster)

## Installation

1. ## Clone the repository:

  git clone https://github.com/04Lokesh04/kudosware-backend.git

2. ## Navigate to the project directory:

   cd your-backend-repo

3. ## Install dependencies:

   npm install

## Configuration

1. ## Create a `.env` file in the root directory and add your MongoDB connection string:

   MONGO_URI=your-mongodb-connection-string

2. ## Ensure that the `uploads/` directory exists for storing resume files:

   mkdir uploads

## Running the Application

1. Start the server:
   
   npm start

3. The server will be running on `http://localhost:5000` by default. Ensure that this URL is accessible by your frontend application.

## API Endpoints

- POST /signup
  - Description: Registers a new user with their name, email, phone number, and resume.
  - Request Body: multipart/form-data with fields `name`, `email`, `phone`, and `resume`.
  - Response: JSON object with a success message or error message.

## Deployment

For deployment, I have used Render. Ensure that your environment variables (like `MONGO_URI`) are correctly set on the deployment platform.

## Folder Structure

- src/ - Contains the source code of the backend
  - db.js - Database connection setup
  - user.js - Mongoose model for users
  - index.js - Main server file
- uploads/ - Directory for storing uploaded resumes
- .env - Environment variables file
- package.json - Project metadata and dependencies
