let num1 = 100;
let num2 = 50;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let arr =[10, 20, 30];

arr.forEach((element) => {
  console.log(element);
});

function helloWorld(){
  console.log("Hello World!!");
}

helloWorld();


let price = 140;
let priceResult;

function coupon(price) {
  return price - (price * 0.1);
}

priceResult = coupon(price);
console.log(priceResult + "円です。");

let count = 5;
word1 = "abc";
word2 = "DEF";

function createWord(count, word1, word2) {
  let resultWord = "";
  for ( let i =0 ; i <count; i++) {
    if ((i+1) % 2 === 0) {
      resultWord += word2;
    } else {
      resultWord += word1;
    }
  }
  return resultWord;
}

console.log(createWord(count, word1, word2));
