(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        //$(".author-names").PerfectScrollbar();
        new PerfectScrollbar('.author-names');



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	