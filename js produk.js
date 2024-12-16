const carouselInner = document.querySelector('#produkCarousel .carousel-inner');
const nextBtn = document.querySelector('.carousel-control-next');
const prevBtn = document.querySelector('.carousel-control-prev');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.carousel-item');
  const maxIndex = items.length - 1;

  if (currentIndex < maxIndex) {
    currentIndex++;
    carouselInner.scrollTo({
      left: currentIndex * carouselInner.offsetWidth,
      behavior: 'smooth',
    });
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselInner.scrollTo({
      left: currentIndex * carouselInner.offsetWidth,
      behavior: 'smooth',
    });
  }
});