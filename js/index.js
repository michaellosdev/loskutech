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



const body = document.getElementsByTagName('body')[0]; 
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

//mobile menu open/close button

const firstLine = document.getElementById('first-line');
const secondLine = document.getElementById('second-line');
const thirdLine = document.getElementById('third-line');


// on click event listener

mobileMenuBtn.addEventListener('click', ()=> {

    if (mobileMenu.style.display === "block") {
            firstLine.style.animation = 'first-line-out 0.2s linear 1 forwards';
            secondLine.style.animation = 'second-line-out 0.2s linear 1 forwards';
            thirdLine.style.animation = 'third-line-out 0.2s linear 1 forwards';
            mobileMenu.style.animation = 'mobile-menu-close 0.2s linear 1 forwards';
            setTimeout(function() {mobileMenu.style.display = "none"},200);
    } else  {
            mobileMenu.style.display = 'block'
            mobileMenu.style.animation= 'mobile-menu-open 0.2s linear 1 forwards'
            firstLine.style.animation = 'first-line 0.2s linear 1 forwards'
            secondLine.style.animation = 'second-line 0.2s linear 1 forwards'
            thirdLine.style.animation = 'third-line 0.2s linear 1 forwards'
    }

})






