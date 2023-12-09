//singleton->made from constructor only one instance
// object.create

// object literals(not singleton)
//  const sym= Symbol("key1");

// const jsuser={
//     name:"gokul",
//     age:21,
//     [sym]:"mykey1",
//     location:"amritsar",
//     "full sex":"male",
//     email:"gokuluppal08@gmail.com",
//     lastlogin: ["mon","tue"]
// }
// // console.log(jsuser.lastlogin);
// // console.log(jsuser["email"])
// // console.log(jsuser["full sex"])
// // console.log(jsuser[sym])
// // jsuser.age=222;
// // // Object.freeze(jsuser);

// // jsuser.greeting=function(){
// //     console.log("helooo")
// // }

// // jsuser.greeting1=function(){
// //     console.log(`hello js user, ${this.name}`)
// // }
// // console.log(jsuser.greeting())
// // console.log(jsuser.greeting1())

// const user={
//     age:20,
//     fullname:{
//         firstname:"gokul",
//         lastname:"uppal"

//     }
// }
// console.log(user.fullname.firstname);
// const obj3=Object.assign({},user,jsuser);
// console.log(obj3);
// const obj4={...user,...jsuser};
// console.log(obj4);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

const course={
    name:"js",
    price:"99",
    prof:"gokul"
}
//destructuring of objevtfs 
const {prof}=course
console.log(prof);
const {prof:p}=course
console.log(p);
