let input=document.getElementById("inputbox");
let show=document.getElementById("display");

input.addEventListener('keypress',function(e)
{
show.innerText="you press the key"+e.key
});