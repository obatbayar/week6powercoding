$(document).ready(function() {
	$(".button1").on("click", function() {
		$("img").toggle();
	})
	$(".button2").on("click", function() {
		$("img").slideToggle();
	})
	$(".button3").on("dblclick", function() {
		$("img").fadeToggle();
	})
	$(".button4").on("dblclick", function(){
		$('h1').toggleClass("change")
	})
	$(".button5").on("click", function(){
		$("ul").append("<li>TEST</li>")
	})
	$("#hover").hover(function(){
		$("#world").toggleClass("this")
	})
	$(".code").mouseenter(function(){
		$("h2").slideUp();
	})
	$(".purplebox").hover(function(){
		$(this).fadeOut();
	})
	$(".button6").on("click", function(){
		$(".purplebox").fadeIn();
	})
});