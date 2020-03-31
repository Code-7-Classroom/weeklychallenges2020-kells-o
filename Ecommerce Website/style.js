// Slider

const sliderContainer = document.querySelector("#slider-container");
const sliderImages = document.querySelectorAll("#slider-container img");


// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size = sliderImages[0].clientWidth;

sliderContainer.style.transform = 'translateX(' + ( -size * counter ) + 'px)';

//button listeners
nextBtn.addEventListener('click',()=>{
    if(counter >= sliderImages.length -1) return;
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=> {
    if(counter <= 0) return;
    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderContainer.addEventListener('transitionend', () => {
if (sliderImages[counter].id === 'lastClone') {
    sliderContainer.style.transition = "none";
    counter = sliderImages.length -2;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
}
if (sliderImages[counter].id === 'firstClone') {
    sliderContainer.style.transition = "none";
    counter = sliderImages.length -counter;
    sliderContainer.style.transform = 'translateX(' + (-size * counter) + 'px)'
}
});


var list = document.querySelector("dropdown");

function filterByType(price){
    var option = document.querySelectorAll(".dropdown-options");
    for(i = 0; 1< option.length; i++) {
        var el = option[1];
        
    }
}


