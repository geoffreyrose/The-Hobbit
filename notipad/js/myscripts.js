$(document).ready(function(){
	$("header").addClass("mobileheader");
	
	$('#mobilenav').click(function() {
		$('header').toggleClass("mobileheader");
	});
});