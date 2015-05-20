// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	var r = 1;
	var aumento1 = 0;
	var aumento2 = 0;
	var aumento3 = 0;
	var aumento4 = 0;
	
	$('#uno').on('click', function(){
		aumento1 = aumento1 + r;
		$('#resultado_1').text(aumento1)
		});
	
	$('#dos').on ('click', function(){
		aumento2 = aumento2 + r;
		$('#resultado_2').text(aumento2)
	});
	
	$('#tres').on ('click', function(){
		aumento3 = aumento3 + r;
		$('#resultado_3').text(aumento3)
	});
	
	$('#cuatro').on ('click', function(){
		aumento4 = aumento4 + r;
		$('#resultado_4').text(aumento4)
	});
		 
//}); 
});


