let keyAElement =document.getElementById("key-A")


let audioAelement = document.getElementById("audio-A")

keyAElement.onclick = () => {
    audioAelement.play()
}

let keySelement =document.getElementById("key-S")

let audioSelement = document.getElementById("audio-S")

keySelement.onclick = () => {
    audioSelement.play()
}

let keyDelement =document.getElementById("key-D")

let audioDelement = document.getElementById("audio-D")

keyDelement.onclick = () => {
    audioDelement.play()
}

window.onkeydown= () => {
    console.log("you pressed a key")
    console.log(event.key)
    if(event.key == "A") {
    audioAelement.play()   
       }
}

