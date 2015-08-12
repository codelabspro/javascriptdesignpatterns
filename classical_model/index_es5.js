
//----------------------------------------------------------------
function Answer(value) {
  this._val = value;
}

Answer.prototype.get = function fn1() {
  return this._val;
}

//----------------------------------------------------------------
function FirmAnswer(value) {
  Answer.call(this, value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {
  return Answer.prototype.get.call(this) + "!!";
  // return this.get() + "!!";
}
//----------------------------------------------------------------
var lifeAnswer = new Answer(42);
console.log("lifeAnswer" + lifeAnswer.get());


var piAnswer = new Answer(3.14159);
console.log("piAnswer" + piAnswer.get());

var luckyAnswer = new FirmAnswer(7);
console.log("luckyAnswer" + luckyAnswer.get());

var magicAnswer = new FirmAnswer(3);
console.log("magicAnswer" + magicAnswer.get());
//----------------------------------------------------------------

console.log("Is lifeAnswer an instance of Answer: " + (lifeAnswer instanceof Answer)) ;

console.log("Is lifeAnswer an instance of FirmAnswer: " + (lifeAnswer instanceof FirmAnswer)) ;

console.log("Is luckyAnswer an instance of Answer: " + (lifeAnswer instanceof Answer)) ;

console.log("Is luckyAnswer an instance of FirmAnswer: " + (lifeAnswer instanceof FirmAnswer)) ;

//----------------------------------------------------------------
