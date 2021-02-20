'use strict'; //современный режим

window.onload = function() {

    const bonfire = document.querySelector(".bonfire");
    const audio = document.querySelector(".audio");
    const topLine = document.querySelector(".top-line");
    const bottomLine = document.querySelector(".bottom-line");
    const music = document.querySelector(".music")
    const songs = document.querySelectorAll(".song")
    const turn = document.querySelector(".turn")
    const lamp = document.querySelector(".lamp")
    const source = document.querySelector(".audio-source-1")
    const sourceTwo = document.querySelector(".audio-source-2")
    const files = document.querySelector(".file")
    audio.loop = "true";
    audio.preload = "auto";

    let switchImg = false;
    let switchMenu = false;
    let switchTurn = false;
    let LampOrFire = false;
    let imgName;

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
        if (switchImg == false) {
            switchLampFire()
        }
        else {
            switchLampFire()
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

    lamp.addEventListener("click", ()=>{
        if (LampOrFire == false) {
            LampOrFire = true
            switchLampFire()
        }
        else {
            LampOrFire = false
            switchLampFire()
        }
    })

    function playMusic() {
        if (LampOrFire == false) {
            imgName = "images/bonfire-on.gif";
        }
        else {
            imgName = "images/lamp_on.png";
        }
        bonfire.src = imgName
        audio.play();
    }

    function switchLampFire() {
        if (LampOrFire == false) {
            if (switchImg == false) {
                imgName = "images/bonfire-on.gif";
                bonfire.src = imgName;
                switchImg = true;
                audio.play();
            }
            else {
                imgName = "images/bonfire-off.png";
                bonfire.src = imgName;
                switchImg = false;
                audio.pause();
            }
        }
        else {
            if (switchImg == false) {
                imgName = "images/lamp_on.png";
                bonfire.src = imgName;
                switchImg = true;
                audio.play();
            }
            else {
                imgName = "images/lamp_off.png";
                bonfire.src = imgName;
                switchImg = false;
                audio.pause();
            }
        }
    }

};