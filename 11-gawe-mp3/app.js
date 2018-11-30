let musik = new Audio();
musik.src= 'audio/18AndLife.mp3'
musik.loop= false;
musik.play();
 
function mulaiAudio() {
    let play= document.getElementById('play');
    let mute = document.getElementById('mute');

    play.addEventListener('click', fplay);
        mute.addEventListener('click', fmute);

        function fplay() {
            if (musik.paused) {
                musik.play();
                play.style.background='url(img/pause.png)';
            }else{
                  musik.pause();
                  play.style.background = 'url(img/play.png)';
            }
        }
        function fmute() {
            if (musik.muted) {
                musik.muted = false
                mute.style.background = "url(img/mute.png";
            }else{
                musik.muted = true
                mute.style.background = "url(img/unmute.png";
            }
        }

}

window.addEventListener('load', mulaiAudio)