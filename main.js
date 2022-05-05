
// Mobile navigation function 
const navbar = document.querySelector('#mobile-navbar');
const navButton = document.querySelector('.nav-button');
const buttonBar = document.querySelectorAll('.bar');
const navMobile = document.querySelector('.navigation-mobile');
const linkMobile = document.querySelectorAll('.navigation-mobile .nav-item');
const contactNav = document.querySelector('.contact-info');

navButton.addEventListener('click', () => {
	
	if(navbar.classList.contains('nav-active')) {
		navbar.classList.remove('nav-active');
		navMobile.classList.remove('fade-up');
		contactNav.classList.remove('fade-up');
		buttonBar.forEach((b)=> b.classList.remove('bar-active'));
		linkMobile.forEach((l)=> l.classList.remove('fade-up'));
        document.body.style.position = 'static'
	} else {
		navbar.classList.toggle('nav-active');
		navMobile.classList.toggle('fade-up');
		contactNav.classList.toggle('fade-up');
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
const middleCard = document.querySelector(".middle-card");
let slideIndex = 0;


const setIndex = () => {

	document.querySelector("#bullets .selected").classList.remove("selected");
	reviewSlider.style.transform = `translate(${slideIndex * -33.33}%)`;
}

next.addEventListener("click", () => {
    
	slideIndex = slideIndex < 2 ? slideIndex + 1 : 2;
	setIndex();
	bullet.children[slideIndex].classList.add("selected");
});

prev.addEventListener("click", (e) => {
	slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
	setIndex();
	bullet.children[slideIndex].classList.add("selected");
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