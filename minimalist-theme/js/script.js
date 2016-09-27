$(document).ready(function(){
	var check=0;
	$('.button').on('click',function(){
		if(check===0){
			$(".nav-list").addClass('display');
			check=1;	
		}else{
			$(".nav-list").removeClass('display');
			check=0;
		}
	})
	$('nav-list ul li').on('click',function(){
		$(".nav-list").removeClass("display");
	})
});
