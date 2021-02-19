'use strict'; //современный режим

window.onload = function() {

    const bonfire = document.querySelector(".bonfire");
    const audio = document.querySelector(".audio");
    const topLine = document.querySelector(".top-line");
    const bottomLine = document.querySelector(".bottom-line");
    const music = document.querySelector(".music")
    const songs = document.querySelectorAll(".song")
    const turn = document.querySelector(".turn")
    const source = document.querySelector(".audio-source-1")
    const sourceTwo = document.querySelector(".audio-source-2")
    const files = document.querySelector(".file")
    audio.loop = "true";
    audio.preload = "auto";

    let switchBonfire = false;
    let switchMenu = false;
    let switchTurn = false;

    files.addEventListener('change', function(){
        source.src = URL.createObjectURL(this.files[0])
        audio.load()
        playMusic()
    });

    songs[0].addEventListener("click", ()=>{
        source.src = "audio/jaz.mp3"
        sourceTwo.src = "audio/jaz.wav"
        audio.load();
        playMusic()
    })
    songs[1].addEventListener("click", ()=>{
        source.src = "audio/neytron.mp3"
        sourceTwo.src = "audio/neytron.wav"
        audio.load();
        playMusic()
    })
    songs[2].addEventListener("click", ()=>{
        source.src = "audio/lenta.mp3"
        sourceTwo.src = "audio/lenta.wav"
        audio.load();
        playMusic()
    })
    songs[3].addEventListener("click", ()=>{
        source.src = "audio/pyl.mp3"
        sourceTwo.src = "audio/pyl.wav"
        audio.load();
        playMusic()
    })

    bonfire.addEventListener("click", ()=>{
        if (switchBonfire == false) {
            bonfire.src = "images/bonfire-on.gif";
            switchBonfire = true;
            audio.play();
        }
        else {
            bonfire.src = "images/bonfire-off.png";
            switchBonfire = false;
            audio.pause();
        };
    });

    topLine.addEventListener("click", ()=>{
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        else {
            document.documentElement.requestFullscreen();
        }
    })

    bottomLine.addEventListener("click", ()=>{
        if (switchMenu == false) {
            bottomLine.style.height = "auto"
            music.style.display = "flex"
            switchMenu = true
        }
        else {
            bottomLine.style.height = "5%"
            music.style.display = "none"
            switchMenu = false
        }
    })

    turn.addEventListener("click", ()=>{
        if (switchTurn == false) {
            bonfire.classList.add("turned")
            switchTurn = true
        }
        else {
            bonfire.classList.remove("turned")
            switchTurn = false
        }
    })

    function playMusic() {
        bonfire.src = "images/bonfire-on.gif";
        audio.play();
    }

};
