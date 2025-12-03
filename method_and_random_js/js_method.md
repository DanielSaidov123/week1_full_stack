
# כל המתודות השימושיות ב‑JavaScript (עם דוגמאות ברורות)

הקובץ מסודר לפי קטגוריות בצורה ברורה ופשוטה.

---

# 📌 1. מתודות של Arrays

## `push()` – הוספה לסוף
```js
const arr = [1,2,3];
arr.push(4);
console.log(arr); // [1,2,3,4]
```

## `pop()` – הסרה מהסוף
```js
const arr = [1,2,3];
arr.pop();
console.log(arr); // [1,2]
```

## `unshift()` – הוספה לתחילת המערך
```js
const arr = [2,3];
arr.unshift(1);
console.log(arr); // [1,2,3]
```

## `shift()` – הסרה מהתחלה
```js
const arr = [1,2,3];
arr.shift();
console.log(arr); // [2,3]
```

## `includes()` – האם הערך קיים
```js
[1,2,3].includes(2); // true
```

## `indexOf()`
```js
[1,2,3].indexOf(3); // 2
```

## `slice()` – העתקה חלקית
```js
const arr = [1,2,3,4];
console.log(arr.slice(1,3)); // [2,3]
```

## `splice()` – מחיקה/הוספה באמצע
```js
const arr = [1,2,3];
arr.splice(1,1); // מוחק את אינדקס 1
console.log(arr); // [1,3]
```

## `map()` – יצירת מערך חדש
```js
[1,2,3].map(n => n * 2); // [2,4,6]
```

## `filter()`
```js
[1,2,3,4].filter(n => n % 2 === 0); // [2,4]
```

## `reduce()`
```js
[1,2,3].reduce((total, n) => total + n, 0); // 6
```

## `find()`
```js
[1,2,3,4].find(n => n > 2); // 3
```

## `findIndex()`
```js
[10,20,30].findIndex(n => n === 30); // 2
```

## `sort()`
```js
[3,1,2].sort(); // [1,2,3]
```

## `reverse()`
```js
[1,2,3].reverse(); // [3,2,1]
```

## `join()`
```js
["a","b","c"].join("-"); // "a-b-c"
```

---

# 📌 2. מתודות של Strings

## `length`
```js
"daniel".length; // 6
```

## `toUpperCase()`
```js
"daniel".toUpperCase(); // "DANIEL"
```

## `toLowerCase()`
```js
"HELLO".toLowerCase(); // "hello"
```

## `includes()`
```js
"hello world".includes("world"); // true
```

## `indexOf()`
```js
"abcabc".indexOf("b"); // 1
```

## `slice()`
```js
"abcdef".slice(1,4); // "bcd"
```

## `substring()`
```js
"abcdef".substring(2,5); // "cde"
```

## `split()`
```js
"1,2,3".split(","); // ["1","2","3"]
```

## `replace()`
```js
"hello world".replace("world", "JS"); // "hello JS"
```

---

# 📌 3. מתודות של Objects

## `Object.keys()`
```js
Object.keys({a:1,b:2}); // ["a","b"]
```

## `Object.values()`
```js
Object.values({a:1,b:2}); // [1,2]
```

## `Object.entries()`
```js
Object.entries({a:1,b:2}); // [["a",1],["b",2]]
```

## `hasOwnProperty()`
```js
const obj = {a:1};
obj.hasOwnProperty("a"); // true
```

---

# 📌 4. מספרים (Number)

## `parseInt()`
```js
parseInt("42"); // 42
```

## `parseFloat()`
```js
parseFloat("3.14"); // 3.14
```

## `toFixed()`
```js
(3.14159).toFixed(2); // "3.14"
```

---

# 📌 5. Math – מתמטיקה

## `Math.random()`
```js
Math.random(); // רנדום בין 0 ל-1
```

## `Math.floor()`
```js
Math.floor(4.9); // 4
```

## `Math.ceil()`
```js
Math.ceil(4.1); // 5
```

## `Math.round()`
```js
Math.round(4.5); // 5
```

## `Math.max()`
```js
Math.max(1,5,9); // 9
```

## `Math.min()`
```js
Math.min(1,5,9); // 1
```

---

# 📌 6. JSON

## `JSON.stringify()`
```js
JSON.stringify({a:1}); // '{"a":1}'
```

## `JSON.parse()`
```js
JSON.parse('{"a":1}'); // {a:1}
```

---

# 📌 7. Date – תאריכים

## יצירת תאריך
```js
new Date();
```

## קבלת שנה/חודש/יום
```js
const d = new Date();
d.getFullYear();
d.getMonth();
d.getDate();
```

---

# 📌 8. מתודות שימושיות של Console

## `console.log()`
```js
console.log("hello");
```

## `console.error()`
```js
console.error("error");
```

## `console.table()`
```js
console.table([{a:1},{a:2}]);
```

---

# 📌 9. Promise / async

## `then()`
```js
fetch(url).then(res => console.log(res));
```

## `catch()`
```js
fetch(url).catch(err => console.log(err));
```

## async/await
```js
async function test() {
  const data = await fetch(url);
}
```

---

# 📌 10. Set / Map

## Set
```js
const s = new Set([1,2,2,3]);
console.log(s); // {1,2,3}
```

## Map
```js
const m = new Map();
m.set("a", 10);
m.get("a"); // 10
```

---

# 📌 11. פונקציות מובנות של Arrays ES6+

## `forEach()`
```js
[1,2,3].forEach(n => console.log(n));
```

## `some()`
```js
[1,2,3].some(n => n > 2); // true
```

## `every()`
```js
[1,2,3].every(n => n > 0); // true
```

---

# ✔️ זהו!  
הקובץ כולל **את כל המתודות השימושיות באמת**, עם דוגמא ברורה לכל מתודה.
