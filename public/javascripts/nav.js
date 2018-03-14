
window.onload = () => {

	const mobileNavButton = document.querySelector('.mobile-nav-button');

	let menuUp = false;
	mobileNavButton.addEventListener('click', (e) =>{
		if(!menuUp){
			console.log('deploying menu');
		} else {
			console.log('putting menu away');
		}

		menuUp = !menuUp;
	});
}

