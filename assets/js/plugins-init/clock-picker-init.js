(function($) {
    "use strict"

    // Clock pickers
    var input = $('#single-input').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    });

    $('.clockpicker').clockpicker({
        donetext: 'Done',
    }).find('input').change(function () {
        console.log(this.value);
    });

	function handleclockpicker(){
		function handlePlacement(){
			if ($(window).width() < 768) {
				return "bottom";
			}else{
				return "left";
			}
		}
		$('.clockpicker-left').clockpicker({
			donetext: 'Done',
			placement: handlePlacement(),
		}).find('input').change(function () {
			console.log(this.value);
		})
		
	}
	handleclockpicker();
    

    $('#check-minutes').on('click',function (e) {
        // Have to stop propagation here
        e.stopPropagation();
        input.clockpicker('show').clockpicker('toggleView', 'minutes');
    });

})(jQuery)