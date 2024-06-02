let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slides img");
    let dots = document.querySelectorAll(".dot");

    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(" active", "");
    });

    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds

    if (slideIndex == slides.length) {
        slideIndex = 0; // Reset slideIndex to 0 after the last slide
    }
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("contact-form");
    var btn = document.getElementById("contact-us");
    var span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
