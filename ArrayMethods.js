//concat - joins two or more arrays in a single
arr = ["adani","ambani"]
arr1 = ["benstokes","billgates","chrisevans"]
names = arr.concat(arr1);
console.log(names);

//Constructor

let text = names.constructor;
console.log(text);

 //copywithin
console.log("CopyWithin :"+ names.copyWithin(3,0));
//entries()
var x = names.entries();
for(var y of x){
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
arr2=["sachin","dhoni"];
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
temp =arr2.keys()
for (i of temp){
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
num1=[2,4,5,7]
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
array=[1,3,5,2,4]
console.log(array.sort())

//splice
array.splice(2, 0, "hi", "hello");
console.log(num1)

//toString
console.log(array.toString())

//unshift
array.unshift("good")
console.log(num1)

// //valueof
var A = [ 'alice','bob','david'];
      
var iterator = A.values();
  
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
