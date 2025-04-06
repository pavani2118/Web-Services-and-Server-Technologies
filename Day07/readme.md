# 📂 Node.js File Reader Examples

This project demonstrates three ways to read files in Node.js using the built-in `fs` module:

- ✅ Callback-based approach  
- ⚡ Async/Await with `Promise.allSettled()`  
- 📦 Promises using `.then()` and `.catch()`

---

## ✅ 1. Callback-Based File Reading

This is the traditional method using `fs.readFile()` with a callback.

### 🧠 Key Point
- `fs.readFile` is **asynchronous**.
- The console logs `"File reading is done..."` before the file content due to non-blocking I/O.

### 💡 Highlights
- Non-blocking I/O  
- Prints `"File reading is done..."` **before** reading finishes

---

## ⚡ 2. Async/Await + Promise.allSettled

Reads multiple files and handles each result (success or error) separately.

### 💡 Highlights
- Handles multiple files at once 📂📂  
- Each result shows:
  - `status`: ✅ **fulfilled** or ❌ **rejected**
  - `value`: file content (if successful)
  - `reason`: error info (if failed)

---

## 📦 3. Promise-Based with `.then()`/`.catch()`

A cleaner and modern approach using Promises.

### 📝 Promise Concept
A Promise is an object that tracks the status of an async operation:

- `pending` ⏳
- `fulfilled` ✅
- `rejected` ❌

### 💡 Highlights
- Great for chaining operations 🔗  
- Easy to combine with `async/await` in the future

---

## 🛠️ Requirements

- 🧠 Basic Node.js knowledge  
- 📦 Node.js installed on your machine  
- 📝 Create `file.txt` (and optionally `data.txt`) in your project folder

---

## 🧪 How to Run

```bash
node callback.js       # For callback-based example
node asyncAwait.js     # For async/await + allSettled
node promise.js        # For promise chaining
