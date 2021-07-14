function greeting(){
    let message = "Hello World";
    function displayMessage(){
        alert(message);
    }
    return displayMessage;
}
let newMessage = greeting();
newMessage();