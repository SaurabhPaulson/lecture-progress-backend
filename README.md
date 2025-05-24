# Lecture Progress Tracking Backend

This project is a backend application built with Node.js, Express, and PostgreSQL to track user progress on lecture videos. It allows users to save and resume their viewing progress based on unique viewing intervals.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Design Decisions](#design-decisions)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd lecture-progress-backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your PostgreSQL connection details:
   ```
   DATABASE_URL=your_database_url
   ```

## Usage

To start the server, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

## API Endpoints

### Save Progress
- **Endpoint:** `POST /progress`
- **Description:** Saves the user's viewing intervals.
- **Request Body:**
  ```json
  {
    "userId": "string",
    "intervals": [
      {
        "start": "timestamp",
        "end": "timestamp"
      }
    ]
  }
  ```

### Get Progress
- **Endpoint:** `GET /progress/:userId`
- **Description:** Retrieves the user's progress data.
- **Response:**
  ```json
  {
    "userId": "string",
    "progress": [
      {
        "start": "timestamp",
        "end": "timestamp"
      }
    ]
  }
  ```

## Design Decisions

- **Database Choice:** PostgreSQL was chosen for its robustness and support for complex queries.
- **Interval Management:** Utility functions are implemented to handle merging of overlapping intervals, ensuring accurate tracking of unique viewing time.
- **Separation of Concerns:** The project is structured to separate routes, controllers, models, and utilities for better maintainability and scalability.

This README provides a comprehensive overview of the project setup, usage, and design rationale. For further details, please refer to the source code and comments within the files.