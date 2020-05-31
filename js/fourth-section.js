const prevSlide = document.querySelector('.slideshow-container__prev');
const nextSlide = document.querySelector('.slideshow-container__next');
let slides = document.getElementsByClassName('slideshow-container__slides');
let pagination = document.getElementsByClassName('pagination__item');
let paginationLoading = document.getElementsByClassName('pagination__item_loaded');

let slideIndex = 0;

function plusSlides(num) {
  slideIndex += num;
  if(slideIndex == 4) {
    slideIndex = 0;
  }
  if(slideIndex == -1) {
    slideIndex = 3;
  }
  showSlides(slideIndex);
}

function currentSlide(num) {
  slideIndex = num;
  showSlides(num);
}

function showSlides(index) {
  for (let i = 0; i < slides.length; i++) {
    if (i != index) {
      slides[i].style.display = 'none';
    } else {
      slides[i].style.display = 'block';
    }
  }
  for (let j = 1; j <= index; j++) {
    paginationLoading[j].style.width = "100%";
  }
  for (let j = index + 1; j < pagination.length; j++) {
    paginationLoading[j].style.width = "0";
  }
}

prevSlide.addEventListener('click', plusSlides.bind(null, -1));
nextSlide.addEventListener('click', plusSlides.bind(null, 1));

for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = 'none';
}

for (let i = 0; i < pagination.length; i++) {
  pagination[i].addEventListener('click', currentSlide.bind(null, i));
}