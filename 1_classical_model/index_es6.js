
//----------------------------------------------------------------
class Answer {
  constructor(value) {
    this._val = value;
  }

  get() {
    return this._val;
  }

};

//----------------------------------------------------------------
class FirmAnswer extends Answer{
  constructor(value) {
    super(value);
  }
  get() {
    return super() + "!!";
  }
};


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
