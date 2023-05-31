let captchaText = document.querySelector("#captcha");
var ctx = captchaText.getContext("2d");
let fillcolor = ["#fff", "#f5b642", "#6f8ede", "#7860b3", "#cf5ee6", "#d92e58"];
let alphaNums = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let fontFamilies = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Times New Roman",
  "Courier New",
  "Georgia",
];

let fontSize = ["44px", "36px", "30px", "28px", "34px"];

function generateCaptcha() {
  let emptyArr = [];
  for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
  }
  var c = emptyArr.join("");
  ctx.clearRect(0, 0, captchaText.width, captchaText.height);
  ctx.fillStyle = fillcolor[Math.floor(Math.random() * fillcolor.length)];

  ctx.font =
    Math.floor(Math.random() * 40) +
    "px " +
    fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  let blurAmount = Math.random() * 1; // Random blur value between 0 and 1
  ctx.filter = `blur(${blurAmount}px)`;

  ctx.fillText(c, captchaText.width / 4, captchaText.height / 2);
  ctx.filter = "none";
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(
      Math.random() * captchaText.width,
      Math.random() * captchaText.height
    );
    ctx.lineTo(
      Math.random() * captchaText.width,
      Math.random() * captchaText.height
    );
    ctx.strokeStyle = "#222";
    ctx.stroke();
  }
  console.log(c);
  return c;
}

window.addEventListener("load", function () {
  var captcha = generateCaptcha();

  function checkCaptcha() {
    let userInput = document.querySelector("#textBox");
    console.log(userInput.value);
    if (userInput.value === captcha) {
      document.getElementById("output-result").innerHTML = "It's Correct";
    } else {
      document.getElementById("output-result").innerHTML = "Try Again";
    }
  }

  document.getElementById("submit").addEventListener("click", checkCaptcha);
  document.getElementById("regenerate").addEventListener("click", function () {
    captcha = generateCaptcha();
  });
});
