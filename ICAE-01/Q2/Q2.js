let students = [
    { regno: "2021/ICT/01", name: "Pavani", age: 21, course: "IT", Pro_languages: ["Java", "JS", "C++"] },
    { regno: "2021/ICT/02", name: "Dinithi", age: 22, course: "CS", Pro_languages: ["Python", "C", "Go"] },
    { regno: "2021/ICT/03", name: "Ridmi", age: 23, course: "Software Engineering", Pro_languages: ["C#", "JavaScript", "Swift"] },
    { regno: "2021/ICT/04", name: "Enuri", age: 21, course: "Data Science", Pro_languages: ["Python", "R", "SQL"] },
    { regno: "2021/ICT/05", name: "Yeheni", age: 22, course: "Cybersecurity", Pro_languages: ["Ruby", "Bash", "C"] }
];

function getUniqueLanguages(data) {
    let languageSet = new Set();  

    data.forEach(student => {
        student.Pro_languages.forEach(lang => languageSet.add(lang));
    });

    return Array.from(languageSet); 
}

console.log(getUniqueLanguages(students));