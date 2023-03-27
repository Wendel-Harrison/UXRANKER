let left = document.querySelector('.left')
let right = document.querySelector('.right')

let slider = document.querySelector('.slider')

left.addEventListener('click', leftSlider)
right.addEventListener('click', rightSlider)

function leftSlider() {
    slider.style.transform="translateX(0)"
    slider.style.transition=".8s"
}

function rightSlider() {
    slider.style.transform="translateX(-750px)"
    slider.style.transition=".8s"
}


