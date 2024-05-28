// 1. Target the element with some DOM  manipulation
let splash = document.querySelector('.splash');

let removeSplash = () => {
    // use a timer function to tell it, hey remove the splash class after some seconnds... 
    // we use the setTimeout method to achive this! 
    // setTimeout === timer in JS 
    setTimeout(() => {
        splash.classList.add('display-none-class')
    }, 2000)
}

// 2. lets use an event listenner that connects to the document and once the document is 'loaded' we remove that specificsplash class


// 2.1 Using event 'dom-content-loaded' + addEvent lsitner
//document.addEventListener('DOMContentLoaded', removeSplash)

// 2.2 - A bit more simple is to use the window.load()
window.onload(removeSplash())