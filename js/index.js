// contact modal 


const overlay = document.getElementById('overlay');
const contactBtn = document.getElementById('contact-btn');
const closeModal = document.getElementById('close-btn');
const submitBtn = document.getElementById('submit-btn');

contactBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
})

closeModal.addEventListener('click', function() {
    overlay.style.display = 'none';
})


//mobile menu 

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');



mobileMenuBtn.addEventListener('click', ()=> {
    mobileMenu.style.display = "block"
})

