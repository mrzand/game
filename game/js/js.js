function shooting() {

    var e = document.getElementById('back');
    var panelButton = document.getElementById('buttonPanel');
    var loser = document.getElementById('loser');
    var shoot = Math.round((Math.random() * 5 + 1));
    var revolver = 1;
    var myAudio = document.getElementById("audio");
    var VideoShoot = document.getElementById("videoShoot");

    if (shoot == revolver) {
        VideoShoot.play();
        e.style.display = "none";
        panelButton.style.display = "block";
        loser.style.display = "block";
    } else {
        myAudio.play();
        e.style.display = "none";
        panelButton.style.display = "block";
    }
}
