// Question 1
function maxOfTwoNumbers(a,b) {
    if (a > b) {
        console.log(a);     
    } else {
        console.log(b)
    }
}

// Question 2
function maxOfThree(a, b, c) {
    if (a > b && a > c){
        console.log(a);
        
    } else if (b > a && b > c){
        console.log(b);
        
    } else {
        console.log(c);    
    }
}

// Question 3
function isCharacterAVowel(x) {
    var vowels = ["a","e","i","o","u"];
    if (vowels.includes(x)){
        console.log(true);
        return true;
    } else {
        console.log(false);
        
    }

}
isCharacterAVowel("v")

// Question 4
var array = [1, 2, 3, 4];

function sumArray(nums) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];     
    }
    console.log(sum);
    
}

sumArray(array)

// Question 4
function multiplyArray(arr) {
    var sum = 1;
    for (let i = 0; i < arr.length; i++) {
        sum = sum * arr[i];     
    }
    console.log(sum); 
}
multiplyArray(array)


// Question 5
var numberOfArguments = function(){
    console.log(arguments.length);
}

numberOfArguments(1,2,3,4)


// Question 6
var reverseString = function (string){
    splitString = string.split("")
    newString =""
    for (let i = splitString.length -1; i >= 0; i--) {
       newString += string[i]
    }
    console.log(newString);
    
}
reverseString("Hello World")

// Question 7
var cars = ["Saab", "Volvo", "BMW"];

function findLongestWord (words) {
    longestWord = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord){
            longestWord = words[i].length;
        }
    
    }
    return longestWord;
    
}

console.log(findLongestWord(cars))

// Question 8

var cars2 = ["Saab", "Volvo", "Vosflvo", "Voldssvo", "Vofsflvo", "BMW"];

function filterLongWords (arrOfWords, num) {
    newArray = [];
    for (let i = 0; i < arrOfWords.length; i++) {
        if (arrOfWords[i].length > num){
            newArray.push(arrOfWords[i]);
        }  
    }
    console.log(newArray);  
}

filterLongWords(cars2)
// Bonus 1
//??????


