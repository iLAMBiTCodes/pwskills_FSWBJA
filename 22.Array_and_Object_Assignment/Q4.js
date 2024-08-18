const students = [
    {id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A"},
    {id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"},
    {id: 3, firstName: "Bob", lastName: " Johnson", age: 19, grade: "A"},
];

function addStudent(firstName, lastName, age, grade) {
    const newStudent = {id: students.length + 1, firstName: firstName, lastName: lastName, age: age, grade: grade};
    students.push(newStudent);
}

// addStudent("Lambit", "Dohotia", 22, "A+");
// console.log(students);

function updateStudent(id, updateInfo){
    const targetStudent = students.find(student => student.id === id);
    Object.assign(targetStudent, updateInfo);
}

updateStudent(1, {firstName: "Albert", lastName: "Einstein", age: 145, grade: "O"});
console.log(students);

function deleteStudent(id) {
    for(let i = 0; i < students.length; i++) {
        if(students[i].id === id) {
            students.splice(i, 1);
            return;
        }
    }
}

// deleteStudent(4);
// console.log(students);

function listAllStudents() {
    console.log("----Student Lists----")
    students.forEach((student, index) => {
        console.log(`Student ID: ${student.id}, Name: ${student.firstName + " " + student.lastName}, Age: ${student.age}, Grade: ${student.age}`);
    })
};

// listAllStudents();

function studentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// console.log(studentsByGrade("B"));

function averageAge() {
    return students.reduce((acc, val) => acc + (val.age/students.length) , 0)
}

// console.log(averageAge());