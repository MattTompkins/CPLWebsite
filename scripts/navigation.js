window.addEventListener('scroll', function () {
	var header = document.querySelector('header');
	var logo = document.querySelector('.bg-navy');
	var donateBar = document.querySelector('.bg-red-700');
	var headerContainer = document.querySelector('#js-header-container');

	if (window.pageYOffset > 0) {
		header.classList.add('scrolled');
		logo.style.display = 'none';
		donateBar.style.display = 'none';
		headerContainer.classList.remove('container', 'max-w-8xl');
	} else {
		header.classList.remove('scrolled');
		logo.style.display = 'flex';
		donateBar.style.display = 'block';
		headerContainer.classList.add('container', 'max-w-8xl');
	}
});

var mobileSidebar = document.getElementById('mobile-sidebar');
var mobileSidebarButton = document.querySelector('.md\\:hidden button');
var mobileSidebarOverlay = document.getElementById('mobile-sidebar-overlay');

function toggleMobileSidebar() {
	mobileSidebar.classList.toggle('translate-x-0');
	mobileSidebarOverlay.classList.toggle('hidden');
}

mobileSidebarButton.addEventListener('click', toggleMobileSidebar);

mobileSidebarOverlay.addEventListener('click', toggleMobileSidebar);

window.addEventListener('resize', function () {
	if (window.innerWidth > 768) {
		mobileSidebar.classList.remove('translate-x-0');
		mobileSidebarOverlay.classList.add('hidden');
	}
});
