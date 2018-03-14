
window.onload = () => {

	const mobileNavButton = document.querySelector('.mobile-nav-button');
	const nav =document.querySelector('.nav');
	
	let menuUp = false;
	mobileNavButton.addEventListener('click', (e) =>{
		if(!menuUp){
			console.log('deploying menu');
		
			nav.classList.add('deployed');
		} else {
			console.log('putting menu away');
			nav.classList.remove('deployed');
		}

		menuUp = !menuUp;
	});
}

