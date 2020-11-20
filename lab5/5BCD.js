// b)	Implement a constructor function, creating objects representing students – they should include first and last name,
// id, array with grades (without subject names, just grades) , a method printing first and last name and grade average of
// a student
// c)	Create a prototype of a student object using initializer. The object should contain an array with list of courses
// each student should take. Write a function creating new objects based on this prototype, setting their first and
// last name and id properties.
// d)	Extend task B with getter for average grade property and getter and setter for student’s full name

function Student(first, last, id, grades) {
  this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.grades = grades;

  this.avg = () => {
    let sum = 0;
    this.grades.forEach((g) => {
      sum += g;
    });
    return sum / this.grades.length;
  };

  this.getAvg = () => {
    return this.avg();
  };

  this.getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };

  this.setName = (firstName, lastName) => {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  this.ShowStudentDetail = () => {
    return `Name of student: ${this.firstName} ${
      this.lastName
    }, Average of grade : ${this.avg()}`;
  };
}
const createSubject = (student) => {
  const courses = [];
  student.courses.forEach((course) =>
    courses.push({
      name: course,
      students: {
        name: student.firstName,
        lastName: student.lastName,
        id: student.id,
      },
    })
  );
  return courses;
};

Student.prototype.courses = [
  "English",
  "Calculus",
  "Database",
  "IT",
  "JS",
  "CSS",
];
let sName = new Student("Jongok", "Yoon", 18349, [4.5, 5, 4.5, 5, 4.5, 5]);
console.log(sName.ShowStudentDetail());
console.log(createSubject(sName));
sName.setName("Hyun", "Jung");
console.log("Edited name: " + sName.ShowStudentDetail());
