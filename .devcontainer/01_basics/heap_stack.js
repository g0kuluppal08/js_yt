//primitive datatypes uses stack
//non primitive (array,objects,functions)->heap(by refernce)

let obj={
    email:"yahoo@gmail.com",
    age:10,
}

let obj2=obj;
obj2.age=22;
console.log(obj2.age)
console.log(obj.age)

let x=Symbol('123')
let y=Symbol('123') //symbol always produces different output instead of same input

console.log(x==y)