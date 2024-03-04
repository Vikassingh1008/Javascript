let btn=document.querySelector("#btn");

let mode="light";

btn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";

    }else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
        
    }
})

let s=document.querySelector("#btn");
s.style.fontSize="3rem";
s.style.fontWeight="900"