var link = document.querySelector(".link"),
    href = link.getAttribute("href");

link.setAttribute("href", "https://www.google.pl");

link.removeAttribute("class");

var button = document.querySelector("button");

button.setAttribute("disabled", true);
button.removeAttribute("disabled");

var img = document.createElement("img");

img.src = "https://cdn.theatlantic.com/assets/media/img/mt/2016/03/RTX283V4/lead_960.jpg?1457553386";

document.body.appendChild(img);

var attrs = img.attributes;
