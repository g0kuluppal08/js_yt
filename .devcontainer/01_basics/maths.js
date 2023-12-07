const score= new Number(100)
console.log(score)
console.log(score.toFixed(2))
const h=123.8977
const k=1234000000
console.log(h.toPrecision(4))
console.log(k.toLocaleString('en-IN'))
console.log(Math.round(4.5))
console.log(Math.random()) // between 0 and 1 (both including)

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
