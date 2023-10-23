import { ChangeTheme } from "./darktheme.js";
import { Timer } from "./timer.js";

ChangeTheme();

let $btnActive = document.querySelector("#btn-01");

let myInterval;
$btnActive.addEventListener("click",(e)=>{
   myInterval = setInterval(function() {
    Timer();
    },1000)  
    e.target.disabled = true;
})

let $btnDesactive = document.querySelector("#btn-02");

$btnDesactive.addEventListener("click",(e)=>{
    clearInterval(myInterval);
    $btnActive.disabled = false;
})