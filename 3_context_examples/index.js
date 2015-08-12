// The following examples explain context, call, apply and bind
// context === this

//------------------------------------
//Example 1: Context
var obj = {
foo: function() {
  console.log(this === window);
 }
}
// call, apply, bind
obj.foo.call(window);
// returns true

//------------------------------------------------------------------------
//Example 2:

var obj = {
foo: function() {
  console.log(this === window);
 }
}
obj.foo.();
// returns false

//------------------------------------------------------------------------
//Example 3: Passing in arguments
var obj = {
foo: function(one, two, three) {
  console.log(this === window);
 }
}
obj.foo.call(window, 1, 2, 3);
// returns true

//------------------------------------------------------------------------
//Example 4: Apply takes only 2 arguments
var obj = {
foo: function(one, two, three) {
  console.log(this === window);
 }
}
obj.foo.apply(window, [1, 2, 3]);
//------------------------------------------------------------------------
//Example 5: Bind returns a bound function
// that takes 1 argument and it always
// executes foo with the passed in context
var obj = {
foo: function(one, two, three) {
  console.log(this === window);
 }
}
var myBoundFoo = obj.foo.bind(window);
myBoundFoo();
// returns true
obj.foo();
// returns false;
//------------------------------------------------------------------------
