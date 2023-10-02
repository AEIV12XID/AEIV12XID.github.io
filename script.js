var currentIndex = 0;
var frames = document.querySelectorAll('.frame');
var captions = document.querySelectorAll('.caption');

function showFrame(index) {
    if (index >= frames.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = frames.length - 1;
    } else {
        currentIndex = index;
    }

    frames.forEach(function(frame) {
        frame.style.display = 'none';
    });
    captions.forEach(function(caption) {
        caption.style.display = 'none';
    });

    frames[currentIndex].style.display = 'block';
    captions[currentIndex].style.display = 'block';
}

function plusSlides(n) {
    showFrame(currentIndex + n);
}

showFrame(currentIndex);
