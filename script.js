//hovering menu
$(document).ready(function() {
	$("#home_nav td, #home_slide_toggle").hover(
		function(){ 
			var style = {
				display: "block",
				margin: "-8px 0px"
			}
			var id = $(this).attr('id').split('-')[1];
			$(".home-" + id).css(style);
			var offset = $(this).offset(); 
			$(".home-"+ id).offset({left: offset.left});
		}, 
		function() {
			var style = {
				display: "none",
			}
			var id = $(this).attr('id').split('-')[1];
			$(".home-" + id).css(style);
		}
	);
});
