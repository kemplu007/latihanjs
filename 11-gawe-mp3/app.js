let musik = new Audio();
musik.src= 'audio/kenny-g.m4a'
musik.loop= true;
musik.play();
let geser;
 
function mulaiAudio() {
    let play= document.getElementById('play');
    let mute=document.getElementById('mute');
    let musikSlider = document.getElementById('musikSlider');
    let volumeSlider = document.getElementById('volumeSlider');
    let waktuSekarang = document.getElementById('waktuSekarang');
    let durasi = document.getElementById('durasi');
    

    play.addEventListener('click', fplay);
        mute.addEventListener('click', fmute);
        volumeSlider.addEventListener('mousemove', setVolume);
        musikSlider.addEventListener('mousedown', function(e){
            geser =true;
            setPosisiMusik(e);
        });
             musikSlider.addEventListener('mousemove', function(e) {
                 setPosisiMusik(e);
             });

              musikSlider.addEventListener('mousemup', function() {
                geser =false;
            });
            function setPosisiMusik(e){
                if (geser){
                    let posisiMusik = musik.duration* (musikSlider.value/100);
                    musik.currentTime = posisiMusik;
                }

            }
        function setVolume() {
            musik.volume=volumeSlider.value / 100;
        }

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
        musik.addEventListener('timeupdate', function(){
            updateWaktu();
        })
        function updateWaktu(){
            let waktuBaru = musik.currentTime * (100/musik.duration);
            musikSlider.value = waktuBaru;

            let menitSekarang = Math.floor(musik.currentTime/60);
            let detikSekarang = Math.floor(musik.currentTime - menitSekarang * 60);
            let menitDurasi = Math.floor(musik.duration/60);
            let detikDurasi = Math.floor(musik.duration -menitDurasi* 60);

            waktuSekarang.innerHTML=menitSekarang + ':' + detikSekarang;
            durasi.innerHTML=menitDurasi + ':' + detikDurasi;
        }

}

window.addEventListener('load', mulaiAudio)