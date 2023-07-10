
const body = document.querySelector("body");
const main = document.createElement("div");
const imag = document.createElement("img");
const ul = document.createElement("div");
const text_1 = document.createElement("p")
const text_2 = document.createElement("p")
const text_3 = document.createElement("p")
const text_4 = document.createElement("p")


imag.src ="./assets/img/hortifut-removebg-preview.png";
text_1.innerText = "Banana";
text_2.innerText = "Morango";
text_3.innerText = "Goiaba";
text_4.innerText = "Pesego";



text_1.id ="text_1"
text_2.id ="text_2"
text_3.id ="text_3"
text_4.id ="text_4"
ul.id = "ul"
imag.id ="img"
main.id = "main"
body.id = "body"



body.appendChild(main)
main.appendChild(imag)
main.appendChild(ul)
ul.appendChild(text_1)
ul.appendChild(text_2)
ul.appendChild(text_3)
ul.appendChild(text_4)
