function createGreeterFactory(str){

    function greeter(s){
        console.log(`${s} , ${str}`);
         
    } 
    return greeter

 } 

const hi=createGreeterFactory('hi')
hi('daniel')

console.log('------------------');


function invoiceFactory(startNumber){
    function ineer(){
        console.log(startNumber);  
        startNumber+=1
     } 
     return ineer
 } 

const number=invoiceFactory(1000)
number()
number()
number()






