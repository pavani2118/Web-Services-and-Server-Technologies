## 🚀 What's Inside?

This project showcases how we manage student information using MongoDB. We've got details like:

* **Registration Numbers**: Unique IDs for each student (e.g., `2021IT010`).
* **Names**:  Student names (e.g., Pavani, Roneth).
* **Age**:  Student ages.
* **Degrees**:  The programs they're enrolled in (e.g., CS, IT, AMC).
* **GPA**:  Their academic performance.
* **Gender**:  Student gender.
* **Skills**:  The cool tech skills they possess (e.g., Java, Python, JS).

## 🗂️ Database Structure

Here's how the data is structured in MongoDB:

* **Database:** `unidb` 📂
* **Collection:** `students` 🧑‍🎓

Each student's data is stored as a document, like this:

```json
{
  "_id": ObjectId("..."),  // MongoDB's magic ✨ identifier
  "regno": "2021IT...",     // Student ID 🆔
  "name": "...",          // Name 🏷️
  "age": 21,              // Age 🎂
  "degree": "CS",         // Degree 🎓
  "gpa": 3.8,             // GPA 💯
  "gender": "Female",       // Gender 🚻
  "skills": ["Java", "...", "..."] // Skills 🛠️
}
