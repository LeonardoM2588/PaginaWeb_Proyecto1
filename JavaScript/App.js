// Variable
const gallery = document.querySelectorAll('.galeria-port .imagen-port img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');


// Gallery
gallery.forEach((images) => {
     
    images.addEventListener('click', (event) => {
       modal.style.display = "block";

       let srcImg = event.target.src;
       let altImg = event.target.alt;

       imgModal.src = srcImg;
       caption.innerHTML = altImg;
              
    });
     
});

// Close Modal
document.querySelector('#closeModal').addEventListener('click', () => {
    modal.style.display = "none";
});




