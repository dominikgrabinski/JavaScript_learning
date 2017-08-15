var text = "Nauka JavaStript !";

var reverse = "";

for (var i = text.length - 1; i >= 0; i--) {
    
    reverse += text[i];
    
}

console.log(reverse);

console.log( text.split("").reverse().join("") );