var correctAnswer = "2911";

function appendToInput(number) {
    var userInput = document.getElementById('inputDisplay').textContent;
    if (userInput.length < 4) {
        userInput += number;
        updateInputDisplay(userInput);
    }
}

function clearInput() {
    var userInput = document.getElementById('inputDisplay').textContent;
    userInput = userInput.slice(0, -1);
    updateInputDisplay(userInput);
}

function updateInputDisplay(userInput) {
    document.getElementById('inputDisplay').textContent = userInput;
}

function checkPIN() {
    var userInput = document.getElementById('inputDisplay').textContent;
    if (userInput === correctAnswer) {
        window.location.href = "home/index.html"; // Redirect to home page
    } else {
        alert("Incorrect PIN. Please try again.");
        userInput = ''; // Clear PIN input
        updateInputDisplay(userInput);
    }
}