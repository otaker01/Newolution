/**
 * Toolkit JavaScript
 */

'use strict';

var $ = require('jquery');
// var Modernizr = require('modernizr');

// Third-party modules
// require('../../vendor/example/plugin.js');

// Foundation JS
require('./foundation.js');

// Utilities
// require('./utils/reinit-components.js');

// Compatibility
// require('./compatibility/modernizr-tests.js');

// Components
// require('./components/owl-carousel.js');

$(function(){
	// $('input, textarea').placeholder();
	$(document).foundation();
	
	setTimeout(function(){
		$(".fouc").css('opacity',1);
	},200);
});
//   $(".modern").on('change', function() {
// 	  console.log("changeing")
//   })

//   $( "body" ).change(function() {
// 	console.log( "Handler for .change() called." );
//   });
//   console.log(window.screenY)


// $(document).scroll(function() {
//     console.log($(document).scrollTop());
// })

// My code

$(".inner-modern_part-2").click( function() {
	$(".circle").toggleClass("rotate");
	$(".day").toggleClass("active")
	$(".night").toggleClass("active")
  })
  

// scroll to top
  $(document).ready(function(){
	$('.ScrollTop').click(function() {
	  $('html, body').animate({scrollTop: 0}, 800);
	return false;
	  });
  });

//   watch
$(document).ready(function (){
	$(".watch").click(function (){
		$('html, body').animate({
			scrollTop: $("#intro").offset().top
		}, 800);
	});
});

var targetOffset = $("#modern").offset().top;
// console.log(targetOffset);


var $w = $(window).scroll(function(){
	var tt = $w.scrollTop();
	// console.log(tt);
    if ( $w.scrollTop() > targetOffset ) { 
			$(".circle").addClass("rotate");
			$(".day").removeClass("active");
			$(".night").addClass("active");
	    } else {
			$(".circle").removeClass("rotate");
			// $(".day").removeClass("active");
			$(".day").addClass("active");
			$(".night").removeClass("active");
		    }
		 });

