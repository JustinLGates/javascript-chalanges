// O of n
//find longest word in a string
function findLongWord(str) {
  let arr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
//return if a word is a palindrome
// o n linear
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome(" racecar");

//o of n * 2 ? so o of n linear
function symmDiff(arr1, arr2) {
  let arr = [...arr1, ...arr2]; // time is spread a qick oporation?
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]] == true) {
      //look up time on obj prop?
      hashMap[arr[i]] = false;
    } else {
      hashMap[arr[i]] = true;
    }
  }
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

symmDiff([1, 2, 3, 5, 7, 8], [1, 2, 3, 4, 5, 45, 34]); //4 45 34 8

// takes num 10-99 if one even and one odd return true else false
function evenOdd(num) {
  let str = num.toString();
  if (!(parseInt(str[0]) % 2) && parseInt(str[1]) % 2) {
    return true;
  }
  if (parseInt(str[0]) % 2 && !(parseInt(str[1]) % 2)) {
    return true;
  }
  return false;
}
evenOdd(23);
let re = /[a-zA-z]/;
function pigIt(str) {
  let answer = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (re.test(words[i])) {
      let end = words[i][0] + "ay";
      answer.push(words[i].slice(1) + end);
    } else {
      answer.push(words[i]);
    }
  }

  return answer.join(" ");
}

// console.log(pigIt("Pig , latin is cool ?")); //'igPay atinlay siay oolcay'

function mostCommonLetter(str) {
  let answer = "";
  str = str.split("");
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }
  console.log(map);
  let largest = 0;
  let bigLetter = "";
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (map[letter] > largest) {
      largest = map[letter];
      bigLetter = letter;
    }
  }
  console.log(bigLetter);
  return answer;
}

console.log(mostCommonLetter("hello"));
