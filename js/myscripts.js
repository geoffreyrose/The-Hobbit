var myScroll;
function loaded() {
	myScroll = new iScroll('scroll',{checkDOMChanges:true});
}

document.addEventListener('DOMContentLoaded', loaded, false);

$(document).ready(function(){

	document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);
	
	$('nav ul li a').on('touchstart', function(){
		changePage($(this).attr('data-file'));
		});
	
		
	$('nav ul li:first-of-type a').trigger('touchstart');
	


});

function changePage(fileName){
	$('.content_container').animate({opacity:0}, 500, function(){
		// load content
		$('.content_loading_container').load('pages/'+fileName, function(){
			$('.content_container').delay(250).animate({opacity:1}, 500);
		});
	});
}

