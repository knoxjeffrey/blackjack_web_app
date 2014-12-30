$(document).ready(function() {
	
	//hide restart nav on the home page
	if (window.location.pathname == '/') {
		$('#restart').hide();
	}
	
	//hit button ajaxed to prevent complete page reload
	$(document).on('click', "#hit_button .form-group button", function() {
		$.ajax({
			type: 'POST',
			url: '/blackjack/player_hit'
		}).done(function(msg) {
			$('#blackjack').replaceWith(msg);
		});
		return false;
	});
	
	//stay button ajaxed to prevent complete page reload
	$(document).on('click', "#stay_button .form-group button", function() {
		$.ajax({
			type: 'POST',
			url: '/blackjack/player_stay'
		}).done(function(msg) {
			$('#blackjack').replaceWith(msg);
		});
		return false;
	});
	
	//hide input fields in make_bet.erb for quick bet buttons
	$('#oneInput').hide();
	$('#tenInput').hide();
	$('#twentyInput').hide();
	$('#fiftyInput').hide();
	$('#hundredInput').hide();
	
});