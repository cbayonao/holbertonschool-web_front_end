"use strict";
function changeMode(size, weight, transform, background, color) {
  return () => {
    const page = document.querySelector("body");
    page.style.fontSize = size;
    page.style.fontWeight = weight;
    page.style.textTransform = transform;
    page.style.backgroundColor = background;
    page.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  //   Create elements
  let page = document.querySelector("body");
  let bSpooky = document.createElement("button");
  let bDark = document.createElement("button");
  let bScream = document.createElement("button");
  //   Inserting text
  page.innerHTML = "<p>Welcome Holberton!</p>";
  bSpooky.innerText = "Spooky";
  bDark.innerText = "Dark mode";
  bScream.innerText = "Scream mode";
  // Append into the page
  document.body.appendChild(bSpooky);
  document.body.appendChild(bDark);
  document.body.appendChild(bScream);
  // Adding function to the buttons
  bSpooky.onclick = spooky;
  bDark.onclick = darkMode;
  bScream.onclick = screamMode;
}

main();
