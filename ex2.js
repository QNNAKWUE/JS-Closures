function firstName (firstName) {
  var nameIntro = "My name is ";
  // this is an inner function which as we will get to see, has access to the outer function's variables

//this function lastName is a closure because it is a function inside another function
   function lastName (lastName) {
        return nameIntro + firstName + " " + lastName;
    }
    return lastName;
}

var fullName = firstName("Queen");
//The firstName outer function has returned which we passed to this var fullName

fullName ("Nnakwue");  // My name is Queen Nnakwue

// The closure "lastName" is called after the outer function has returned above
// and still has access to the outer function's //variables and parameter