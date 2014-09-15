//hovering menu
$(document).ready(function() {
	$("#home_nav td, #home_silde_toggle").hover(
		function(){ 
			var id = $(this).attr('id').split('-')[1];
			var style = {
				display: "inline-block",
				margin: "-8px 0px"
			}
			$(".home-" + id).css(style); }, 
		function() {
			var id = $(this).attr('id').split('-')[1];
			var style = {
				display: "none",
			}
			$(".home-" + id).css(style);
		}
	);
});
