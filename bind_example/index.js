function doubleDown() {
  this.score *= 2;
}

function Game() {
  this.score = 1;
  this.double = doubleDown.bind(this);
  this.printScore = function() {
    console.log(this.score);
  };
}

var game = new Game();
game.score = 3;
game.printScore();
console.log(game.double());
game.printScore();
