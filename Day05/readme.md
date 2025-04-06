# 🎓 Student API Explorer 🌐

> A minimal, elegant, and expressive REST API to manage student data using Node.js + Express. Perfect for beginners learning backend development! 🧑‍💻

---

## 📌 What is this?

This is a simple API built with ❤️ and Express.js that lets you:

- 🧾 List all students  
- 🔍 Search students by registration number  
- 🧠 Filter by gender  
- 🧑‍🎓 Find students by name  

All powered by an in-memory JSON array — no database needed! ⚡

---

## 🗂️ Project Structure
📦 student-api ├── 📄 app.js # API routes & Express server └── 📁 DB └── 📄 studentsdb.js # Student dataset


---

## 🚀 Getting Started

### 📦 Prerequisites
- 🧠 Basic JavaScript/Node.js knowledge
- ✅ Node.js installed (v14+)

### 🛠️ Installation

```bash
npm install express

▶️ Run the Server
node app.js
📡 Server runs at: http://localhost:3001

🔌 API Endpoints
🌍 GET /
Welcome endpoint

txt
Copy
Edit
Hello IT Students
📚 GET /stu
Returns all students

json
Copy
Edit
[
  {
    "regNo": "2021ICT78",
    "name": "Dinithi",
    "gender": "female",
    "age": 23,
    "course": "IT"
  },
  ...
]
🆔 GET /stu/:id
Find a student by registration number

📥 Example:

bash
Copy
Edit
/stu/2021ICT47
✅ Found:

json
Copy
Edit
{
  "regNo": "2021ICT47",
  "name": "Pavani",
  ...
}

❌ Not found:

arduino
Copy
Edit
Student is not available
🚻 GET /stu/gender/:gen
Filter by gender

📥 Example:
/stu/gender/female

📤 Response:

json
Copy
Edit
[
  { "regNo": "2021ICT78", "name": "Dinithi", ... },
  ...
]
👤 GET /stu/name/:name
Search student by name

📥 Example:
/stu/name/Emily
📤 Response:

json
Copy
Edit
{
  "regNo": "2021ICT100",
  "name": "Emily",
  ...
}
🧠 Tech Stack
⚙️ Node.js

🚀 Express.js

🔤 JSON as in-memory DB

