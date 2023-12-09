function myname(){
    console.log("G");
    console.log("o");
}

myname();

function add(n1,n2){
    // console.log(n1+n2);
    let res=n1+n2;
    return res;
}
 const ans=add(3,6)
 console.log("result is::" , ans)

 function user(name){
    return `${name} just logged in`;
 }
 console.log(user("gokul"))

 function cart(...num){
    return num;
 }
 console.log(cart(200,300,400));

 function cart1(val1,val2,...num){
    return num;
 }
 console.log(cart1(200,300,400,500,600));
