$(function() {
	$("#slider4").responsiveSlides({
		auto : true,
		pager : true,
		nav : true,
		speed : 500,
		namespace : "callbacks"
	});
});

jQuery(document).ready(
		function($) {
			$(".scroll").click(function(event) {
				event.preventDefault();
				$('html,body').animate({
					scrollTop : $(this.hash).offset().top
				}, 1000);
			});
			$(".nav a").click(function(event) {
				event.preventDefault();
				$('html,body').animate({
					scrollTop : $(this.hash).offset().top
				}, 1000);
			});
			const items = [ 'rotateIn', 'flipInX', 'lightSpeedIn', 'rotateIn',
					'rollIn', 'zoomIn', 'slideInUp', 'bounceInUp', 'pulse',
					'rubberBand', 'shake', 'headshake', 'jackInTheBox',
					'flash', 'swing', 'fadeInUpBig', 'rotateInDownLeft',
					'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
					'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp',
					'bounceIn', 'bounceInDown', 'bounceInLeft',
					'bounceInRight', 'bounceInUp' ];
			$(".logo h1").addClass("animated "+ items[Math.floor(Math.random() * items.length)]);
			$(".logo span").addClass("animated "+ items[Math.floor(Math.random() * items.length)]);
			$('.banner-bg').animate({opacity : 1}, 2000);
			$(".nav a").addClass("animated slideInDown");
			const subscribeForm = $(".newsletter form");
			subscribeForm.submit(function(event) {
				event.preventDefault();
				const input = $('input[type="email"]', subscribeForm);
				const val = input.val();
				if (val.trim() == '') {
					const message = "Vous devez entrer votre email";
					alert(message, function() {
						input.focus();
					});
					return false;
				}
				$.ajax({
					url : subscribeForm.attr('action'),
					type : 'POST',
					data : subscribeForm.serialize()
				}).done(function(data) {
					$("input[type=text]",subscribeForm).val("");
					alert("votre email a &edot;t&edot; bien enregistr&edot;.");
				}).fail(function(data) {
					alert("erreur lors de l'abonnement.");
				});
			});
});
const contactForm = $(".contact form");
contactForm.submit(function(event) {
	event.preventDefault();
	var valid = true;
	$('input,textarea', contactForm).each(function(index, element) {
		const val = $(element).val();
		if(val.trim() == '') {
			const message = $(this).attr("data-info");
			alert(message, function() {
				$(element).focus();
			});
			return valid = false;
		}
	});
	if(!valid) return valid;
	$.ajax({
		url : contactForm.attr('action'),
		type : 'POST',
		data : contactForm.serialize()
	}).done(function(data) {
		alert("votre message a &edot;t&edot; bien envoy&edot;.");
		$("input[type=text],input[type=email],textarea", contactForm).val("")
	}).fail(function(data) {
		alert("erreur lors de l'envoi du message.");
	});
});