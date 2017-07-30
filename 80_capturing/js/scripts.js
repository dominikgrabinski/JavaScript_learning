var btn = document.querySelector("#btn"),
    body = document.body;
    
body.addEventListener("click", function(e) {
    
    console.log(e.eventPhase);
    
    console.log("kliknąłeś w body");
    
}, true); //useCapture

body.addEventListener("click", function(e) {
    
    console.log(e.eventPhase);    
    
    console.log("Kliknąłeś w body ponownie");
    
}, false);

btn.addEventListener("click", function(e) {
    
    console.log(e.eventPhase);    
    
    console.log("Kliknąłeś w przycisk");
    
}, false);

//phase 1 - capturing
//phase 2 - on targer
//phase 3 - bubbling