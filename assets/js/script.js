$(document).ready(function() {

    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.services-container').backstretch("assets/images/medical.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
	
});