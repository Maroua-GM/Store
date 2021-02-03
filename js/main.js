// first slider

$(".slider-one").not(".slick-intialized").slick({
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	prevArrow: ".site-slider .slider-btn .prev",
	nextArrow: ".site-slider .slider-btn .next",
});
// second slider

$(".slider-two")
	.not(".slick-intialized")
	.slick({
		prevArrow: ".site-slider-two .slider-btn .prev",
		nextArrow: ".site-slider-two .slider-btn .next",
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		autoplayHoverPause: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
$(".slider-third")
	.not(".slick-intialized")
	.slick({
		prevArrow: ".site-slider-third .slider-btn .prev",
		nextArrow: ".site-slider-third .slider-btn .next",
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		autoplayHoverPause: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
$(".slider-for")
	.not(".slick-intialized")
	.slick({
		prevArrow: ".site-slider-for .slider-btn .prev",
		nextArrow: "none",
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplaySpeed: 3000,
		autoplayHoverPause: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
