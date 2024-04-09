


function changeHeaderColor() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF5733", "#33FF57", "#5733FF", "#FFFF33"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector("header").style.backgroundColor = randomColor;
}


function showMessage() {
    alert("This is a message!");
}


document.querySelector("header").addEventListener("click", changeHeaderColor);


document.getElementById("btn1").addEventListener("click", showMessage);
document.getElementById("btn2").addEventListener("click", showMessage);
