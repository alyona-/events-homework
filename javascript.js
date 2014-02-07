
/*
var objEvents = {
    click: function clickEvents () {
        this.style.backgroundColor = 'blue';
    }
} */
/*
window.document.onclick = addEventListener('click', objEvents.click, false); */

var elem = document.querySelector('body');

elem.addEventListener('click',changeColor, false);

function changeColor(){
   if(event.target.className == 'object'){
       event.target.style.backgroundColor = 'blue';
   }
}