class Person {
  constructor(firstN, lastN) {
    this.firstName = firstN;
    this.lastName = lastN;
  }
  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set setFirstName(firstName) {
    this.firstName = firstName;
  }

  set setLastName(lastName) {
    this.lastName = lastName;
  }
}

class Student extends Person {
  constructor(first, last, id, grades) {
    super(first, last);
    this.id = id;
    this.grades = grades;
  }
  avg = () => {
    let sum = 0;
    this.grades.forEach((g) => {
      sum += g;
    });
    return sum / this.grades.length;
  };

  get getAvg() {
    return this.avg();
  }
  ShowStudentDetail = () => {
    return `Name of student: ${this.firstName} ${
      this.lastName
    }, Average of Grade: ${this.avg()}`;
  };
}
let sName = new Student("Jongok", "Yoon", 18349, [4.5, 5, 4.5, 5, 4.5, 5]);
sName.firstName = "HyngJung";
console.log(sName.ShowStudentDetail());
