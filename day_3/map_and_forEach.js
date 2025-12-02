function doubleValues(arr){
    const doubled = arr.map(num => num*2)
    return doubled
 } 



function onlyEvenValues(arr){
    const evens =arr.filter(num => num%2===0)
    return evens

 } 

function showFirstAndLast(arr){
    const tayp= arr.filter(itens => typeof itens==='string')
    const arr1=[tayp[0],tayp[tayp.length-1]]
    return arr1
 } 

function vowelCount(str) {
    const obj = {};
    const vowels = ['a','e','i','o','u'];

    str.toLowerCase().split('').forEach(function(char) {
        if (vowels.includes(char)) {
            obj[char] = (obj[char] || 0) + 1;
        }
    });

    return obj;
}

function capitalize (str){ 
    return str.toUpperCase()

} 

function shiftLetters(str){
   return str.split('').map(s=>String.fromCharCode(s.charCodeAt()+1)).join('')
 } 

 function shiftLetters(str){
    return str.split(' ').map((word , index)=>{
        if(index%2==1){
           return  capitalize(word)
         }
         else{
            return word
         }
    }).join(' ')

  } 
console.log(shiftLetters("hello world this is chatgpt"));