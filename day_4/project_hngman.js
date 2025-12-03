const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const words = ["javascript", "frontend", "developer", "browser", "function"];

function chooseRandomWord(words){

    return  words[Math.floor(Math.random() * words.length)]
 } 



function createHiddenWord(word){
    return "-".repeat(word.length);
 } 

function checkLetter(letter, word){ 
    const arr=[]
    for (let i = 0; i <word.length ; i++) {
        if(word[i]==letter){ 
            arr.push(i)
        };
     }
     return arr
} 



function updateHiddenWord(hiddenWord, indices, letter){
    let arr = hiddenWord.split("");
    for (let i = 0; i <indices.length ; i++) { 
        arr[indices[i]]=letter
    }

    return arr.join(""); 
 } 

function isWordComplete(hiddenWord){ 
    const arr=hiddenWord.split("")
    for (let i = 0; i <arr.length ; i++) { 
        if(arr[i]=='-'){
            return false
         };

    }
    return true
} 

function isLetterUsed(letter, usedLetters){
    if(usedLetters.includes(letter)){
        return true
     }
    usedLetters.push(letter)
    return false

 } 

function updateLives(isCorrect, lives){
    if(isCorrect==false){
        lives--
     };
    return lives

 } 

function startGame(){
    const word = chooseRandomWord(words);
    let hiddenWord = createHiddenWord(word);
    let usedLetters = [];
    let lives = 6;

    console.log("✨ Guess The Word!");
    console.log("Word:", hiddenWord);
    console.log("Lives:", lives);

    function ask(){
        rl.question("Enter a letter: ", (letter) => {

            // בדיקת קלט
            if(!letter || letter.length !== 1){
                console.log("❌ Enter ONE letter!");
                return ask();
            }

            // האם האות כבר בשימוש
            if(isLetterUsed(letter, usedLetters)){
                console.log("⚠️ You already guessed that letter!");
                return ask();
            }

            const indices = checkLetter(letter, word);
            const isCorrect = indices.length > 0;

            // עדכון חיים
            lives = updateLives(isCorrect, lives);

            // עדכון מילה נסתרת
            hiddenWord = updateHiddenWord(hiddenWord, indices, letter);

            console.log("\nWord:", hiddenWord);
            console.log("Used:", usedLetters.join(", "));
            console.log("Lives:", lives, "\n");

            // ניצחון
            if(isWordComplete(hiddenWord)){
                console.log("🎉 You WON! The word was:", word);
                return rl.close();
            }

            // הפסד
            if(lives <= 0){
                console.log("💀 You LOST! The word was:", word);
                return rl.close();
            }

            ask();
        });
    }

    ask();
}

startGame();