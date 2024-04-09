document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const btn = document.getElementById("btn");
  const headers = document.querySelectorAll("header, h2, h3");

  
  function changeHeaderColor() {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FFFF33",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.backgroundColor = randomColor;
  }

  function showMessage() {
    alert("Button clicked!");
  }


  function changeHeaderTextColor(event) {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FFFF33",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    event.target.style.color = randomColor;
  }

  
  header.addEventListener("click", changeHeaderColor);
  btn.addEventListener("click", showMessage);
  headers.forEach((header) => {
    header.addEventListener("mouseover", changeHeaderTextColor);
  });
});
