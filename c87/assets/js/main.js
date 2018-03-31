(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('.homepage-slides').owlCarousel({
        	items:1,
        	nav:true,
        	dots:true,
        	autoplay:false,
        	loop:true,
        	navText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        	dataDots:true


        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	