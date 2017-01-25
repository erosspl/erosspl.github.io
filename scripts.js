$(function () {
	$('body').hide().fadeIn(3000);

	$('#amiWeb').click(function() {
		window.open('https://erosspl.github.io/amiga', '_blank');
	});
	$('#amiGit').click(function() {
		window.open('https://github.com/erosspl/amiga', '_blank');
	});
	$('#rpsWeb').click(function() {
		window.open('https://erosspl.github.io/rps', '_blank');
	});
	$('#rpsGit').click(function() {
		window.open('https://github.com/erosspl/rps', '_blank');
	});
	$('#countryWeb').click(function() {
		window.open('https://erosspl.github.io/country', '_blank');
	});
	$('#countryGit').click(function() {
		window.open('https://github.com/erosspl/country', '_blank');
	});
	$('#rwdWeb').click(function() {
		window.open('https://erosspl.github.io/psd-rwd', '_blank');
	});
	$('#rwdGit').click(function() {
		window.open('https://github.com/erosspl/psd-rwd', '_blank');
	});
	$('#goUp').click(function() {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	});
	$('#goDownload').click(function() {
		document.querySelector('#download').scrollIntoView({ behavior: 'smooth' });
	});
	$('#goTechs').click(function() {
		document.querySelector('#techs').scrollIntoView({ behavior: 'smooth' });
	});
	$('#goGallery').click(function() {
		document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
	});	
})