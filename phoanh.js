let menuToggler = document.querySelector(".menu-icon");
let menuLinks = document.querySelectorAll(".menu-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click",() => {
    body.classList.toggle("open");
});

menuLinks.forEach (link => () => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

//Slideshow
$(document).ready(function () {
  $(".carousel").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      dots: true
  });
});
