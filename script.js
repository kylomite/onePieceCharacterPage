let character = document.querySelector(".character")
let luffy = document.querySelector("#luffy");
let zoro = document.querySelector("#zoro");
let nami = document.querySelector("#nami");
let usopp = document.querySelector("#usopp");
let sanji = document.querySelector("#sanji");
let chopper = document.querySelector("#chopper");
let robin = document.querySelector("#robin");
let franky = document.querySelector("#franky");
let brook = document.querySelector("#brook");


let luffyEyecatcher = document.querySelector("#luffyEyecatcher");
let zoroEyecatcher = document.querySelector("#zoroEyecatcher");
let namiEyecatcher = document.querySelector("#namiEyecatcher");
let usoppEyecatcher = document.querySelector("#usoppEyecatcher");
let sanjiEyecatcher = document.querySelector("#sanjiEyecatcher");
let chopperEyecatcher = document.querySelector("#chopperEyecatcher");
let robinEyecatcher = document.querySelector("#robinEyecatcher");
let frankyEyecatcher = document.querySelector("#frankyEyecatcher");
let brookEyecatcher = document.querySelector("#brookEyecatcher");


//ADD SOUNDEFFECT ON HOVER
/*function soundEffect(eyeCatcher){
    if eyeCatcher === luffy ? //play luffyEyecatcher.mp3 :

}*/



luffy.addEventListener("mouseover", playLuffyEyecatcher);
    function playLuffyEyecatcher() {
        luffyEyecatcher.play();
    }
luffy.addEventListener("mouseout", stopLuffyEyecatcher);
    function stopLuffyEyecatcher() {
        luffyEyecatcher.pause();
        luffyEyecatcher.currentTime = 0;
    }
zoro.addEventListener("mouseover", playZoroEyecatcher);
    function playZoroEyecatcher() {
        zoroEyecatcher.play();
    }
zoro.addEventListener("mouseout", stopZoroEyecatcher);
    function stopZoroEyecatcher() {
        zoroEyecatcher.pause();
        zoroEyecatcher.currentTime = 0;
    }
nami.addEventListener("mouseover", playNamiEyecatcher);
    function playNamiEyecatcher() {
        namiEyecatcher.play();
    } 
nami.addEventListener("mouseout", stopNamiEyecatcher);
    function stopNamiEyecatcher() {
        namiEyecatcher.pause();
        namiEyecatcher.currentTime = 0;
    }
usopp.addEventListener("mouseover", playUsoppEyecatcher);
    function playUsoppEyecatcher() {
        usoppEyecatcher.play();
    }
usopp.addEventListener("mouseout", stopUsoppEyecatcher);
    function stopUsoppEyecatcher() {
        usoppEyecatcher.pause();
        usoppEyecatcher.currentTime = 0;
    }
sanji.addEventListener("mouseover", playSanjiEyecatcher);
    function playSanjiEyecatcher() {
        sanjiEyecatcher.play();
    }
sanji.addEventListener("mouseout", stopSanjiEyecatcher);
    function stopSanjiEyecatcher() {
        sanjiEyecatcher.pause();
        sanjiEyecatcher.currentTime = 0;
    } 
chopper.addEventListener("mouseover", playChopperEyecatcher);
    function playChopperEyecatcher() {
        chopperEyecatcher.play();
    }
chopper.addEventListener("mouseout", stopChopperEyecatcher);
    function stopChopperEyecatcher() {
        chopperEyecatcher.pause();
        chopperEyecatcher.currentTime = 0;
    }
robin.addEventListener("mouseover", playRobinEyecatcher);
    function playRobinEyecatcher() {
        robinEyecatcher.play();
    }
robin.addEventListener("mouseout", stopRobinEyecatcher);
    function stopRobinEyecatcher() {
        robinEyecatcher.pause();
        robinEyecatcher.currentTime = 0;
    }
franky.addEventListener("mouseover", playFrankyEyecatcher);
    function playFrankyEyecatcher() {
        frankyEyecatcher.play();
    } 
franky.addEventListener("mouseout", stopFrankyEyecatcher);
    function stopFrankyEyecatcher() {
        frankyEyecatcher.pause();
        frankyEyecatcher.currentTime = 0;
    } 
brook.addEventListener("mouseover", playBrookEyecatcher);
    function playBrookEyecatcher() {
        brookEyecatcher.play();
    }
brook.addEventListener("mouseout", stopBrookEyecatcher);
    function stopBrookEyecatcher() {
        brookEyecatcher.pause();
        brookEyecatcher.currentTime = 0;
    }