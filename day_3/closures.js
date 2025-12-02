function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


console.log('------------------');

if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

console.log('------------------');

if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined

console.log('------------------');



function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
console.log(myFunc);
myFunc();

console.log('------------------');

let count=0
function spell_factory(name){
    function iner(){
        count+=1
        console.log(`${name} level ${count}`);
        
     } 
     return iner

 } 
const func=spell_factory('daniel')
func()
func()
func()
func()
const d=spell_factory('gf')
d()
d()

console.log('------------------');



function createSession(username){
    let token=Math.random().toString(16).slice(2)
    return {
        getUsername:( ) => username,
        getTokenPreview:()=>token.slice(0,4),
        validateToken:(t)=>t===token,
        regenerateToken:()=>token=Math.random().toString(16).slice(2)

    }

}
// const fu=createSession('daada')
// console.log(fu.getTokenPreview());
// console.log(fu.getUsername());
const g=createSession('daniel')
console.log(g.getUsername());
console.log(g.getTokenPreview());
console.log(g.getTokenPreview());

console.log(g.validateToken('9fb6'));
console.log(g.regenerateToken());
console.log(g.getTokenPreview());

console.log('------------------');




