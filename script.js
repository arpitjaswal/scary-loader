const loadingtext = document.querySelector('.loading-text');
const bgtext = document.querySelector('.bg');



//run loader function every 30s and store in interval variable
var int = setInterval(loader, 30);  
let loading = 0;

function loader(){
    loading++;
    if(loading==100){
        clearInterval(int);
    }
    
    // console.log(loading);
    loadingtext.innerText = `${loading}%`;
    loadingtext.style.opacity = scale(loading, 0,100,1,0);
    bgtext.style.filter =  `blur(${scale(loading,0,100,30,0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
