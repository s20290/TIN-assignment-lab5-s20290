class Student{
    constructor(fname,lname,id,grades) {
        this.fname = fname
        this.lname = lname
        this.id = id
        this.grades = grades
        this.fullname = ""
    }
    get averageGrade(){
        let avg = 0
        this.grades.forEach(element => {
            avg+=element
        });
        avg = avg/this.grades.length
        this.avg = avg
        return avg
    }
    set studentFullname(fullname){
        this.fullname = fullname
    }
    get fullname(){
        return this.fullname
    }
}

const s1 = new Student("jhon", "smith", 420, [4,2,0,4,2,0])
console.log(s1)
console.log(s1.fullname)
function printStudentDetail(s){
    console.log(s.fname)
    console.log(s.lname)
    console.log(s.averageGrade)
}

printStudentDetail(s1)

s1.fullname = "John Smith"
console.log(s1)