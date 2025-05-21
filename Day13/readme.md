# 📚 Course Management API 🚀

A RESTful API built with **Express.js** and **MongoDB** (using Mongoose).  
Test and explore the endpoints using **Postman**.  
Ideal for learning backend development, REST principles, and CRUD operations. 🔧

---

## 🔧 Tech Stack

- ⚙️ **Node.js**
- 🌐 **Express.js**
- 🍃 **MongoDB** with **Mongoose**
- 📬 **Postman** for API testing
- 🛠️ RESTful API architecture

---

## 📁 Project Structure

```

project-root/
├── models/
│   └── Course.js           # Mongoose schema
├── route/
│   └── courseRoute.js      # API endpoints
├── server.js               # Main server file

````
### 🏁 Run the App

📍 Server runs on: `http://localhost:3005`
📍 Database: `studentInfoDB` (local)

---

## 🧪 Testing with Postman

### 🔍 Get All Courses

**GET** `/course`

👉 Example:

```http
http://localhost:3005/course
```

---

### 🔍 Get Course by ID

**GET** `/course/:id`

👉 Example:

```http
http://localhost:3005/course/663251a17fe63d6a264e799b
```

---

### 🔍 Get Course by Code

**GET** `/course/code/:cid`

👉 Example:

```http
http://localhost:3005/course/code/IT2234
```

---

## ⚠️ Error Handling

All responses include HTTP status codes:

* `200` – Success ✅
* `404` – Not Found ❌
* `500` – Server Error 💥
