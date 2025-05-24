# Lecture Progress Tracking Backend

A Node.js, Express, and PostgreSQL backend to track user progress on lecture videos, supporting unique viewing intervals and progress resumption.

## Features

- Save and merge user video viewing intervals
- Retrieve progress for any user/video
- Calculates unique viewing time and percentage
- RESTful API with clear endpoints
- Environment-based configuration
- Modular code structure

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd lecture-progress-backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment:**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   NODE_ENV=development
   DB_USER=postgres
   DB_HOST=localhost
   DB_NAME=saurabh-development-db
   DB_PASSWORD=postgres
   DB_PORT=5432
   ```

4. **Set up the database:**
   Create the required table:
   ```sql
   CREATE TABLE lecture_progress (
     id SERIAL PRIMARY KEY,
     user_id VARCHAR NOT NULL,
     video_id VARCHAR NOT NULL,
     start_time NUMERIC NOT NULL,
     end_time NUMERIC NOT NULL
   );
   ```

### Running the Server

```sh
npm start
```
Server runs at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Save Progress

- **POST** `/api/progress`
- **Body:**
  ```json
  {
    "userId": "string",
    "videoId": "string",
    "intervals": [{ "start": 0, "end": 120 }],
    "videoDuration": 300
  }
  ```
- **Response:**
  ```json
  {
    "message": "Progress saved",
    "progress": 40,
    "intervals": [{ "start": 0, "end": 120 }]
  }
  ```

### Get Progress

- **GET** `/api/progress/:userId/:videoId`
- **Response:**
  ```json
  {
    "intervals": [{ "start": 0, "end": 120 }]
  }
  ```

## Project Structure

- `src/app.js` – Express app entry point
- `src/routes/` – API route definitions
- `src/controllers/` – Request handlers
- `src/models/` – Database queries
- `src/services/` – Business logic
- `src/utils/` – Utility functions

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

[ISC](LICENSE)