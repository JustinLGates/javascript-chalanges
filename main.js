let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 1;
canvas.height = window.innerHeight - 1;
let c = canvas.getContext("2d");

let circles = [];
function makeCircle(amt = 1) {
  for (let i = 0; i < amt; i++) {
    let r = randRadius();
    let newCircle = {
      velX: Math.random() * 2.5 + -(Math.random() * 2.5),
      velY: -(Math.random() * 1.5 + 1),
      radius: r,
      posY: innerHeight - r,
      posX: Math.random() * innerWidth + r - r,
      color: randColor(),
      arch: Math.PI * 2,
    };
    circles.push(newCircle);
  }
}
function startCircles(amt = 1) {
  for (let i = 0; i < amt; i++) {
    let r = randRadius();
    let newCircle = {
      id: Math.random() * 4,
      velX: Math.random() * 1.5 + -(Math.random() * 1.5),
      velY: -(Math.random() * 1.5),
      radius: r,
      posY: Math.random() * innerHeight,
      posX: Math.random() * innerWidth + r - r,
      color: randColor(),
      arch: Math.PI * 2,
    };
    circles.push(newCircle);
  }
}
startCircles(50);
function randValues() {
  let randVals = {
    posY: (innerHeight -= window.innerHeight),
    posX: Math.random() * 150 + 50,
    color: randColor(),
  };
  return randVals;
}

function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  circles.forEach((circle) => {
    c.strokeStyle = circle.color;
    c.beginPath();
    c.arc(circle.posX, circle.posY, circle.radius, 0, Math.PI * 2, false);
    c.fillStyle = circle.color;
    c.fill();
    c.stroke();
    // if (circle.posX + circle.radius > innerWidth) {
    //   circle.velX = -circle.velX;
    // } else if (circle.posX - circle.radius <= 0) {
    //   circle.velX = -circle.velX;
    // }
    // if (circle.posY + circle.radius > innerHeight) {
    //   circle.velY = -circle.velY;
    // } else if (circle.posY + 10 <= 0) {
    //   circle.velY = -circle.velY;

    //   let index = circles.findIndex((c) => c.radius == circle.radius);
    //   circles.splice(index, 1);
    //   makeCircle();
    // }
    if (circle.posY < -circle.radius) {
      let index = circles.findIndex((c) => c.id == circle.id);
      circles.splice(index, 1);
      makeCircle();
    }
    circle.posY += circle.velY;
    circle.posX += circle.velX;
  });
  requestAnimationFrame(animate);
  //
  // const FRAMES_PER_SECOND = 30;  // Valid values are 60,30,20,15,10...
  // // set the mim time to render the next frame
  // const FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;
  // var lastFrameTime = 0;  // the last frame time
  // function animate(time){
  //     if(time-lastFrameTime < FRAME_MIN_TIME){ //skip the frame if the call is too early
  //         requestAnimationFrame(animate);
  //         return; // return as there is nothing to do
  //     }
  //     lastFrameTime = time; // remember the time of the rendered frame
  //     // render the frame
  //     requestAnimationFrame(animate); // get next farme
  // }
  // requestAnimationFrame(animate); // start animation

  //
}
animate();

function randRadius(max = 30) {
  return Math.random() * max + 5;
}
function randColor() {
  let rand = Math.floor(Math.random() * 9) + 1;
  let color = "";
  if (rand <= 3) {
    color = "#ff94a9";
  } else if (rand <= 6) {
    color = "#80e5c3";
  } else {
    color = "#ffff66";
  }
  return color;
}

//
//

// let sq = [];
// function makeSquares() {
//   for (let i = 0; i < 30; i++) {
//     let s = {
//       x: 1,
//       y: 1,
//       w: 1,
//       h: 1,
//       vx: 1,
//       vy: 1,
//     };

//     sq.push(s);
//   }
// }
// makeSquares();
// function animSquares() {
//   requestAnimationFrame(animSquares);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   c.beginPath();
//   c.stroke();
//   sq.forEach((s) => {
//     c.fillRect(s.x, s.y, s.h, s.w);
//     s.x += s.vx;
//     s.y += s.vy;
//   });
// }
// animSquares();
// //

// //
// let points = [];
// function makePoints() {
//   let x = 50;
//   let y = 50;
//   for (let i = 0; i < 50; i++) {
//     let point = {
//       pY: x,
//       pX: y,
//       vX: 1,
//       vY: 1,
//     };
//     points.push(point);
//     x++;
//     y++;
//   }
// }
// // makePoints();
// function anim2() {
//   requestAnimationFrame(anim2);
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   c.beginPath();

//   points.forEach((point) => {
//     c.lineTo(point.x, point.y);
//   });
// }
// anim2();

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
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!map[letter]) {
      map[letter] = 1;
    } else {
      map[letter]++;
    }
  }
  let largest = 0;
  let bigLetter = "";
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (map[letter] > largest) {
      largest = map[letter];
      bigLetter = letter;
    }
  }
  return bigLetter;
}

//Write a function that takes a string, then accepts a number and outputs an array of strings, where the output lines are never longer than the provided characters. Words may not be split, but you may assume that no single word is too long for a line. This problem is sometimes referred to the telegram problem because of the limited length of a telegram often around 70 characters, a modern twist would call it the tweet problem, limiting to 140.

var message =
  "Leverage agile[14]fram{{18}i}eworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.";

//function takes in a string and number

function telegram(str, num) {
  let space = 0; //track last space (where to split)
  let start = 0;
  let currentStr = ""; //track all letters
  let arr = []; // make array elem for each section
  //itterate over letters
  // for (let i = 0; i < str.length; i++) {
  //   //track where to split
  //   if (str[i] == " ") {
  //     space = i;
  //   }
  //   // add to string each time
  //   currentStr += str[i];
  //   //check to see if were at our max num and split on the space add to array
  //   if (i == num) {
  //     arr.push(currentStr.split("").splice(start, space));
  //     str.splice();
  //     console.log(str);
  //     start = space;
  //     i = space;
  //     //set our i to last space and continue reset current count ot 0
  //   }
  // }
}
//output is array of strings
// console.log(telegram(message, 142));

// function sortSmall(arr) {
//   arr.sort();

//   let answer = [];

//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i >= 1) {
//       if (i % 2 === 0) {
//         newArr[1] = arr[i];

//         answer.push([...newArr]);
//       } else {
//         newArr[0] = arr[i];
//       }
//     } else {
//       newArr[0] = arr[i];
//     }
//   }
//   console.log(answer);
// }
// let arr = [1, 2, 3, 3, 4, 6, 4, 8, 9, 7, 3];
// sortSmall(arr);

function returnfactorialRec(num) {
  if (num <= 1) {
    return num;
  }
  return (num = num * returnfactorialRec(num - 1));
}
// console.log(returnfactorialRec(5));

function returnfactorial(num) {
  let total = 1;
  for (let i = 1; i < num; i++) {
    console.log(i * i + total);
    total += i * i + total;
  }
  return total;
}
console.log(returnfactorial(5));
