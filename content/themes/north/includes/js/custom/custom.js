jQuery(document).ready(function( $ ) {

		// Flexslider
		$( ".flexslider" ).flexslider( {
			animation: 		"fade",
			animationSpeed: 150,
			slideshow: 		false,
			controlNav: 	false,
			smoothHeight: 	true
		});

		// Fix the height of flexslider when using smooth height
		$( window ).load( function() {
			$( ".flexslider" ).each( function() {
				var first_image_height = $( this ).find( "ul.slides li:first-child img" ).css( "height" );
				$( this ).css( "height", first_image_height );
			});
		});

		// FitVids
		$( ".fitvid, iframe" ).fitVids();

		// Responsive Menu
		$( ".nav-toggle" ).toggle( function() {
		    $( ".header-wrap" ).css( "height", "auto");
		    $( ".nav" ).css( "display", "inline-block" );
		    return false;
		}, function () {
		    $( ".header-wrap" ).css( "height", "inherit" );
		    $( ".nav" ).css( "display", "none");
		    return false;
		});

		// Detect window width, show/hide menu accordingly
		$( window ).on( "resize", function () {
			var current_width = $(window).width();

			if($(window).width() != current_width) {
				// If width is above tablet size
				if( current_width > 769 ) {
					$( ".nav" ).css( "display", "inline-block" );
				}

				// If width is below tablet size
				if( current_width < 769 ) {
					$( ".nav" ).css( "display", "none" );
				}
			}
		});

        // Device Class
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	       $( "body" ).addClass( "device" );
	    }

	    // View Lightbox
	    $( ".single header .slides li a" ).addClass( "view" );
	    $( ".single header .slides li a" ).attr( "rel", "lightbox" );

		// Share Links
		$( ".share a" ).click( function() {
			$( ".share ul" ).fadeToggle( "fast" );
			return false;
		});
});