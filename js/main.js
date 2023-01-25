const container = document.querySelector(".container");
const generate__btn= document.querySelector(".generate__btn");
const box__wrapper= document.querySelector(".box__wrapper");

const limitBox=32;

function Generate(){
    box__wrapper.innerHTML="";
    for(let i=0; i< limitBox; i++){
        const hexNumber= Math.floor(Math.random() * 0xFFFFFF).toString(16);
        const convertSixDigit=hexNumber.padStart(6,"0");
        const hexCode= "#"+convertSixDigit;

        const elm=document.createElement("div");
        // elm.classList.add("box");
        elm.innerHTML=`<div class="box" style="background:${hexCode}"></div> 
        <span class="hex__value">${hexCode}</span>
        `;
        elm.addEventListener("click",codeCopy(elm, hexCode))
        box__wrapper.appendChild(elm)
        
    }
    
}
Generate();
generate__btn.addEventListener("click", Generate);


function codeCopy(elm, hexCode){
    const hex__value=elm.querySelector(".hex__value");
    navigator.clipboard.writeText(hexCode)
}