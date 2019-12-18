function countdown() {
    var seconds= document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innterHTML= seconds;
        setTimeout(tick, 1000);
    if(seconds == -1){
        alert("Time's up!");
    }
}
tick();
}