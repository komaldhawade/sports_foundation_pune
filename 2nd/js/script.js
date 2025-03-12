document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slideNumberContainer = document.querySelector('.slide-number');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlideNumber() {
        slideNumberContainer.textContent = currentIndex + 1;
    }

    function updateSlideNumbers() {
        slideNumberContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const slideNumber = document.createElement('div');
            slideNumber.textContent = i + 1;
            slideNumber.classList.add('slider-number');
            if (i === currentIndex) {
                slideNumber.classList.add('active');
                slideNumber.style.fontWeight = 'bold'; 
            }
            slideNumberContainer.appendChild(slideNumber);
        }
    }

    function updateNavigationButtons() {
        if (currentIndex === 0) {
            prevBtn.classList.remove('active');
        } else {
            prevBtn.classList.add('active');
        }

        if (currentIndex === totalSlides - 1) {
            nextBtn.classList.remove('active');
        } else {
            nextBtn.classList.add('active');
        }
    }

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        currentIndex = index;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateSlideNumber();
        updateSlideNumbers();
        updateNavigationButtons();
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    updateSlideNumber();
    updateSlideNumbers();
    updateNavigationButtons();
});

AOS.init();