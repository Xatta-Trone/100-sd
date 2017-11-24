(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        var s = skrollr.init({
        	render: function(data){

        	}
        });

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	