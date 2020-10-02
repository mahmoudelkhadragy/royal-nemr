$('.zoomanime').on('mouseenter touchstart touchmove', function(e) {
    anime({
        targets: e.target,
        // rotate: '1turn',
        zoom: '1.015',
        duration: 800
    })
})
$('.zoomanime').on('mouseout touchend touchcancel', function(e) {
    anime({
        targets: e.target,
        // rotate: '1turn',
        zoom: '1',
        duration: 800
    })
})

$('.slide-7:not(.present)').animate({
    targets: '.animeexpand',
    // rotate: '1turn',
    zoom: '1',
    duration: 800,

})

anime({
    targets: '.loop-infinity',
    translateX: 5,
    translateY: 5,

    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 300,
});