var timeLeft = 3622605;


var currTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(currTimer);
  } else{
    document.getElementById("numberId").textContent = numberWithCommas(timeLeft);
    timeLeft -= 1;
  }
  console.log("timeLeft");
}, 1000);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var slideIndex = 1;
carousel(slideIndex);


function plusSlides(n) {
  if(n < -1){
    n = -1;
  } else if(n > 1){
    n = 1;
  }
  carousel(slideIndex += n);
}

function currentSlide(n) {
  slideIndex = n;
  carousel(slideIndex);
}

function carousel(n) {
  var i;
  var slides = document.getElementsByClassName("theSlides");
  var dots = document.getElementsByClassName("dot");
  // go back to slide 1 if we try to go to right on last slide
  if (n > 4) {slideIndex = 1}
  if (n < 1) {slideIndex = 4}
  for (i = 0; i < 4; i++) {
      slides[i].style.display = "none";
      // show that the dots aren't highlighted on current slide.
      dots[i].className = dots[i].className.replace(" active", "");
  }

  // make current slide active and appearing.
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}