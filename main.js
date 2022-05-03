

/*window.addEventListener('scroll', ()=> {
    if(window.scrollY > 0) {
        document.body.classList.add('light-active');
        document.body.classList.remove('dark-active');
    } else  {
        document.body.classList.remove('active');
        document.body.classList.add('dark-active');
    }
})*/

// Mobile navigation function 

const navbar = document.querySelector('#mobile-navbar');
const navButton = document.querySelector('.nav-button');
const buttonBar = document.querySelectorAll('.bar');

navButton.addEventListener('click', ()=> {
	

	if(navbar.classList.contains('nav-active')) {
		navbar.classList.remove('nav-active');
		buttonBar.forEach((b)=> b.classList.remove('bar-active'))
	} else {
		navbar.classList.toggle('nav-active');
	buttonBar.forEach((b)=> b.classList.toggle('bar-active'))
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


function setIndex() {
	document.querySelector("#bullets .selected").classList.remove("selected");
	reviewSlider.style.transform = `translate(${slideIndex * -33.33}%)`;
}

document.querySelectorAll("li").forEach((bullets, ind) => {
	bullets.addEventListener("click", () => {
		slideIndex = ind;
		setIndex(slideIndex);
		bullets.classList.add("selected");
	});
});

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
