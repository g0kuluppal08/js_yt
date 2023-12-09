// const arr=[1,3,5,2,6,7];
// arr.push(3);
// arr.pop();
// // arr.unshift(55); // add element to start
// arr.shift(); //remove element from start
// console.log(arr)
// const newarr=arr.join();
// console.log(newarr)
// console.log(newarr.length)
// console.log("A",arr)
// const h=arr.slice(1,3);
// console.log(h);
// console.log("B",arr)
// const k=arr.splice(1,3);
// console.log(k);
// console.log("C",arr)

//splice changes original array and slice didn't
//splice include end index also but slice didn't

const arr1=[2,3,5];
const arr2=[4,55,63];
const arr3=[2,1];
const sex=[...arr1,...arr2,...arr3] //spread opetator (instead of concatenate)
console.log(sex);

const v=[1,2,[3,4,44],7,[6,7,[44,[55]]]];
const vv=v.flat(Infinity); //flat the array v uptodepth infinity
console.log(vv)

console.log(Array.from("gokuluu"))
console.log(Array.of(20,30,0));