class Student {
  constructor(first, last, id, grades) {
    this.firstName = first;
    this.lastName = last;
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

  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set setFirstName(firstName) {
    this.firstName = firstName;
  }

  set setLastName(lastName) {
    this.lastName = lastName;
  }

  ShowStudentDetail = () => {
    return `Name of student: ${this.firstName} ${
      this.lastName
    }, Average of Grade: ${this.avg()}`;
  };
}

let createSubject = (student) => {
  const courses = [];
  student.courses.forEach((c) =>
    courses.push({
      name: c,
      students: {
        name: student.firstName,
        lastName: student.lastName,
        id: student.id,
      },
    })
  );
  return courses;
};

let sName = new Student("Jongok", "Yoon", 18349, [4.5, 5, 4.5, 5, 4.5, 5]);
sName.courses = ["English", "Calculus", "Database", "IT", "JS", "CSS"];
sName.setFirstName = "HyunJung";
console.log(sName.ShowStudentDetail());
console.log(createSubject(sName));
