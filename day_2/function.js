function multiplyByFive(num=5){
    return num * 5
    
}

console.log(multiplyByFive());
console.log('/////////////////');

function print_name(name){
    return name.toUpperCase()
 } 

console.log(print_name("daniel"));
console.log('/////////////');

function print_age(age){
    const date = new Date()
    const year = date.getFullYear()-age
    return year
 } 

console.log(print_age(22));


console.log('//////////////////');

const cal = (x,y,t)=>{
    if(t=='add'){
        return x+y
     }
    else if(t=='subtract'){
        return x-y
    }
    else if(t=='nultiply'){
        return x*y
    }
    else if(t=='divide'){
        if (y!=0){
            return x/y
        }
        else 
            return `y=0 is not good`
     }
    else
        return `try agine`
 } 


const add =(a,b)=> a+b
const nultiply =(a,b)=> a*b
const subtract =(a,b)=> a-b
const divide =(a,b)=> a/b

const calculateor={
    add :(a,b)=> a+b,
    nultiply :(a,b)=> a*b,
    subtract :(a,b)=> a-b,
    divide :(a,b)=> a/b

}
const calculateorr={
    add : add,
    nultiply :(a,b)=> a*b,
    subtract :(a,b)=> a-b,
    divide :(a,b)=> a/b

}
console.log(calculateorr.add(2,2));




//////////exersise//////////////
console.log('//////////////////');

function sayHello(){ 
    console.log("Hello from the function");
    
} 

sayHello()

console.log('//////////////////');
function printOneToThree(){
    for (let i = 1; i <4 ; i++) {
        console.log(i);
        
     }
 } 
 printOneToThree()

console.log('/////////////');

function printLength(){
    const arr1=['daniel','saidov','barak','david']
    console.log(arr1.length);
    
 } 
 printLength()

console.log('///////////');

function printStudent(){
    const student={
        name:'Dana',
        age:16
    }
    console.log(`name: ${student.name}, age: ${student.age}`);

 } 

printStudent()

console.log('/////////////////');

function printEvensToTen(){
    for (let i = 2; i <=10 ; i+=2) {
        console.log(i);
        
     }
 } 

 printEvensToTen()
console.log('//////////////////');


 function sumTwoNumbers(){ 
    let a = 5
    let b = 7
    return a+b

 } 
let result=sumTwoNumbers()
console.log(`The sum is: ${result}`);


console.log('/////////////');
function getNamesLength(){ 
    const arr3= ["Dana", "Noa", "Yossi", "Ali"]
    return arr3.length
} 
console.log('////////////////');


function start(v,func){

    return func(v)
 } 

const add1 = (v)=>v+2

console.log(start(5,add1));


console.log('//////////////////');

function  calculateAverage(gradesArray){
    let sum =0
    for (let i = 0; i <gradesArray.length-1 ; i++) {
        sum+=gradesArray[i]   
     }
     return sum/gradesArray.length
    }
arr2=[70, 85, 90, 55, 100]

const settings ={
    passGrade:60,
    excellentGrade:90
}
function countPassed(gradesArray, passGrade){
    let num=0
    for (let i = 0; i <gradesArray.length ; i++) {
        if (gradesArray[i]> passGrade){
            num+=1
        }
     }
     return num
 } 
 
 function  getExcellentGrades(gradesArray, excellentGrade){ 
    const arr4=[]
    for (let i = 0; i <gradesArray.length ; i++) {
        if (gradesArray[i]>= excellentGrade){
            arr4.push(gradesArray[i])
        }
     }
     return arr4

 } 

function printReport(gradesArray, setting){
    x=calculateAverage(gradesArray)
    y=countPassed(gradesArray,setting.passGrade)
    z=getExcellentGrades(gradesArray,setting.excellentGrade)

    console.log(`Average: ${x}`)
    console.log(`Passed: ${y} students`)
    console.log(`Excellent grades: [${z}]`);
     
 } 

printReport(arr2,settings)

console.log('//////////////////////');

function createStudent(name,age){
    return { 
        name:name,
        age:age
    }
 } 

console.log(createStudent("daniel",22));

console.log('////////////////////');


 


