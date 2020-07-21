var texts = document.querySelectorAll('.section2 div');
// Init scroll magic
var controller  = new ScrollMagic.Controller();

//build a scene
// var scene1 = new ScrollMagic.Scene({
//     triggerElement : '.text1',
//     triggerHook : .5
// })
// .setClassToggle('.text1','fade-in')  // adds class to text1
// .addIndicators()
// .addTo(controller);

// var scene2 = new ScrollMagic.Scene({
//     triggerElement : '.text2',
//     triggerHook : .5
// })
// .setClassToggle('.text2','fade-in')  // adds class to text1
// .addIndicators()
// .addTo(controller);

// var scene3 = new ScrollMagic.Scene({
//     triggerElement : '.text3',
//     triggerHook : .5
// })
// .setClassToggle('.text3','fade-in')  // adds class to text1
// .addIndicators()
// .addTo(controller);

// var scene2 = new ScrollMagic.Scene({
//     triggerElement: '.section1',
//     triggerHook: 0,
//     duration:'30%'
// })
// .setPin('.section1', {pushFollowers : false})
// .addIndicators()
// .addTo(controller);

// var scene3 = new ScrollMagic.Scene({
//     triggerElement : '.text1',
//     triggerHook: .5,
//     duration:'30%'
// })
// .setPin('.section1',{pushFollowers:false})
// .addTo(controller);

var tl = new TimelineMax({onUpdate:updatePercentage});
tl.from('.text1',1,{opacity:'0',x:'-100'})
tl.from('.text2',1,{opacity:'0',x:'-100'})
tl.from('.text3',1,{opacity:'0',x:'-100'});

var tlbox = new TimelineLite();
tlbox.fromTo('.box',1,{opacity:0,x:'-400',y:'-100'},{opacity:1,x:'0',y:'0'})
.to('.box',1,{x:'300'})
.to('.box',1,{scale:'1.5',y:'-100',opacity:'.5'});
const scene = new ScrollMagic.Scene({
    triggerElement:'.section2',
    triggerHook :'onLeave',
    duration:'200%'
})
.setPin('.section2')
.setTween(tl)
.addIndicators()
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement:'.section2',
    triggerHook:0
})
.setTween(tlbox)
.addTo(controller)
function updatePercentage(){
    tl.progress();
}

// texts.forEach((text) => {
//     console.log(text);
//     var scene = new ScrollMagic.Scene({
//         triggerElement: text,
//         triggerHook: .8
//     })
//     .setClassToggle(text,'fade-in')
//     .addTo(controller);
// })

