(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.testimonial-carousel').owlCarousel({
        	items:1,
        	nav:true,
        	dots: false,
        	navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        	autoplay: true,
        	loop:true


        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	