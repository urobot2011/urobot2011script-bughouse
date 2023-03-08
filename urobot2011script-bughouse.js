// ==UserScript==
// @name         bughouse play
// @namespace    https://www.chess.com/
// @version      0.1
// @description  try to take over the world!
// @author       urobot2011chess
// @match        https://www.chess.com/play/online
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chess.com
// @grant        none
// ==/UserScript==

//urobot2011script는 개선을 위해 일부 정보를 수집합니다
//동의하지 않다면 이 스크립트를 까지 마세요


if (window.Worker) {
  const myWorker = new Worker("worker.js");

  //myWorker.postMessage(window.join(', '));

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
  }
} else {
  console.log('error');
}


function bughouse_play(){
    document.querySelector(".toggle-custom-game-button").click();
    setTimeout(function(){
        document.querySelector(".create-game-component .selector-button-button").click();
        setTimeout(function(){
            document.querySelector('[data-cy="bughouse"]').click();
            setTimeout(function(){
                document.querySelector('.create-game-component .selector-button-button').setAttribute("style", "display: none;");
                document.querySelector('.custom-game-fields-component').setAttribute("style", "display: none;");
                document.querySelector('[data-cy="new-game-time-selector-button"] .selector-button-label').innerHTML = "15 | 10 분";
                document.querySelector('[data-cy="new-game-time-selector-button"] .icon-font-chess').classList.remove("blitz");
                document.querySelector('[data-cy="new-game-time-selector-button"] .icon-font-chess').classList.add("rapid");
                setTimeout(function(){
                    document.querySelector('data-cy="new-game-index-play').click();
                }, 10);
            }, 10);
        }, 50);
    }, 10);
}
window["bughouse_play"] = bughouse_play;
setTimeout(function(){
    var data_nav_top = document.querySelector('[data-nav-top=""]');
    if(data_nav_top != null){
        //document.querySelector('data-nav-link="play"')
        data_nav_top.insertAdjacentHTML("afterend", `
        <a class="nav-link-component nav-link-main-design nav-link-top-level sprite play-top" data-amplitude-nav-selection="play" data-nav-link="play" href="#" onclick="bughouse_play()">
            <span class="nav-link-text">버그하우스 플레이</span>
            <span class="navigation-badge-next" data-badge="games" data-badge-count="0"><!----></span>
        </a>
        `);
    }
}, 1000);
