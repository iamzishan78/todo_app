# Todo App

Todo App in Mern
## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Server](#running-the-Server)
- [Running the Client](#running-the-Client)
- [Environment Variables](#Environment-Variables)
- [Application Features](#application-features)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Code editor (e.g., Visual Studio Code)
- Git (optional)

## Getting Started

To get the project up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/iamzishan78/todo_app.git
cd todo_app
```

Install Server dependencies:

```bash
cd server
npm install 
or 
yarn
```

Install Client dependencies:

```bash
cd client
npm install
or 
yarn
```

Run the Client:

```bash
cd client
npm run dev
or
yarn dev
```

The application should be accessible at http://localhost:3000.

## Running the Server

To start the Server server, navigate to the `Server` directory and run the following command:

```bash
cd server
npm start
or
yarn start
```

You may need to set up environment variables, such as the MongoDB connection URI, in a .env file.


## Environment Variables

To run this project, you need to configure the following environment variables:

### Server Environment Variables

- **DB_URL**: MongoDB connection URI for your Server.
- **PORT**: Port number for the Server server.

### Client Environment Variables

- **NEXT_PULIC_API_URL**: The URL of the Server API for your Client.

You can set these environment variables in your `.env.local` file for the Client and in your Server environment.

#### Server Environment Variables (.env)

```plaintext
DB_URL = mongodb_connection_string
PORT = 5000
```

#### Client Environment Variables (.env.local)

```plaintext
NEXT_PULIC_API_URL = "http://localhost:5000" or production url
```

## Application Features

features of application

## Feature 1: Create and Manage Todos

- Users can add, edit, and delete todo items.
- Each todo can have a name and a completion status.
- Each todo have the date of creation at which he is created also.
- Todos are organized for better task management.

## Feature 2: Mark Todos as Completed

- Users can mark todos as completed or uncompleted with a simple click.
- Completed todos are visually distinct to track progress easily.

## Feature 3: Sort and Filter Todos

- Users can sort todos by various criteria, such as creation date or completion status.
- Filtering options help users focus on specific tasks. Only those todos will be displayed which are created on same day
