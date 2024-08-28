window.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playlist = document.getElementById('playlist');
    var songs = playlist.getElementsByTagName('li');

    for (var i = 0; i < songs.length; i++) {
        var song = songs[i];
        song.addEventListener('click', function() {
            var source = this.getAttribute('data-src');
            audioPlayer.src = source;
            audioPlayer.play();
        });
    }
});
