# 🎓 Student API Explorer 🌐

> A minimal, elegant, and expressive REST API to manage student data using Node.js + Express. Perfect for beginners learning backend development! 🧑‍💻

---

## 📌 What is this?

This is a simple API built with ❤️ and **Express.js** that lets you:

- 🧾 List all students  
- 🔍 Search students by registration number  
- 🧠 Filter by gender  
- 🧑‍🎓 Find students by name  

All powered by an in-memory JSON array — no database needed! ⚡

---

## 🗂️ Project Structure

```
📦 student-api
 ├── 📄 app.js           # API routes & Express server
 └── 📁 DB
     └── 📄 studentsdb.js # Student dataset
```

---

## 🚀 Getting Started

### 📦 Prerequisites

- 🧠 Basic JavaScript/Node.js knowledge
- ✅ Node.js installed (v14+)

### 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/student-api.git
   ```

2. Install dependencies:

   ```bash
   cd student-api
   npm install express
   ```

### ▶️ Run the Server

```bash
node app.js
```

The server will run at: `http://localhost:3001`

---

## 🔌 API Endpoints

### 🌍 `GET /`
- **Description**: Welcome endpoint
- **Response**: `Hello IT Students`

### 📚 `GET /stu`
- **Description**: Returns a list of all students.
- **Response**: A JSON array of student objects.

### 🆔 `GET /stu/:id`
- **Description**: Find a student by registration number.
- **Example**: `/stu/2021ICT47`
- **Response**: The student data matching the registration number, or a "Student not found" message.

### 🚻 `GET /stu/gender/:gen`
- **Description**: Filter students by gender.
- **Example**: `/stu/gender/female`
- **Response**: A list of students matching the gender.

### 👤 `GET /stu/name/:name`
- **Description**: Search for a student by name.
- **Example**: `/stu/name/Emily`
- **Response**: The student data matching the name.

---

## 🧠 Tech Stack

- **Node.js**: The runtime environment used for the backend.
- **Express.js**: Web framework for building the REST API.
- **JSON**: Used as an in-memory database to store student data.

---

## 📝 Example Student Data

```json
[
  {
    "regNo": "2021ICT78",
    "name": "Dinithi",
    "gender": "female",
    "age": 23,
    "course": "IT"
  },
  {
    "regNo": "2021ICT47",
    "name": "Pavani",
    "gender": "female",
    "age": 22,
    "course": "IT"
  }
]
```

---

## 👨‍💻 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.
