var doc = document;
var parentElem = doc.body;
var timer = doc.getElementById('watch');
var toggleBtn = doc.getElementById('toggle');
var resetBtn = doc.getElementById('reset');

var watch = new StopWatch(timer);
toggleBtn.addEventListener('click', function() {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.textContent = "Start";
    } else {
        watch.start();
        toggleBtn.textContent = "Pause";
    }
});

resetBtn.addEventListener('click' , function() {
    watch.reset();
});
