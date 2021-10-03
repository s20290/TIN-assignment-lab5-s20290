
const obj = {
    a: 420,
    b: "blaze it",
    c: [420,420,420],
    getA: function(){
        return this.a
    },
    getAction: function(){
        return this.a +" "+this.b
    },
    getC: function(){
        return this.c
    }
}

function printObject(o){
    Object.entries(o).forEach(e=>{
        console.log(e)
        console.log(typeof(e[1]))
    })   
}

printObject(obj)