const elemCount = 4;
var current = 1;
const elemWidth = 500;
var move = 0;


const nextElem = document.querySelector(".next");
const prevElem = document.querySelector(".prev");
const sliderWeek = document.querySelector(".slider .thumbs");

nextElem.addEventListener("click", nextSign);

prevElem.addEventListener("click", prevSign);


function nextSign() {
    if(current < elemCount) {
        move += elemWidth;
        sliderWeek.style.transform = "translateX(-"+move +"px)";
        current++;
    }
} 

function prevSign() {
    if(current > elemCount) {
        move -= elemWidth;
        sliderWeek.style.transform = "translateX(-"+move +"px)";
        current--;
    }
}