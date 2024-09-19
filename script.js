let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Reset to first slide
    }

    slides[slideIndex - 1].style.display = "block";  // Show current slide
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
