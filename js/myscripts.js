var myScroll;
function loaded() {
	myScroll = new iScroll('scroll',{checkDOMChanges:true});
}

var isiPad = navigator.userAgent.indexOf('iPad') != -1;

document.addEventListener('DOMContentLoaded', loaded, false);

$(document).ready(function(){



	document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);
	
	$('nav ul li a').on('touchstart', function(){
		changePage($(this).attr('data-file'));
		});
	
		
	$('nav ul li:first-of-type a').trigger('touchstart');
	
	checkDevice();
	checkiPadStandAlone();

});
function checkDevice(){
	if(window.isiPad){
		// do nothing
	}else{
		window.location = "notipad/index.html";
	}
}

function checkiPadStandAlone(){
	if(window.navigator.standalone == false) {
		$('.container').css('display','none');
		$('body').load('installapp.html')
	}
}

function changePage(fileName){
	$('.content_container').animate({opacity:0}, 500, function(){
		// load content
		$('.content_loading_container').load('pages/'+fileName, function(){
			$('.content_container').delay(250).animate({opacity:1}, 500);
		});
	});
}
