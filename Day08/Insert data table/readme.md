This showcases how we manage student information using MongoDB. We've got details like:

* **Registration Numbers**: Unique IDs for each student (e.g., `2021IT010`).
* **Names**:  Student names (e.g., Pavani, Roneth).
* **Age**:  Student ages.
* **Degrees**:  The programs they're enrolled in (e.g., CS, IT, AMC).
* **GPA**:  Their academic performance.
* **Gender**:  Student gender.
* **Skills**:  The cool tech skills they possess (e.g., Java, Python, JS).

## 🛠️  How the Data Was Added

We used these MongoDB tools to build our student database:

  MongoDB Compass:  A user-friendly GUI to visualize and manage data.We used it to add some students manually.
  MongoDB Shell:  A command-line interface for interacting with MongoDB.We used commands like:
    
    insertOne():  To add students one by one. 
    insertMany(): To add groups of students quickly.
