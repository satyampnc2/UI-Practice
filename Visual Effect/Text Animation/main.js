var text = document.getElementsByClassName('text')[0];
var str = text.textContent;
var strarray = str.split("");
text.textContent = "";
for(let i=0;i<str.length;i++){
    text.innerHTML += `<span>${strarray[i]}</span>`
}

let char = 0;
let timer = setInterval(clsadder,200);
function clsadder(){
    var span = document.querySelectorAll('span')[char];
    span.classList.add('fadein');
    char++;
    if(char == str.length){
        clearInterval(timer);
        timer=null;
    }
}