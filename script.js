// Utility Functions
const randomItem = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

// Number Class
class Number {
  constructor() {
    this.value = randomItem([0, 1]);
    this.numberEl = document.createElement("h3");

    this.numberEl.classList.add("number");
  }

  updateElement = () => {
    this.numberEl.innerHTML = this.value;
    document.body.append(this.numberEl);
  };

  changeVal = () => {
    this.value = randomItem([0, 1]);
  };
}

var numbers = [];
const numberAmount = 4000;

// 3500 itemes create a new html element with "Number" class
for (let i = 0; i < numberAmount; i++) {
  var num = new Number();
  num.updateElement();
  numbers.push(num);
}

// Every 100 millisecond update each number
setInterval(() => {
  numbers.forEach((number) => {
    number.changeVal();
    number.updateElement();
  });
}, 100);
