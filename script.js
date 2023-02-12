const bulb = document.getElementById("bulb");
const switchOn = document.getElementById("onbutton");
const switchOff = document.getElementById("offbutton");
switchOff.addEventListener("click" ,() =>{
    bulb.setAttribute("src","whiteBulb.jpg")
})
switchOn.addEventListener("click", () => {
    if(bulb.src ==="lightBulb.jpg")
    {
        return
    }else{
        bulb.setAttribute("src", "lightBulb.jpg")
    }
})