
function Student(fname,lname,id,grades) {
    this.fname = fname
    this.lname = lname
    this.id = id
    this.grades = grades
    this.courses = ["cs","math","english","jerusalem"]
}


const s1 = new Student("jhon", "smith", 420, [4,2,0,4,2,0])
console.log(s1)