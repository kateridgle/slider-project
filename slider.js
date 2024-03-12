const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const image = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNum = 1
const length = image.length

for( let i =0; i < length; i++){
    const div = document.createElement("div")
    div.className = "button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor="white";

const resetBg = ()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor = "transparent";
    })
}

buttons.forEach((button,i)=>{
    button.addEventListener("click", ()=>{
        slider.style.transform = `translateX(-${i * 800}px)`;
        resetBg()
        slideNum = i + 1;
        button.style.backgroundColor="white";
    })
})

const nextSlide = ()=>{
        slider.style.transform = `translateX(-${slideNum*800}px)`;
        slideNum++;
        resetBg();
        buttons[slideNum-1].style.backgroundColor = "white";
}
const getFirstSlide = ()=>{
        slider.style.transform = `translateX(0px)`;
        slideNum = 1;
        resetBg()
        buttons[slideNum-1].style.backgroundColor = "white";
}
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1) * 800}px)`
    slideNum = length;
    resetBg()
    buttons[slideNum-1].style.backgroundColor = "white";
}
const prevSlide = ()=> {
    slider.style.transform = `translateX(-${(slideNum-2)*800}px)`
    slideNum--;
    resetBg();
    buttons[slideNum-1].style.backgroundColor = "white";
}

right.addEventListener("click", ()=>{
    slideNum<length ? nextSlide(): getFirstSlide()
})

left.addEventListener("click", ()=>{
    slideNum>1 ? prevSlide() : getLastSlide()
})