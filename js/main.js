$(function () {
	var oldScrollTop = 0;
	$(".content-one").addClass("active");
	$(document).scroll(function (e) {
		if (document.body.scrollTop<200) {
			$(".content-one").addClass("active");
		}else{
			$(".content-one").removeClass("active");
		}
	})
})