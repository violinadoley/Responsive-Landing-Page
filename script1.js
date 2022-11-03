const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

var icon = documenet.getElementById("icon");


fetch('https://app.ticketmaster.com/discovery/v2/attractions/K8vZ9175BhV.json?apikey=AOD3BQLpxEAq6C4CPJHKIIeahGAjXGWj#')
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(error => console.log('ERROR'))
