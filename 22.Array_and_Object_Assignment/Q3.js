const student ={
    name: "Alice",
    age: 22,
    Major: "Computer Science",
    GPA: "3.8",
    isEnrolled: true
};
// a)
Object.preventExtensions(student);
// b)
const extensibleStatus = Object.isExtensible(student);
// c)
const teacher = {name: "Albert", subject: "Math"};
// d)
Object.seal(teacher);
// e)
const sealedStatus = Object.isSealed(teacher);
// f)
console.log(`Extensible Status of Student: ${extensibleStatus} \n --- \nSealed Status of Teacher: ${sealedStatus}`);