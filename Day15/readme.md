# 🎓 Student App API 📘

A RESTful API built using **Node.js**, **Express**, and **MongoDB** to manage **Students**, **Courses**, and **Degrees** — with full CRUD support and relationship handling!

---

## 🌟 Features

- 🧑‍🎓 Manage Students
- 📚 Enroll Students in Courses
- 🎓 Assign Degrees to Students
- 🔗 Demonstrates:
  - **One-to-Many** ➡️ Degree → Students
  - **Many-to-Many** ⬌ Students ↔ Courses
- 🧪 Tested using Postman
- 🚀 Live Reloading with Nodemon

---

## 🏗️ Project Structure

```

student-app/
│
├── models/            # 📦 Mongoose Schemas
│   ├── student.js
│   ├── course.js
│   └── degree.js
│
├── routes/            # 🚦 Express Routes
│   ├── studentRoutes.js
│   ├── courseRoutes.js
│   └── degreeRoutes.js
│
├── controllers/       # 🧠 Logic Handlers
├── .env               # 🔐 Environment Config
├── app.js             # 💻 Main App Entry
└── package.json       # 📦 Project Metadata

````

## 📬 API Endpoints

| Resource | Endpoint        | Description                        |
| -------- | --------------- | ---------------------------------- |
| Student  | `/api/students` | 👨‍🎓 CRUD operations for students    |
| Course   | `/api/courses`  | 📘 CRUD operations for courses     |
| Degree   | `/api/degrees`  | 🎓 CRUD operations for degrees     |

---

## 📊 Relationships

* 🧑‍🎓 **Student–Degree**: One-to-Many
* 📘 **Student–Course**: Many-to-Many

---

## 🔧 Tech Stack

* 🟢 Node.js
* ⚙️ Express.js
* 🍃 MongoDB with Mongoose
* 🧪 Postman for testing
* 🔁 Nodemon for development
