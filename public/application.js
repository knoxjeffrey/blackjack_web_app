$(document).ready(function() {
	
	if (window.location.pathname == '/') {
		$('#restart').hide()
	}
	
	$(document).on('click', "#hit_button .form-group button", function() {
		$.ajax({
			type: 'POST',
			url: '/blackjack/player_hit'
		}).done(function(msg) {
			$('#blackjack').replaceWith(msg);
		});
		return false;
	});
	
	$(document).on('click', "#stay_button .form-group button", function() {
		$.ajax({
			type: 'POST',
			url: '/blackjack/player_stay'
		}).done(function(msg) {
			$('#blackjack').replaceWith(msg);
		});
		return false;
	});
	
});