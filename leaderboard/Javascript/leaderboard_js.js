$(document).ready(
  function(){
    $(".top-1").hide(0).delay(500).fadeIn(2500);
    $(".top-2").hide(0).delay(500).fadeIn(3000);
    $(".top-3").hide(0).delay(500).fadeIn(3000);
    $(".lb-header h1").hide(0).delay(500).fadeIn(1000);
  });

function openNav() {
  document.getElementById("mySidebar").style.width = "205px";
  document.getElementById("#main").style.marginLeft = "205px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("#main").style.marginLeft= "0";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $(".lb-top-12-base").animate({
      opacity: '1',
      bottom: '50px'
    }, 1000);
  };
};