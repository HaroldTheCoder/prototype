

// Fixed Header-Navbar function
const topHeader = document.querySelector('#main-header');
const navLink = document.querySelectorAll('#main-header .nav-link');
const navLogo = document.querySelector('.logo-link img');
const buttonBar = document.querySelectorAll('.bar');



// Mobile navigation function 
const navbar = document.querySelector('#mobile-navbar');
const navButton = document.querySelector('.nav-button');
const navMobile = document.querySelector('.navigation-mobile');
const linkMobile = document.querySelectorAll('.navigation-mobile .nav-item');
const contactNav = document.querySelector('.contact-info');
const socialLinkBlock = document.querySelector('.social-media-nav-mobile');

navButton.addEventListener('click', () => {
	
	if(navbar.classList.contains('nav-active')) {
		navbar.classList.remove('nav-active');
		navMobile.classList.remove('fade-up');
		contactNav.classList.remove('fade-up');
		socialLinkBlock.classList.remove('fade-up');
		buttonBar.forEach((b)=> b.classList.remove('bar-active'));
		linkMobile.forEach((l)=> l.classList.remove('fade-up'));
        document.body.style.position = 'static'
	} else {
		navbar.classList.toggle('nav-active');
		navMobile.classList.toggle('fade-up');
		contactNav.classList.toggle('fade-up');
		socialLinkBlock.classList.toggle('fade-up');
		buttonBar.forEach((b)=> b.classList.toggle('bar-active'));
		linkMobile.forEach((l)=> l.classList.toggle('fade-up'));
        document.body.style.position = 'fixed';
        document.body.style.width = "100%";

	}
})



// Reviews Slider
const reviewSlider = document.querySelector(".slides-container");

// Controls
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const bullet = document.querySelector("#bullets");
let slideIndex = 0;


const setIndex = () => {
	document.querySelector("#bullets .selected").classList.remove("selected");
	reviewSlider.style.transform = `translate(${slideIndex * -33.33}%)`;
}

document.querySelectorAll("#bullets li").forEach((bullets, ind) => {
	bullets.addEventListener("click", () => {
		slideIndex = ind;
		setIndex(slideIndex);
		bullets.classList.add("selected");
	});
});

const autoSlider = () => {

    if(bullet.children[2].classList.contains('selected')) {
        slideIndex = slideIndex > 0 ? slideIndex - 2 : 0;
	    setIndex();
	    bullet.children[slideIndex].classList.add("selected");
    } else {
        slideIndex = slideIndex < 2 ? slideIndex + 1 : 2;
	    setIndex();
	    bullet.children[slideIndex].classList.add("selected");
    }
}

setInterval(autoSlider, 9000);