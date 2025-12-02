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

// function extractNumbers(arr){
//     if(arr==='list'){ };

//  } 