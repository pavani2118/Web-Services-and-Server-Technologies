# 🔍  Data Retrieval in MongoDB 💎

Level up your data-hunting skills! Whether you're searching for a student, sorting a list, or slicing through massive datasets like a data ninja 🥷 

---

## ⚙️ Mastering the `find()` Method

MongoDB’s `find()` method is a **power tool** 🛠️ — here's how to use it like a pro.

---

### 🎯 1. Filter with Precision (Query Conditions)

Find students **older than 21**:

```js
db.students.find({ age: { $gt: 21 } })
```

🔹 `$gt` → greater than  
🔹 `$lt` → less than  
🔹 `$gte` → greater than or equal  
🔹 `$lte` → less than or equal  
🔹 `$ne` → not equal  

👀 Example: Students **not** in the "Physics" course:

```js
db.students.find({ course: { $ne: "Physics" } })
```

---

### 🧠 2. Combine Conditions (Logical Operators)

Find students in **Year 3** *AND* taking **Computer Science**:

```js
db.students.find({ year: 3, course: "Computer Science" })
```

More complex? Use `$and`, `$or`, `$nor`, `$not`:

```js
db.students.find({
  $or: [
    { course: "Mathematics" },
    { age: { $lt: 20 } }
  ]
})
```

📌 This returns students who are either in Mathematics **or** are younger than 20.

---

### 🧹 3. Keep It Clean (Projections)

Only need names and courses?

```js
db.students.find({}, { name: 1, course: 1, _id: 0 })
```
---

### 🔢 4. Sort Like a Boss

Sort by age (ascending):

```js
db.students.find().sort({ age: 1 })
```

Sort by name (Z to A):

```js
db.students.find().sort({ name: -1 })
```

---

### 🎚️ 5. Limit & Skip (Pagination Control)

Show only the first 3 records:

```js
db.students.find().limit(3)
```

Skip the first 2, then show the next 3:

```js
db.students.find().skip(2).limit(3)
```

🌀 Combine with sorting for full-on pagination magic!

---

### 🧙‍♂️ 6. Pattern Matching (Regex Power)

Find students whose name starts with “A”:

```js
db.students.find({ name: /^A/ })
```

Case-insensitive search for "john":

```js
db.students.find({ name: { $regex: "john", $options: "i" } })
```
---

### 📈 7. Conditional Arrays (Bonus: If You Store Lists)

Find students enrolled in **"Math" and "CS"** (stored in an array):

```js
db.students.find({ subjects: { $all: ["Math", "CS"] } })
```

Find any student taking **either** one:

```js
db.students.find({ subjects: { $in: ["Math", "CS"] } })
```

---

## 🧩 Final Tips

- 🔄 Combine `filter + projection + sort + limit` for optimal queries.
- 🧪 Always test queries in **Compass** before using them in code.
- 💡 Use indexes for faster search on large collections.

---
