
let mydate=new Date()
//date is object in js

console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())

let h=new Date("2023-01-14")
let k=new Date(2025,1,24)
k=Date(2025,1,23,5,4)
console.log(h.toLocaleString());
console.log(k.toLocaleString());

let timestamp=Date.now()
console.log(timestamp)

console.log(Math.floor(timestamp/1000))

mydate.toLocaleString(`default`,{
    weekday:"long",
    era:"narrow",
})

console.log(mydate)