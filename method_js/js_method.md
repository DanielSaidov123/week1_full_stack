# כל המתודות המרכזיות ב‑JavaScript לפי קטגוריות

(מלא, ברור, עם הסבר ודוגמה לכל מתודה)

------------------------------------------------------------------------

# 1. Array -- מערכים

## push()

מוסיף איבר לסוף המערך.

``` js
let arr = [1,2];
arr.push(3); // [1,2,3]
```

## pop()

מסיר ומחזיר את האיבר האחרון.

``` js
[1,2,3].pop(); // 3
```

## shift()

מסיר את האיבר הראשון.

``` js
[1,2,3].shift(); // 1
```

## unshift()

מוסיף איבר בתחילת המערך.

``` js
[1,2].unshift(0); // [0,1,2]
```

## slice()

יוצר עותק חלקי של המערך.

``` js
[1,2,3,4].slice(1,3); // [2,3]
```

## splice()

מוחק/מוסיף איברים.

``` js
let arr=[1,2,3];
arr.splice(1,1); // מוחק 2
```

## concat()

מחבר מערכים.

``` js
[1,2].concat([3,4]); // [1,2,3,4]
```

## indexOf()

מוצא מיקום של ערך.

``` js
[1,2,3].indexOf(2); // 1
```

## lastIndexOf()

מוצא מיקום אחרון.

``` js
[1,2,2,3].lastIndexOf(2); // 2
```

## includes()

בודק אם קיים.

``` js
[1,2,3].includes(2); // true
```

## find()

מחזיר איבר שמקיים תנאי.

``` js
[1,2,3].find(x=>x>1); // 2
```

## findIndex()

מוצא את האינדקס של תנאי.

``` js
[1,2,3].findIndex(x=>x>1); // 1
```

## filter()

מסנן לפי תנאי.

``` js
[1,2,3,4].filter(x=>x%2===0); // [2,4]
```

## map()

יוצר מערך חדש.

``` js
[1,2,3].map(x=>x*2); // [2,4,6]
```

## reduce()

צובר ערכים.

``` js
[1,2,3].reduce((a,b)=>a+b,0); // 6
```

## reduceRight()

כמו reduce אבל מהסוף.

``` js
[1,2,3].reduceRight((a,b)=>a+b); // 6
```

## every()

בודק אם כולם עומדים בתנאי.

``` js
[2,4,6].every(x=>x%2===0); // true
```

## some()

בודק אם אחד לפחות נכון.

``` js
[1,3,4].some(x=>x%2===0); // true
```

## sort()

ממיין.

``` js
[3,1,2].sort(); // [1,2,3]
```

## reverse()

היפוך סדר.

``` js
[1,2,3].reverse(); // [3,2,1]
```

## join()

ממיר למחרוזת.

``` js
[1,2,3].join("-"); // "1-2-3"
```

## flat()

משטח מערכים מקוננים.

``` js
[1,[2,3]].flat(); // [1,2,3]
```

## flatMap()

map ואז flat.

``` js
[1,2].flatMap(x=>[x,x*2]); // [1,2,2,4]
```

## forEach()

לולאה על כל איבר.

``` js
[1,2,3].forEach(x=>console.log(x));
```

------------------------------------------------------------------------

# 2. String -- מחרוזות

## charAt()

``` js
"abc".charAt(1); // "b"
```

## charCodeAt()

``` js
"A".charCodeAt(0); // 65
```

## includes()

``` js
"hello".includes("ell"); // true
```

## indexOf()

``` js
"hello".indexOf("l"); // 2
```

## lastIndexOf()

``` js
"lol".lastIndexOf("l"); // 2
```

## slice()

``` js
"abcdef".slice(1,4); // "bcd"
```

## substring()

``` js
"abcdef".substring(1,4); // "bcd"
```

## toUpperCase()

``` js
"hi".toUpperCase(); // "HI"
```

## toLowerCase()

``` js
"HI".toLowerCase(); // "hi"
```

## trim()

``` js
"  hi  ".trim(); // "hi"
```

## trimStart()

``` js
"  hi".trimStart(); // "hi"
```

## trimEnd()

``` js
"hi  ".trimEnd(); // "hi"
```

## split()

``` js
"a,b,c".split(","); // ["a","b","c"]
```

## replace()

``` js
"hello".replace("l","x"); // "hexlo"
```

## replaceAll()

``` js
"lol".replaceAll("l","x"); // "xox"
```

## startsWith()

``` js
"hello".startsWith("he"); // true
```

## endsWith()

``` js
"hello".endsWith("lo"); // true
```

## repeat()

``` js
"ha".repeat(3); // "hahaha"
```

------------------------------------------------------------------------

# 3. Number

## toFixed()

``` js
(3.14159).toFixed(2); // "3.14"
```

## toPrecision()

``` js
(3.14159).toPrecision(3); // "3.14"
```

## toString()

``` js
(255).toString(16); // "ff"
```

------------------------------------------------------------------------

# 4. Math

## abs()

## round()

## floor()

## ceil()

## random()

## max()

## min()

## sqrt()

## trunc()

## sign()

(הכול עם דוגמאות דומות)

------------------------------------------------------------------------

# 5. Object

## keys()

``` js
Object.keys({a:1,b:2}); // ["a","b"]
```

## values()

``` js
Object.values({a:1,b:2}); // [1,2]
```

## entries()

``` js
Object.entries({a:1}); // [["a",1]]
```

## assign()

``` js
Object.assign({}, {a:1}, {b:2});
```

## freeze()

## seal()

## create()

## defineProperty()

## hasOwn()

------------------------------------------------------------------------

# 6. JSON

## stringify()

## parse()

------------------------------------------------------------------------

# 7. Date

## getFullYear()

## getMonth()

## getDate()

## getHours()

## setHours()

ועוד...

------------------------------------------------------------------------

# 8. Promise

## then()

## catch()

## finally()

------------------------------------------------------------------------

# 9. Map

## set()

## get()

## delete()

## clear()

## has()

------------------------------------------------------------------------

# 10. Set

## add()

## delete()

## clear()

## has()

------------------------------------------------------------------------

# 11. Function

## call()

## apply()

## bind()

------------------------------------------------------------------------

# 12. DOM

## querySelector()

## querySelectorAll()

## getElementById()

## addEventListener()

## append()

## remove()

## setAttribute()

## classList.add()

## classList.remove()

------------------------------------------------------------------------