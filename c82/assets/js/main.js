(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.feature-projects').owlCarousel({
        	items:1,
        	nav:false,
        	loop:true,
        	dots:true
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	