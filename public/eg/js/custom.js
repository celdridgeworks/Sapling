function myFunction(x) {
  x.classList.toggle("change");
};

$(".mobile_nav_toggle").click(function(){
  $(".EG_header_area").toggleClass("open_mobile_nav");
});

$(".open_sidebar_toggle").click(function(){
  $(".sitebar_area").toggleClass("open_mobile_sitebar");
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};

// Dropdown not hide on click

$(".dropdown-menu").click(function(e){
  e.stopPropagation();
});