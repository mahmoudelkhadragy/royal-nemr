$(".zoomanime").on("mouseenter touchstart touchmove", function(e) {
    anime({
        targets: e.target,
        // rotate: '1turn',
        zoom: "1.015",
        duration: 800,
    });
});
$(".zoomanime").on("mouseout touchend touchcancel", function(e) {
    anime({
        targets: e.target,
        // rotate: '1turn',
        zoom: "1",
        duration: 800,
    });
});

$(".slide-7:not(.present)").animate({
    targets: ".animeexpand",
    // rotate: '1turn',
    zoom: "1",
    duration: 800,
});

anime({
    targets: ".loop-infinity",
    translateX: 5,
    translateY: 5,

    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
    duration: 300,

});








const animation = anime({
    targets: ".zoom-1",
    // rotate: '1turn',
    padding: [0, 15],
    width: [86, 250],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    zIndex: 100,
    duration: 300,
})
animation.reverse();
const handleClick = () => {
    animation.play();
    animation.reverse();
};

const btn = document.querySelector(".zoom-1")
btn.addEventListener("click", handleClick)







const Secondanimation = anime({
    targets: ".zoom-2",
    // rotate: '1turn',
    padding: [0, 15],
    width: [86, 250],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    zIndex: 100,
    duration: 300,
})
Secondanimation.reverse();
const SecondhandleClick = () => {
    Secondanimation.play();
    Secondanimation.reverse();
};

const Secondzoom = document.querySelector(".zoom-2")
Secondzoom.addEventListener("click", SecondhandleClick)



const Thirdanimation = anime({
    targets: ".zoom-3",
    // rotate: '1turn',
    padding: [0, 15],
    width: [140, 300],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    duration: 300,
    zIndex: 100
})
Thirdanimation.reverse();
const ThirdhandleClick = () => {
    Thirdanimation.play();
    Thirdanimation.reverse();
};

const Thirdzoom = document.querySelector(".zoom-3")
Thirdzoom.addEventListener("click", ThirdhandleClick)






const Fourthanimation = anime({
    targets: ".zoom-4",
    // rotate: '1turn',
    padding: [0, 15],
    width: [128, 300],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    duration: 300,
    zIndex: 100
})
Fourthanimation.reverse();
const FourthhandleClick = () => {
    Fourthanimation.play();
    Fourthanimation.reverse();
};

const Fourthzoom = document.querySelector(".zoom-4")
Fourthzoom.addEventListener("click", FourthhandleClick)





const Fifthanimation = anime({
    targets: ".zoom-5",
    // rotate: '1turn',
    padding: [0, 15],
    width: [119, 300],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    duration: 300,
    zIndex: 100
})
Fifthanimation.reverse();
const FifthhandleClick = () => {
    Fifthanimation.play();
    Fifthanimation.reverse();
};

const Fifthzoom = document.querySelector(".zoom-5")
Fifthzoom.addEventListener("click", FifthhandleClick)




const sixthanimation = anime({
    targets: ".zoom-6",
    // rotate: '1turn',
    padding: [0, 15],
    width: [128, 300],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    duration: 300,
    zIndex: 100
})
sixthanimation.reverse();
const sixthhandleClick = () => {
    sixthanimation.play();
    sixthanimation.reverse();
};

const sixthzoom = document.querySelector(".zoom-6")
sixthzoom.addEventListener("click", sixthhandleClick)





const Seventhanimation = anime({
    targets: ".zoom-7",
    // rotate: '1turn',
    padding: [0, 15],
    width: [111, 300],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    duration: 300,
})
Seventhanimation.reverse();
const SeventhhandleClick = () => {
    Seventhanimation.play();
    Seventhanimation.reverse();
};

const Seventhzoom = document.querySelector(".zoom-7")
Seventhzoom.addEventListener("click", SeventhhandleClick)




const Eighthanimation = anime({
    targets: ".zoom-8",
    // rotate: '1turn',
    padding: [0, 15],
    width: [124, 300],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    duration: 300,
})
Eighthanimation.reverse();
const EighthhandleClick = () => {
    Eighthanimation.play();
    Eighthanimation.reverse();
};

const Eighthzoom = document.querySelector(".zoom-8")
Eighthzoom.addEventListener("click", EighthhandleClick)





const ninthanimation = anime({

    targets: ".zoom-9",
    // rotate: '1turn',
    padding: [0, 15],
    height: [130, 310],
    background: ["rgba(255,255,255, 0)", "rgba(247,247,247, 1)"],
    borderRadius: [0, 5],
    right: [510, 50],
    boxShadow: ["none", "0px 0px 77px -12px rgba(153,153,153,1)"],
    autoplay: false,
    duration: 300,
})
ninthanimation.reverse();
const ninthhandleClick = () => {
    ninthanimation.play();
    ninthanimation.reverse();
};

const ninthzoom = document.querySelector(".zoom-9")
ninthzoom.addEventListener("click", ninthhandleClick)