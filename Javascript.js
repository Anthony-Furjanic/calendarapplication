// alert("hello") this alert acts as an indicator of response from function 


// PUll hour from computer 
const v= new Date()
let hour= v.getHours()



// This acts as the switch to determine when each section turns red  
// sections will show red when they fall in the current hour and 
// green for the hours ahead of the current time
switch(hour){
    case 9: document.getElementById("9").style.backgroundColor="red"
    document.getElementById("10").style.backgroundColor="green"
    document.getElementById("11").style.backgroundColor="green"
    document.getElementById("12").style.backgroundColor="green"
    document.getElementById("1").style.backgroundColor="green"
    document.getElementById("2").style.backgroundColor="green"
    document.getElementById("3").style.backgroundColor="green"
    document.getElementById("4").style.backgroundColor="green"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 10: document.getElementById("10").style.backgroundColor="red"
    document.getElementById("11").style.backgroundColor="green"
    document.getElementById("12").style.backgroundColor="green"
    document.getElementById("1").style.backgroundColor="green"
    document.getElementById("2").style.backgroundColor="green"
    document.getElementById("3").style.backgroundColor="green"
    document.getElementById("4").style.backgroundColor="green"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 11: document.getElementById("11").style.backgroundColor="red"
    document.getElementById("12").style.backgroundColor="green"
    document.getElementById("1").style.backgroundColor="green"
    document.getElementById("2").style.backgroundColor="green"
    document.getElementById("3").style.backgroundColor="green"
    document.getElementById("4").style.backgroundColor="green"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 12: document.getElementById("12").style.backgroundColor="red"
    document.getElementById("1").style.backgroundColor="green"
    document.getElementById("2").style.backgroundColor="green"
    document.getElementById("3").style.backgroundColor="green"
    document.getElementById("4").style.backgroundColor="green"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 13: document.getElementById("1").style.backgroundColor="red"
    document.getElementById("2").style.backgroundColor="green"
    document.getElementById("3").style.backgroundColor="green"
    document.getElementById("4").style.backgroundColor="green"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 14: document.getElementById("2").style.backgroundColor="red"
    document.getElementById("3").style.backgroundColor="green"
    document.getElementById("4").style.backgroundColor="green"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 15: document.getElementById("3").style.backgroundColor="red"
    document.getElementById("4").style.backgroundColor="green"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 16: document.getElementById("4").style.backgroundColor="red"
    document.getElementById("5").style.backgroundColor="green"
    break
    case 17: document.getElementById("5").style.backgroundColor="red"
    break
        }



        // This is the function that allows user to save to local storage
        // when they click to enter text into a time block 

document.getElementById("9").value=localStorage.getItem("9")
    document.getElementById("click9").addEventListener("click",function(){
        let nine= document.getElementById("9").value
        localStorage.setItem("9",nine)
        alert("saved")

    })

document.getElementById("10").value=localStorage.getItem("10")
    document.getElementById("click10").addEventListener("click",function(){
        let ten= document.getElementById("10").value
        localStorage.setItem("10",ten)
        alert("saved")

    })
    document.getElementById("11").value=localStorage.getItem("11")
    document.getElementById("click11").addEventListener("click",function(){
        let eleven= document.getElementById("11").value
        localStorage.setItem("11",eleven)
        alert("saved")

    })
    document.getElementById("12").value=localStorage.getItem("12")
    document.getElementById("click12").addEventListener("click",function(){
        let twelve= document.getElementById("9").value
        localStorage.setItem("12",twelve)
        alert("saved")

    })
    document.getElementById("1").value=localStorage.getItem("1")
    document.getElementById("click1").addEventListener("click",function(){
        let one= document.getElementById("1").value
        localStorage.setItem("1",one)
        alert("saved")

    })
    document.getElementById("2").value=localStorage.getItem("2")
    document.getElementById("click2").addEventListener("click",function(){
        let ttwo= document.getElementById("2").value
        localStorage.setItem("2",two)
        alert("saved")

    })
    document.getElementById("3").value=localStorage.getItem("3")
    document.getElementById("click3").addEventListener("click",function(){
        let three= document.getElementById("3").value
        localStorage.setItem("3",three)
        alert("saved")

    })
    document.getElementById("4").value=localStorage.getItem("4")
    document.getElementById("click4").addEventListener("click",function(){
        let four= document.getElementById("4").value
        localStorage.setItem("4",four)
        alert("saved")

    })
    document.getElementById("5").value=localStorage.getItem("5")
    document.getElementById("click5").addEventListener("click",function(){
        let five= document.getElementById("5").value
        localStorage.setItem("5",five)
        alert("saved")

    })