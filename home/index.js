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


window.sr =ScrollReveal({ reset: true});

sr.reveal("main", {
    origin: "top",
    distance: "20px",
    duration: 1000,
    reset: false
})

sr.reveal("nav", {
    origin: "top",
    distance: "40px",
    duration: 1000,
    reset: false,
    delay: 300
})

sr.reveal(".esquerdoInicio", {
    origin: "left",
    distance: "70px",
    duration: 1500,
    reset: false,
    delay: 600
})

sr.reveal("#inicioImg", {
    scale: 1.2,
    duration: 1500,
    reset: false,
    delay: 600
})

sr.reveal("#titleMarcas", {
    origin: "top",
    distance: "40px",
    duration: 1000,
    reset: false,
    delay: 300
})

sr.reveal(".logoMarcas", {
    scale: 1.2,
    duration: 1000,
    reset: false,
    delay: 300
})

sr.reveal(".detalhesInicio", {
    origin: "top",
    distance: "40px",
    duration: 1000,
    reset: false,
    delay: 1200
})

sr.reveal(".categoriaLeft1", {
    origin: "left",
    distance: "200px",
    duration: 2500,
    delay: 300
})

sr.reveal(".categoriaRight1", {
    origin: "right",
    distance: "200px",
    duration: 2500,
    delay: 300
})

sr.reveal(".categoriaLeft2", {
    origin: "left",
    distance: "200px",
    duration: 2500,
    delay: 900
})

sr.reveal(".categoriaRight2", {
    origin: "right",
    distance: "200px",
    duration: 2500,
    delay: 900
})

sr.reveal(".imagens1", {
    origin: "top",
    distance: "60px",
    duration: 1500,
})

sr.reveal(".imagens2", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 400
})

sr.reveal(".imagens3", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 800
})

sr.reveal(".imagens4", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 200
})

sr.reveal(".imagens5", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 600
})

sr.reveal(".imagens6", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 1000
})

sr.reveal(".imagens7", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 400
})

sr.reveal(".imagens8", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 800
})

sr.reveal(".imagens9", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 1200
})

sr.reveal(".criterio1", {
    origin: "left",
    distance: "120px",
    duration: 2000,
})

sr.reveal(".criterio2", {
    origin: "top",
    distance: "120px",
    duration: 2000,
    delay: 300
})

sr.reveal(".criterio3", {
    origin: "right",
    distance: "120px",
    duration: 2000,
})

sr.reveal(".criterio4", {
    origin: "left",
    distance: "120px",
    duration: 2000,
})

sr.reveal(".criterio5", {
    origin: "bottom",
    distance: "120px",
    duration: 2000,
    delay: 300
})

sr.reveal(".criterio6", {
    origin: "right",
    distance: "120px",
    duration: 2000,
})

sr.reveal("#div1", {
    scale: 1.7,
    duration: 2000,
    delay: 300
})

sr.reveal("#div2", {
    scale: 1.7,
    duration: 2000,
    delay: 900
})

sr.reveal("#div3", {
    scale: 1.7,
    duration: 2000,
    delay: 1500
})







