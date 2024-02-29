let slideIndex = 1;

function openModal() {
  document.getElementById("myModal").style.display = "block";
  showSlides(slideIndex);
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img-thumb");
  let modalImg = document.getElementById("modalImg");
  let modal = document.getElementById("myModal");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  modalImg.src = slides[slideIndex-1].src;
  modal.style.display = "block";
}
