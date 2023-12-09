
// if(true){
//     var c=3;
// }
// console.log(c);//var declared inside if but have scope outside also


// const user={
//     name:"gokul",
//     age: 22,

//     welcome:function(){
//         console.log(`${this.name}, welcome`);
//         console.log(this)

//     }
// }
// // user.welcome();
// console.log(this)
// function chai(){
//     let name="gokul"
//     console.log(this);
//     // console.log(this.name)
// }
// chai();
// const tea=()=>{
//     let name="gu";
//     console.log(this)
// }
// tea();

// const add=(n1,n2) =>(n1+n2)
// console.log(add(4,7))

//immediatdetly ivoked function expression(IIFE)
(function chai(){
    //named IIFE
    console.log(`db connected`);
})(); //evoked and end by ; sign must 

(() =>{
    //unamed IIFE
    console.log("66");
})();
((name) =>{
    //unamed and parameter IIFE
    console.log(`db conncts by ${name}`);
})('gokul')