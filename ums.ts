


class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name
    }

}
class  Student extends Person{
    rollNumber:string;
    courses:Course[]=[];

    constructor(name:string,age:number,rollNumber:string){
        super(name,age);
        this.rollNumber=rollNumber
    }
registerForCourses(course:Course){
    this.courses.push(course)
}
}
class Instructor extends Person{
    salary:number;
    courses:Course[]=[];
    constructor(name:string,age:number,salary:number){
        super(name,age);
        this.salary=salary
    }
assignCourse(course:Course){
    this.courses.push(course)
}

}
class Course{
    id:string;
    name:string;
    students:Student[]=[];
    instructor!:Instructor;
    
    constructor(id:string,name:string,){
        this.id=id;
        this.name=name;
        
    }
addStudent(student:Student){
this.students.push(student)
student.registerForCourses(this)
}
setInstructor(instructor:Instructor){

this.instructor=instructor;
instructor.assignCourse(this)
}
}

class Department{
name:string;
courses:Course[]=[]
constructor(name:string){
this.name=name;

}

addCourse(course:Course){
    this.courses.push(course)
}
}



const course1=new Course("course1","metavers")
const course2=new Course("course2","blockchain")


console.log(course1)
console.log(course2)
const student1= new Student("asad",34,"student1")
course1.addStudent(student1)
student1.registerForCourses(course1);
student1.registerForCourses(course2);

console.log(student1)

const student2=new Student("hussan",22,"student2")
const instructor1=new Instructor("zia",60,1000000)
const instructor2=new Instructor("imran",35,1000000)
course1.setInstructor(instructor1)
instructor1.assignCourse(course1)
instructor1.assignCourse(course2)
console.log(instructor1)
console.log(instructor2)
const department1=new Department("computer science")
department1.addCourse(course1)
console.log(department1);
