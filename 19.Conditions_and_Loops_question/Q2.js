let marks = -90;
let grade;
switch (true) {
  case marks>=90:
    console.log(`Grade: A`);
    break;
  case (marks<90 && marks>=70):
    console.log(`Grade: B`);
    break;
  case (marks<70 && marks>=50):
    console.log(`Grade: C`);
    break;
case (marks<50 && marks>=0):
    console.log(`Grade: F`);
    break;
  default:
    console.log(`Please Enter valid marks.`);
    break;
}
