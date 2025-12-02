function processData() {
const data = null;
console.log("ID:", data);

const list = [1, 2, 3];
list.pop();
console.log(list);

const user = { name: "Dana", age: 30 };
user.age;
}
processData();

console.log('-------------------');



function sumAges (str) {
const parts = str.split(" ");
let total = 0;
for (let i = 0; i < parts.length-1; i++) {
    total += parseInt(parts[i])
}
return total
}

console. log (sumAges ("10 20 30 "));
console.log('------------------');

function extractNumbers(arr){
    if(Array.isArray(arr)){
    const arr2=[]
     for (let i = 0; i <arr.length ; i++) {
        if(typeof arr[i]==='number'){
            arr2.push(arr[i])
         };

      }
      return arr2
    }
    else{
        return 'erorr'
    }
     
 } 
 
 console.log(extractNumbers([1,2,3]));


 console.log('------------------');

function sumNumbersSafe(arr){ 
    const arr2=extractNumbers(arr)
    if(Array.isArray(arr2)){
    return arr2.reduce((a,b)=>a+b,0)
    }
    else{
        return 'erorr'
    }
} 

console.log(sumNumbersSafe( [1,2,3,'d',4]));



 
