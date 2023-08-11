const slideTrack = document.querySelector(".slide-track");

const gallery = [
  {
    img: "./image/gallery1.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery2.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery3.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery4.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery5.jpg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery6.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery7.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery8.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery9.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery10.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery11.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery12.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery13.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery14.jpeg",
    alt: "Gallery Image",
  },
  {
    img: "./image/gallery15.jpeg",
    alt: "Gallery Image",
  },


]


const extendedGallery = gallery.concat(gallery);
window.addEventListener("DOMContentLoaded", function() {
  let displayGallery = extendedGallery.map(function(item) {
    return `<div class="slide">
              <img src="${item.img}" alt="${item.alt}">
            </div>`;
           
  });
   console.log(displayGallery.length);
   console.log(displayGallery);
  displayGallery = displayGallery.join("");
  slideTrack.innerHTML = displayGallery;

});