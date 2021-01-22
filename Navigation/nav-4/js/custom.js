

/* navigation menu animation with way points */

$('.nav-animate').waypoint(function(direction) {
	$('.secondary-menu').toggleClass('hide', direction === "down");
	$('.navbar').toggleClass('comeup', direction === "down");
}, {
	offset: '10%'
});
