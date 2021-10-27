var myRange = document.getElementById("my-range");
var incrementBtn = document.getElementById("increment-btn");
var decrementBtn = document.getElementById("decrement-btn");
var valueP = document.getElementById("value-p");
var value = 10;
incrementBtn.addEventListener("click", incrementValue);
decrementBtn.addEventListener("click", decrementValue);
function incrementValue(){
    value+=10;
    myRange.value = value;
    valueP.textContent = "i = " + value;
    console.log(myRange.value);
}
function decrementValue(){
    value-=10;
    myRange.value = value;
    valueP.textContent = "i = " + value;
    console.log(myRange.value);
}
