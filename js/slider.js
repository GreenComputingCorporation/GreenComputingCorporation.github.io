 /* for Automatioc======================*/
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none"; 
       dots[i].style.background="transparent"; 
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block"; 
     dots[myIndex-1].style.background="#fff"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
/* for Manual ======================*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].style.background="transparent";
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].style.background="#fff";
}