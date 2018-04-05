
window.onload = () => {

	const mobileNavButton = document.querySelector('.mobile-nav-button');
	const nav =document.querySelector('.nav');
	
	let menuUp = false;
	mobileNavButton.addEventListener('click', (e) =>{
		if(!menuUp){
			nav.classList.toggle('deployed');
			mobileNavButton.classList.toggle('change');
		} else {
			nav.classList.toggle('deployed');
			mobileNavButton.classList.toggle('change');

		}

		menuUp = !menuUp;
	});
}

