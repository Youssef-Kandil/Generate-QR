let inp = document.querySelector('input[type="text"]');
let img =document.querySelector('img');
let btn = document.querySelector('button')

btn.addEventListener('click',(e)=>{
    if(inp.value.length > 0){
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inp.value;
    }
})


