## ➕ Inserting Data into MongoDB Collection

This guide will help you insert documents into your `students` collection inside the `unidb` database using **MongoDB Compass** and the **MongoDB Shell** 🧪

---

## 🛠️ Method 1: Using MongoDB Compass GUI

1. Open your database `unidb` and click on the `students` collection.
2. Click the **Insert Document** button.
3. Enter your document in JSON format, for example:

```json
{
  "name": "Alice Johnson",
  "age": 21,
  "course": "Computer Science",
  "year": 3,
  "email": "alice@example.com"
}
```

4. Click **Insert** and you're done! 🎉

---

## 🖥️ Method 2: Using MongoDB Shell

Connect to MongoDB shell and run:

```js
use unidb

db.students.insertOne({
  name: "Bob Smith",
  age: 22,
  course: "Mechanical Engineering",
  year: 4,
  email: "bob@example.com"
})
```

✅ You’ll see an acknowledgment with the inserted `_id`.

---

## 🌈 Bonus: Insert Many Students at Once

```js
db.students.insertMany([
  {
    name: "Cathy Green",
    age: 20,
    course: "Physics",
    year: 2,
    email: "cathy@example.com"
  },
  {
    name: "David Lee",
    age: 23,
    course: "Mathematics",
    year: 4,
    email: "david@example.com"
  }
])
```
