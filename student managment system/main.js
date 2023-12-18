class School {
    name;
    students = [];
    teachers = [];
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    id = 1;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher {
    name;
    age;
    schoolName;
    id = 1;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
let school1 = new School("FF");
let school2 = new School("APS");
// Register students
let student1 = new Student("tehreem", 20, school1.name);
let student2 = new Student("fatima", 21, school1.name);
let student3 = new Student("Ayesha", 20, school2.name);
// Register teachers
let t1 = new Teacher("Amna", 30, school1.name);
let t2 = new Teacher("faiza", 33, school1.name);
let t3 = new Teacher("farwa", 35, school2.name);
// Add students
school1.addStudent(student1);
school1.addStudent(student2);
school2.addStudent(student3);
// Add teachers
school1.addTeacher(t1);
school1.addTeacher(t2);
school2.addTeacher(t3);
export {};
