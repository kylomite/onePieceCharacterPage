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
zoro.addEventListener("mouseover", playZoroEyecatcher);
    function playZoroEyecatcher() {
        zoroEyecatcher.play();
    }
nami.addEventListener("mouseover", playNamiEyecatcher);
    function playNamiEyecatcher() {
        namiEyecatcher.play();
    } 
usopp.addEventListener("mouseover", playUsoppEyecatcher);
    function playUsoppEyecatcher() {
        usoppEyecatcher.play();
    }
sanji.addEventListener("mouseover", playSanjiEyecatcher);
    function playSanjiEyecatcher() {
        sanjiEyecatcher.play();
    } 
chopper.addEventListener("mouseover", playChopperEyecatcher);
    function playChopperEyecatcher() {
        chopperEyecatcher.play();
    }
robin.addEventListener("mouseover", playRobinEyecatcher);
    function playRobinEyecatcher() {
        robinEyecatcher.play();
    }
franky.addEventListener("mouseover", playFrankyEyecatcher);
    function playFrankyEyecatcher() {
        frankyEyecatcher.play();
    } 
brook.addEventListener("mouseover", playBrookEyecatcher);
    function playBrookEyecatcher() {
        brookEyecatcher.play();
    }