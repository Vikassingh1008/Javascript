let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".user-choice");
let msg=document.querySelector("#msg")
let user=document.querySelector("#user-count");
let comp=document.querySelector("#comp-count")
const gencompchoice=()=>{
    const options=["head","tail"];
    const idx=Math.floor(Math.random()*2);
    return options[idx];

}

const playGame=(userChoice)=>{
    const compchoice=gencompchoice();
    if(userChoice===compchoice){
        msg.innerText="tie game";
        msg.style.backgroundColor="black";
    }else if(userChoice==="head")
    {
        msg.innerText="you win";
        userscore++;
        user.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText="comp win";
compscore++;
comp.innerText=compscore;
msg.style.backgroundColor="red";
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice); // Corrected to remove #
        playGame(userChoice); // Assuming playGame is a function you've defined elsewhere
    });
});
