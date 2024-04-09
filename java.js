// script.js

// Function to change the background color of the header randomly
function changeHeaderColor() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF5733", "#33FF57", "#5733FF", "#FFFF33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector("header").style.backgroundColor = randomColor;
}

// Function to show a message when a button is clicked
function showMessage() {
    alert("This is a message!");
}

// Add an event listener to the header to change its color when clicked
document.querySelector("header").addEventListener("click", changeHeaderColor);

// Add event listeners to buttons to show messages when clicked
document.getElementById("btn1").addEventListener("click", showMessage);
document.getElementById("btn2").addEventListener("click", showMessage);
