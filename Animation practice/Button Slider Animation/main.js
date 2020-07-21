var items = document.querySelectorAll('.container li');
var slider = document.getElementsByClassName('slider')[0];
var container = document.getElementsByClassName('container')[0];
items.forEach(item => {
    item.addEventListener('mouseover',(e) => {
        var rect = item.getBoundingClientRect();
        var rectContainer = container.getBoundingClientRect();
        var coords = {
            height : rect.height,
            width : rect.width,
            left : rect.left
        }       
        slider.style.opacity = '1';
        slider.style.width = `${coords.width}px`;
        slider.style.height = `${coords.height}px`;
        slider.style.left = `${coords.left-rectContainer.left}px`;
        slider.style.background = `${item.getAttribute('data-color')}`;
    })
});

items.forEach(item => {
    item.addEventListener('mouseout',(e) => {     
        slider.style.opacity = '0'
    })
});