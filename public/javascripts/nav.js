
window.onload = () => {

	const overlayNav = document.querySelector('.overlay-nav'), 
		overlayContent = document.querySelector('.overlay-content'),
		toggleNav = document.querySelector('.nav-trigger'),
		navigation = document.querySelector('.nav-list');

	function hasClass(element, cls) {
		return(` ${element.className} `).indexOf(` ${cls} `) > -1;
	}

	console.log(overlayNav, overlayContent, toggleNav, navigation);

	toggleNav.addEventListener('click', () => {
		if(!hasClass(toggleNav, 'close-nav')) {
			//console.log(overlayNav.getElementsByTagName('span')[0]);
			//nav is not visible yet - open and animate navigation layer
			toggleNav.classList.add('close-nav');
			//animate the navigation layer
			overlayNav.getElementsByTagName('span')[0].velocity({
				translateZ: 0,
				scaleX: 1,
				scaleY: 1,
			}, 500, 'easeInCubic', function(){
				navigation.classList.add('fade-in');
			});
		} else {
			//animate cross icon into a menu icon
			toggleNav.classList.remove('close-nav');
			//animate content layer
			overlayContent.getElementsByTagName('span')[0].velocity({
				translateZ: 0,
				scaleX: 0,
				scaleY: 0,
			}, 0);
			//reduce to opacity of the content layer
			overlayContent.classList.add('hidden').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () =>{
				overlayContent.getElementsByTagName('span')[0].velocity({
					translateZ: 0,
					scaleX: 0,
					scaleY: 0,
				}, 0, () => {overlayContent.classList.remove('hidden')});
			});
		}
	});
}

