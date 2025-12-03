# כל סוגי הרנדום ב-JavaScript

## 1. מספר רנדומלי בין 0 ל־1
```js
Math.random();
```

## 2. מספרים רנדומליים
### מספר עשרוני בטווח
```js
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
```

### מספר שלם בטווח
```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

### מספר שלילי/חיובי
```js
function randomSigned(maxAbs) {
  return (Math.random() * 2 - 1) * maxAbs;
}
```

### מספר גדול מאוד (BigInt)
```js
function randomBigInt() {
  return crypto.getRandomValues(new BigUint64Array(1))[0];
}
```

## 3. רנדום בוליאני / בחירה
### True / False
```js
function randomBool() {
  return Math.random() < 0.5;
}
```

### בחירה בין שני ערכים
```js
function randomChoice(a, b) {
  return Math.random() < 0.5 ? a : b;
}
```

### בחירה בין ערכים מרובים
```js
function randomFrom(...values) {
  return values[Math.floor(Math.random() * values.length)];
}
```

## 4. רנדום מתוך מערכים
### איבר אקראי מתוך מערך
```js
function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
```

### אינדקס אקראי
```js
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
```

### ערבוב מערך (Shuffle)
```js
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```

## 5. רנדום מחרוזות
### אות רנדומלית
```js
function randomLetter() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * chars.length)];
}
```

### אות גדולה/קטנה
```js
function randomLetterFull() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * chars.length)];
}
```

### מחרוזת אלפאנומרית רנדומלית
```js
function randomAlphaNum() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
}
```

### מחרוזת רנדומלית באורך מסוים
```js
function randomString(len = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}
```

## 6. רנדום צבעים
### HEX
```js
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
```

### RGB
```js
function randomRGB() {
  return `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
}
```

## 7. רנדום מאובטח (crypto)
### UUID רנדומלי
```js
crypto.randomUUID();
```

### Bytes רנדומליים
```js
crypto.getRandomValues(new Uint8Array(16));
```

## 8. רנדום לפי התפלגות
### התפלגות נורמלית (Gaussian)
```js
function randomGaussian() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
```

### רנדום עם משקל (Weighted)
```js
function weightedRandom(items, weights) {
  const sum = weights.reduce((a, b) => a + b, 0);
  let rnd = Math.random() * sum;

  for (let i = 0; i < items.length; i++) {
    if (rnd < weights[i]) return items[i];
    rnd -= weights[i];
  }
}
```

## 9. רנדום תאריכים
```js
function randomDate(start, end) {
  return new Date(randomInt(start.getTime(), end.getTime()));
}
```
