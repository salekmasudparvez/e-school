// banner text Animation 

const text = document.getElementById('bannerTxt');
const strtText = text.textContent;
const splitText = strtText.split("")
text.textContent="";

for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>"+splitText[i]+"</span>";
}
let char = 0;
let timer = setInterval(onclick, 90);

function onclick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if( char === splitText.length){
        complete();
        return
    }
}
function complete(){
    clearInterval(timer);
    timer=null;
}



