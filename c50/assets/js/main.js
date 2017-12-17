(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".listing-carousel").owlCarousel({
        	items:3,
        	autoplay:false,
        	nav:false,
        	dots:true,
        	loop:true,
            margin:30,
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	