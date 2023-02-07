//concat - joins two or more arrays in a single
let arr = ["adani","ambani"]
let arr1 = ["benstokes","billgates","chrisevans"]
let names = arr.concat(arr1);
console.log(names);

//Constructor

let text = names.constructor;
console.log(text);

 //copywithin
console.log("CopyWithin :"+ names.copyWithin(3,0));
//entries()
var x = names.entries();
for(let y of x){
    console.log(y);
}
//every()
function checkAdult(age) {
    return age >= 18;
}
let age = [13,12,33,34,22,31]
let check = age.every(checkAdult);
let check1 = age.every(age => age >= 18);
console.log(check1);
if (!check) {
    console.log("All members must be at least 18 years of age.")
}
//fill
let arr2=["sachin","dhoni"];
arr2.fill("dravid");
console.log(arr2);
//filter
function checkAdult(age) {
    return age >= 18;
}
console.log(age.filter(checkAdult));
//find
console.log(age.find(checkAdult));
//findIndex
console.log(age.findIndex(checkAdult));
//foreach
arr.forEach(display)
function display(arr)
{
    console.log(arr);
}
//array from()
console.log(Array.from("working"));
//includes()
console.log(arr.includes("adani"));
//index()
let index = arr.indexOf("ambani");
console.log(index);
//isArray()
console.log(Array.isArray(arr));
//join()
console.log(arr.join(" and "));
//keys()
let temp =arr2.keys()
for (let i of temp){
    console.log(i)
}
//lastIndex()
console.log(arr.lastIndexOf("ambani"));
//length()
console.log("the length is "+arr.length);
//map()
const numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));
//pop
console.log(numbers.pop());
//push
console.log(numbers.push(9));
//
//reduce
let num1=[2,4,5,7]
console.log(num1.reduce(mul))
function mul(x,y)
{
 return x*y
}

//reduce right
console.log(num1.reduceRight(sub))
function sub(x,y)
{
 return x-y
}

//reverse
console.log(num1.reverse())

//shift
console.log(num1.shift())
console.log(num1)

//slice
console.log(num1.slice(2,4))

//some
// console.log(arr.some(check))

//sort
let array=['n','a','x','t']
array.sort()
console.log(array)

//splice
array.splice(2, 0, "hi", "hello");
console.log(num1)

//toString
console.log(array.toString())

//unshift
array.unshift("good")
console.log(num1)

// //valueof
let A = [ 'alice','bob','david'];
      
let iterator = A.values();
  
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
