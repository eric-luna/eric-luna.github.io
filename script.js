$(document).ready(function(){
	$('header').fadeIn(3000);
	$('#skills').fadeIn(3000);
	$('#about').fadeIn(5000);

	var $mobileNavTrigger = $(".mobile-nav-bar"),
	$targetMobileNav = $(".mobile-nav"),
	showMobileNavClass = "show-mobile-nav";

	$mobileNavTrigger.click(function(){
		$targetMobileNav.toggleClass(showMobileNavClass);
	});

});