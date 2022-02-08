var icon = document.getElementById("icon");
icon.onclick = function()
{
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them"))
    {
         icon.src = "./sun.png";
    }
    else{
icon.src = "./moon.png"
    }
    
}


let number = document.getElementById("number")
let counter =0;

setInterval(()=>
{
    if (counter == 65)
    clearInterval();
    else
    counter += 1;
    number.innerHTML = "company \n proggress \n " +counter  + "%"
},30);