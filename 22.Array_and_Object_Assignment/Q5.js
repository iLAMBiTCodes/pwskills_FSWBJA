const student ={
    name: "Alice",
    age: 22,
    Major: "Computer Science",
    GPA: "3.8",
    isEnrolled: true
};

function displayStudentInfo(student) {
    for(propName in student) {
        console.log(`Property: ${propName}, Value: ${student[propName]}`);
    };
}
displayStudentInfo(student);