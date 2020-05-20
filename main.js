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
// o n
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome(" racecar");

function symmDiff(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]] == true) {
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
  console.log(answer);
}

symmDiff([1, 2, 3, 5, 7, 8], [1, 2, 3, 4, 5, 45, 34]); //4 45 34 8