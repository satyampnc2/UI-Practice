var btn = document.getElementsByClassName('btn')[0];
var nav = document.getElementsByClassName('nav')[0];
var navclosed = document.getElementsByClassName('nav-closed')[0];

const t1 = new TimelineLite({paused : true, reversed:true});

t1.to('.cover',1,{
    width:'60%',
    ease: Power2.easeOut
})
.to('.nav',1,{
    height:'100vh',
    ease : Power2.easeOut
},"-=.75")
.fromTo('.nav-closed',.5,{
    opacity:'0',
    x:'50',
    ease : Power2.easeOut
},{
    opacity:'1',
    x:'0',
    onComplete : function(){
        navclosed.style.pointerEvents = "all";
    }
})

btn.addEventListener('click',(e) => {
    if(t1.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(t1);
})


function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}