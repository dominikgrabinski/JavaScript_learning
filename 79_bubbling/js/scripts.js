var btn = document.querySelector("#btn"),
    body = document.body;
    
body.addEventListener("click", function(e) {
    
    console.log("kliknąłeś w body");
    
}, false);

btn.addEventListener("click", function(e) {
    
    //e.stopPropagation();
    e.stopImmediatePropagation();
    
    console.log("Kliknąłeś w przycisk");
    
}, false);

btn.addEventListener("click", function(e) {
    
    console.log("Znów -> kliknąłeś w przycisk");
    
}, false);