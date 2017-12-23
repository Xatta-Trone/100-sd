(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	$(".select-th-1").on('click', function() {
    		$("body").addClass('theme-1').removeClass('theme-2');
    		return false;
    	});
    	$(".select-th-2").on('click', function() {
    		$("body").addClass('theme-2').removeClass('theme-1');
    		$("html").css('heigth', 'auto');
    		    		return false;
    	});



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	