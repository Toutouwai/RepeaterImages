(function($) {

	$(function() {

		function initRepeaterImages() {
			$('.RepeaterImages').find('.Inputfields:eq(0)').each(function() {
				$(this).sortable('option', 'axis', false);
				$(this).sortable('option', 'tolerance', 'pointer');
			});
		}

		// Init on DOM ready
		initRepeaterImages();

		// Init on Repeater inputfield reloaded
		$(document).on('reloaded', '.InputfieldRepeater', function() {
			setTimeout(initRepeaterImages, 100);
		});

		// Init on Repeater item add
		$(document).on('opened', '.InputfieldRepeaterItem', function() {
			setTimeout(initRepeaterImages, 100);
		});

	});

}(jQuery));