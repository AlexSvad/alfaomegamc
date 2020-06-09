$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
       window.location.hash = hash;
      });
    }
  });
});

var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});


let img = document.querySelector(".img");

document.addEventListener("mousemove", function(e){

    if(e.x > img.getBoundingClientRect().x
    && e.x < img.getBoundingClientRect().x + img.getBoundingClientRect().width
    && e.y > img.getBoundingClientRect().y
    && e.y < img.getBoundingClientRect().y + img.getBoundingClientRect().height){
       
        if(e.x > img.getBoundingClientRect().x
        && e.x < img.getBoundingClientRect().x + (img.getBoundingClientRect().width/2)){
            let valueXLeft = (img.getBoundingClientRect().width/2 - (e.x - img.getBoundingClientRect().x))/10;
            TweenMax.to(img, 1, {rotationY: -1 * valueXLeft})
        }
        
        if(e.x > img.getBoundingClientRect().x + (img.getBoundingClientRect().width/2)
        && e.x < img.getBoundingClientRect().x + (img.getBoundingClientRect().width)){
            let valueXRight = (e.x - img.getBoundingClientRect().x - img.getBoundingClientRect().width/2)/10;
            TweenMax.to(img, 1, {rotationY:  valueXRight})

        }

        if(e.y > img.getBoundingClientRect().y
        && e.y < img.getBoundingClientRect().y + (img.getBoundingClientRect().height/2)){
            let valueYTop = (img.getBoundingClientRect().height/2 - (e.y - img.getBoundingClientRect().y))/10;
            TweenMax.to(img, 1, {rotationX: valueYTop})
        }
        
        if(e.y > img.getBoundingClientRect().y + (img.getBoundingClientRect().height/2)
        && e.y < img.getBoundingClientRect().y + (img.getBoundingClientRect().height)){
            let valueYBottom = (e.y - img.getBoundingClientRect().y - img.getBoundingClientRect().height/2)/10;
            TweenMax.to(img, 1, {rotationX: -1 * valueYBottom})

        } 
    
    }
    else{
        TweenMax.to(img, 2, {rotationX: 0})
        TweenMax.to(img, 2, {rotationY: 0})

    }
})