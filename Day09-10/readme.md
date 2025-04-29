# 🍃 MongoDB Hands-On Project

## 📦 Project Structure

```
📁 MongoDB-HandsOn/
├── 1_create_database.md
├── 2_insert_data.md
├── 3_retrieve_data.md

```

---

## 🚀 Features Covered

| ✅ Feature            | 📄 File                     |
|----------------------|-----------------------------|
| 📁 Create DB/Collection | `1_create_database.md`     |
| 🧾 Insert Documents     | `2_insert_data.md`         |
| 🔍 Basic Retrieval     | `3_retrieve_data.md`       |

---

## 🌱 Key Concepts

| 📌 Concept         | 📝 Description                               |
|-------------------|----------------------------------------------|
| **Database**       | Container for collections                   |
| **Collection**     | Similar to SQL table                        |
| **Document**       | BSON-style object (like a row)              |
| **_id Field**      | Auto-generated unique identifier            |

---

## 🧪 Tools Used

| Tool              | Purpose                              |
|------------------|---------------------------------------|
| MongoDB Shell     | Write and run commands manually       |
| MongoDB Compass   | GUI for visual database management    |
| VS Code (Ext)     | View/edit MongoDB from your editor    |

---


---

## 🧠 Sample Query Cheatsheet

```js
// Insert
db.students.insertOne({ name: "Alice", age: 21, regno: "2021IT001" })

// Basic find
db.students.find()

// Conditional query
db.students.find({ age: { $gt: 20 } })

// Projection
db.students.find({}, { name: 1, _id: 0 })

// Sorting
db.students.find().sort({ age: -1 })

// Regex search
db.students.find({ name: /^A/ })

// Aggregation
db.students.aggregate([
  { $group: { _id: "$course", count: { $sum: 1 } } }
])
```

---
