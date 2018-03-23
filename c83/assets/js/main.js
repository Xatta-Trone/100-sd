(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $('#webDesignprogressbar').circleProgress({
        	value: 0.9,
        	size: 200,
        	fill: '#3498db',
        	thickness:'2',
        	emptyFill:'transparent'

        }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.progressbar-percent').html(Math.round(90 * progress) + '<i>%</i>');
	  });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	