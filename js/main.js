var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
		BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
		iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
		Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
		Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
		any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};


function fullHeight() {
	if ( !isMobile.any() ) {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	}
};

// Parallax
function parallax() {
	$(window).stellar();
};

function contentWayPoint() {
	var i = 0;
	$('.animate-box').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
			
			i++;

			$(this.element).addClass('item-animate');
			setTimeout(function(){

				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('animate-effect');
						if ( effect === 'fadeIn') {
							el.addClass('fadeIn animated-fast');
						} else if ( effect === 'fadeInLeft') {
							el.addClass('fadeInLeft animated-fast');
						} else if ( effect === 'fadeInRight') {
							el.addClass('fadeInRight animated-fast');
						} else {
							el.addClass('fadeInUp animated-fast');
						}

						el.removeClass('item-animate');
					},  k * 100, 'easeInOutExpo' );
				});
				
			}, 50);
			
		}

	} , { offset: '85%' } );
};



function goToTop() {
	$('.js-gotop').on('click', function(event){
		
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $('html').offset().top
		}, 500, 'easeInOutExpo');
		
		return false;
	});

	$(window).scroll(function(){

		var $win = $(window);
		if ($win.scrollTop() > 200) {
			$('.js-top').addClass('active');
		} else {
			$('.js-top').removeClass('active');
		}

	});
};

// function pieChart() {
// 	$('.chart').easyPieChart({
// 		scaleColor: false,
// 		lineWidth: 5,
// 		lineCap: 'butt',
// 		barColor: '#FF9000',
// 		trackColor:	"#555555",
// 		size: 160,
// 		animate: 1000
// 	});
// };

// function skillsWayPoint() {
// 	if ($('#fh5co-skills').length > 0 ) {
// 		$('#fh5co-skills').waypoint( function( direction ) {
									
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				setTimeout( pieChart , 400);					
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '90%' } );
// 	}
// };

contentWayPoint();
goToTop();
fullHeight();
parallax();
// pieChart();
// skillsWayPoint();