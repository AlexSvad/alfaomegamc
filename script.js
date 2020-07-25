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

/*
function envioForm(){
    var v = grecaptcha.getResponse();
    if(v.length == 0){
        e.preventDefault();
        $("gform").attr("action","");
        document.getElementById('captcha').innerHTML="Captcha incorrecto";
        return false;
    }
    else{
        document.getElementById('captcha').innerHTML="Captcha correcto";
        submitted=true;
        $('#gform *').fadeOut(300);
        $('#gform').prepend("<h3>Mensaje enviado!<br><br>Gracias</h3>");  
        return true;
    }
}*/
/*
$('#gform').on('submit', function(e) {
  var res = grecaptcha.getResponse();
  if(res.length == 0) { 
    alert("Captcha no verificado!"); 
    evt.preventDefault();
  }
});
*/

$('#gform').on('submit', function(e) {
    var v = grecaptcha.getResponse();
    if(v.length == 0){
        alert("Captcha no verificado!"); 
        e.preventDefault();
        return false;
    }
    else{
        submitted=true;
        $('#gform *').fadeOut(300);
        $('#gform').prepend("<h3>Mensaje enviado!<br><br>Gracias</h3>");  
        return true;
    }
});
/*

$("gform").submit(function(e){
 e.preventDefault();
/*
  var res = grecaptcha.getResponse();
  if(res.length == 0) { 
    alert("Captcha no verificado!"); 
    evt.preventDefault();
  }

    */



/*
function envioForm(){
    if(val==true){
    submitted=true;
    $('#gform *').fadeOut(300);
    $('#gform').prepend("<h3>Mensaje enviado!<br><br>Gracias</h3>");  
    return true;
    }
    else return false;
}*/