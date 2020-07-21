var text = document.getElementsByClassName('text')[0];

function scrollAppear(){
    var rect = text.getBoundingClientRect();
    if(rect.top < window.innerHeight){
        text.classList.add('fadein');
    } else{
        text.classList.remove('fadein');
    }   
}

window.addEventListener('scroll',scrollAppear);

