const obj = {
    name:'daniel',
    age: 22,
    1:2
}
const key = 1
obj.work= 'analiza'
delete obj[1]
delete obj['age']

console.log(obj );
