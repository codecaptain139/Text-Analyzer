const textInput = document.getElementById("textInput");

const wordBtn = document.getElementById("wordBtn");
const charBtn = document.getElementById("charBtn");
const vowelBtn = document.getElementById("vowelBtn");
const reverseBtn = document.getElementById("reverseBtn");
const consonantBtn = document.getElementById("consonantBtn");
const longestWordBtn = document.getElementById("longestWordBtn");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");

function isEmpty(text) {
    return text.trim() === "";
}

function countWords() {
    const text = textInput.value;

    if (isEmpty(text)) {
        result.innerText = "Please enter some text.";
        return;
    }

    const words = text.trim().split(/\s+/);
    result.innerText = `Word Count: ${words.length}`;
}

wordBtn.addEventListener("click", countWords);

function countCharacters() {
    const text = textInput.value;

    if (isEmpty(text)) {
        result.innerText = "Please enter some text.";
        return;
    }

    result.innerText = `Character Count: ${text.length}`;
}

charBtn.addEventListener("click", countCharacters);

function countVowels() {
    const text = textInput.value.toLowerCase();

    if (isEmpty(text)) {
        result.innerText = "Please enter some text.";
        return;
    }

    let count = 0;
    const vowels = "aeiou";

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    result.innerText = `Vowel Count: ${count}`;
}

vowelBtn.addEventListener("click", countVowels);

function reverseText() {
    const text = textInput.value;

    if (isEmpty(text)) {
        result.innerText = "Please enter some text.";
        return;
    }

    const reversed = text.split("").reverse().join("");
    result.innerText = reversed;
}

reverseBtn.addEventListener("click", reverseText);

function countConsonant() {
    const text = textInput.value.toLowerCase();

    if(isEmpty(text)){
        result.innerText = "Please enter some text";
        return;
    }

    let count = 0;
    const vowels = "aeiou";

    for(let char of text){
        if(char >= "a" && char <= "z" && !vowels.includes(char)){
            count++;
        }
    }

    result.innerText = `Consonant Count: ${count}`;
}

consonantBtn.addEventListener("click", countConsonant);

function findLongestWord() {
    const text = textInput.value;

    if(isEmpty(text)){
        result.innerText = "Please enter some text";
        return;
    }

    const words = text.trim().split(/\s+/);
    let longestWord = "";

    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    result.innerText = `Longest Word: ${longestWord}`;
}

longestWordBtn.addEventListener("click", findLongestWord)

function clearText() {
    textInput.value = "";
    result.innerText = "Result will appear here";
}

clearBtn.addEventListener("click", clearText);
