/*
******************************************************************************************
| * Bloco de codigo chamando e executando comandos na API de vídeos do YouTube
| * Esse bloco de código chama e executa funções no primeiro Player de vídeo da página
******************************************************************************************
*/

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'CqHMuHrNZ_k',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'showinfo': 0,
            'rel': 0
        },
        events: {
            //            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    player.playVideo();
}

function onPlayerPause(event) {
    player.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}

/*
****************************************************************************************
| * Pure Javascript Accordion
****************************************************************************************
*/
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}


/*
****************************************************************************************
| * JQuery
****************************************************************************************
*/
jQuery(document).ready(function () {

    jQuery("a.demo").YouTubePopUp({ autoplay: 0 });

    //Abilita a opição Full Screen no iframe de vídeo do YouTube
    $("#player")[0].setAttribute("allowfullscreen", "allowfullscreen");

    //Funções e chamadas para executar ações no Player do Youtube
    var play = $('.player-overlay');

    $(play).on('click', function () {
        $(this).addClass('hide__button');
    });


    //Smoth Scrool nos botões de ação levando até o bloco dos Planos
    $(".call-to-action").click(function () {
        $('html, body').animate({
            scrollTop: $("#planos-super-body-caps").offset().top
        }, 2000);
    });
});
