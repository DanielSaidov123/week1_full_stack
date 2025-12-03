
# טיפול בשגיאות ב-JavaScript עם try/catch

## 1. מבנה בסיסי
```js
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("שגיאה נתפסה:", error.message);
} finally {
  console.log("זה תמיד ירוץ, גם אם יש שגיאה או לא");
}
```

## 2. throw – זריקת שגיאה ידנית
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("אי אפשר לחלק באפס!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("שגיאה נתפסה:", error.message);
}
```

## 3. בדיקת סוג (Type) עבור מערך או אובייקט

### בדיקת מערך
```js
function checkArray(input) {
  try {
    if (!Array.isArray(input)) {
      throw new Error("זה לא מערך!");
    }
    console.log("זה מערך עם אורך:", input.length);
  } catch (error) {
    console.log("שגיאה:", error.message);
  }
}

checkArray([1, 2, 3]); // תקין
checkArray("hello");    // נתפס שגיאה
```

### בדיקת אובייקט
```js
function checkObject(input) {
  try {
    if (typeof input !== "object" || input === null || Array.isArray(input)) {
      throw new Error("זה לא אובייקט חוקי!");
    }
    console.log("זה אובייקט עם מפתחות:", Object.keys(input));
  } catch (error) {
    console.log("שגיאה:", error.message);
  }
}

checkObject({ name: "Daniel" }); // תקין
checkObject([1, 2, 3]);           // נתפס שגיאה
checkObject(null);                // נתפס שגיאה
```
