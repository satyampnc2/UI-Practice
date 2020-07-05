var lines = document.getElementsByClassName('lines')[0];
var items = document.getElementsByClassName('items')[0];
var list = document.querySelectorAll('.items div');
lines.addEventListener('click',()=>{
    items.classList.toggle('toggle'); 
    list.forEach((item) => {
        item.classList.toggle('fade');
    })
});
