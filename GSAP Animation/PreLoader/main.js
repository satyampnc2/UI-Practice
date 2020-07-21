var loader = document.getElementsByClassName('loader')[0];
var dot = document.getElementsByClassName('dot');

const tl = new TimelineMax({repeat:3,  // difference between tweenmax and tweenlinelite is that just repeat thing is only present in tweelinemax
onComplete: onComplete});

tl
.from('.dot',.4,{y:'-20',opacity:0})
.staggerTo('.dot', .3 ,{backgroundColor:'gray'}, .1);

const tlLoaderRemover = new TimelineLite({paused:true});
tlLoaderRemover.to('.dot',.3,{scale:'1.5'})
.staggerTo('.dot',.3,{y:'-50',opacity:'0',ease:Power2.easeOut},.1)
.to('.loader',1,{height:'0',ease:Power2.ease})
.fromTo('.info h1',.5,{opacity:0,x:'-50'},{opacity:1,x:'0'})
.fromTo('.info img',.5,{opacity:0,x:'50'},{opacity:1,x:'0'},"-=.3")


function onComplete(){
    tlLoaderRemover.play();
}
