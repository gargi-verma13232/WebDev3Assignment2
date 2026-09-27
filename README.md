# Student Management REST API

This project is a simple, lightweight RESTful API built with Node.js and Express.js. It is designed to manage student records and was built for the Web Development III Lab Assignment 2. 

The API uses in-memory JavaScript arrays for data storage, meeting the requirement of using no external databases (like MongoDB or MySQL).

---

## 🚀 Features

- **Full CRUD Operations:** Create, Read, Update, and Delete student records.
- **Custom Logging Middleware:** Automatically logs the HTTP method and URL for every incoming request.
- **Modular Routing:** Clean project structure using Express Router.
- **Proper Error Handling:** Standardized JSON error responses with appropriate HTTP status codes (200, 201, 400, 404).

---

## 🛠️ Technology Stack

- **Backend:** Node.js
- **Framework:** Express.js
- **Data Storage:** JavaScript Array & JSON Objects
- **Architecture:** Backend REST API only (No Frontend)

---

## 📁 Project Structure

```text
WebDev3Assignment2/
├── data/
│   └── students.js           # In-memory array containing student data
├── middleware/
│   └── logger.js             # Custom middleware for logging requests
├── routes/
│   └── studentRoutes.js      # Express router handling all /students endpoints
├── app.js                    # Main application entry point
├── package.json              # Project metadata and dependencies
└── README.md
```

---

## ⚙️ Setup and Installation

1. **Clone the repository** (if applicable) or download the files.
2. **Install dependencies** using npm:
   ```bash
   npm install
   ```
3. **Start the server:**
   ```bash
   npm start
   ```
4. **Access the API:** The server will run by default on `http://localhost:3001`.

---

## 📡 API Endpoints

All endpoints are prefixed with `/students`.

### 1. Get All Students
- **Method:** `GET`
- **URL:** `/students`
- **Description:** Returns a list of all students.
- **Success Response:** `200 OK`

### 2. Get Student by ID
- **Method:** `GET`
- **URL:** `/students/:id`
- **Description:** Returns a specific student by their ID.
- **Success Response:** `200 OK`
- **Error Response:** `404 Not Found` if the student does not exist.

### 3. Add a New Student
- **Method:** `POST`
- **URL:** `/students`
- **Description:** Creates a new student record.
- **Request Body (JSON):**
  ```json
  {
    "name": "New Student",
    "age": 20,
    "course": "B.Tech CSE"
  }
  ```
- **Success Response:** `201 Created`
- **Error Response:** `400 Bad Request` if required fields are missing.

### 4. Update an Existing Student
- **Method:** `PUT`
- **URL:** `/students/:id`
- **Description:** Updates the data of an existing student.
- **Request Body (JSON):**
  ```json
  {
    "name": "Updated Name",
    "age": 21,
    "course": "BCA"
  }
  ```
- **Success Response:** `200 OK`
- **Error Response:** `404 Not Found` if ID does not exist, `400 Bad Request` if data is invalid.

### 5. Delete a Student
- **Method:** `DELETE`
- **URL:** `/students/:id`
- **Description:** Deletes a student from the array.
- **Success Response:** `200 OK`
- **Error Response:** `404 Not Found` if the student does not exist.

---

## 🧪 Testing

You can test this API using tools like **Postman** or `curl` commands in your terminal.

Example curl command to fetch all students:
```bash
curl http://localhost:3001/students
```
