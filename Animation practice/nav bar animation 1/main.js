var btn = document.getElementsByClassName('lines')[0];
var options = document.getElementsByClassName('options')[0];
const links = document.querySelectorAll('.options li');
var lines = document.getElementsByClassName('lines')[0];
btn.addEventListener('click',()=>{
    options.classList.toggle('toggle');
    links.forEach((link,index)=>{
        if(link.style.animation=='')
        link.style.animation = `navlinkfade 0.2s ease both ${index/7}s`;
        else
        link.style.animation='';
    })
    lines.classList.toggle('cross');
});
