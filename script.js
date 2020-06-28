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
// Handle IE and more capable browsers
var xhr = new ( window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
var status;

// Open new request as a HEAD to the root hostname with a random param to bust the cache
xhr.open( "HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );

// Issue request and handle response
try {
xhr.send();
  $('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(300);
  $('#gform').prepend("<h3>Mensaje enviado!!<br><br>Gracias</h3>");
});
console.log ( xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 );
} catch (error) {
$('#gform').on('submit', function(e) {
$('#gform *').fadeOut(300);
$('#gform').prepend("<h3>Sin internet!!<br></h3>");
});
console.log(error);
}