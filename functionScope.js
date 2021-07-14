
function greet() {
  var greeting = 'Welcome Home';
  console.log(greeting);
}
// Prints 'Welcome Home'
greet(); //try calling the function outside of its scope==>Uncaught ReferenceError: greeting is not defined
console.log(greeting);