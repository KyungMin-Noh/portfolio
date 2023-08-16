$(document).ready(

  function() { 
    $("html").niceScroll({
		cursorcolor:"#777",
		cursorwidth:5,
		scrollspeed:40,
		cursorborderradius:'0',
		mousescrollstep:40,
		cursoropacitymin:0,
		cursoropacitymax:1,
		background:"#c1c1c1",
		cursorborder:"none",
		autohidemode:false,
		boxzoom:true,
		zindex:99999

	});
  }

);


$(function(){	
	
	$('#gnb .inner_gnb li > a').bind('click',function(e){
		e.preventDefault();
	    var posY = $($(this).attr('href')).position().top;
		$('body,html').stop().animate({'scrollTop':posY},1200, 'easeInOutExpo');
		
		if($(this).parent().hasClass('btn02')){			
			$('body,html').stop().animate({'scrollTop':posY+100},1200, 'easeInOutExpo');
		}else if($(this).parent().hasClass('btn03')){			
			$('body,html').stop().animate({'scrollTop':posY+50},1200, 'easeInOutExpo');
		}else if($(this).parent().hasClass('btn04')){			
			$('body,html').stop().animate({'scrollTop':posY+42},1200, 'easeInOutExpo');
		}else if($(this).parent().hasClass('btn05')){			
			$('body,html').stop().animate({'scrollTop':posY+48},1200, 'easeInOutExpo');
		}

	})






	var s1 = $('#scene01').height();
	var s2 = $('#scene02').height();
	var s3 = $('#scene03').height();
	var s4 = $('#scene04').height();
	var s5 = $('#scene05').height();	
	

	$(window).scroll(function(){ 
		var scrollTop = $(document).scrollTop() ; 
		$('.posNum').text(scrollTop);

		console.log(deltaYnum);

		// mouse wheel
		if(deltaYnum <0){
			console.log('up');
		}else{

			console.log('down');
		}


		/** Scene02 Animation **/
		$('.scene02 .imgs .img06').stop().css({'opacity':((scrollTop-s1+500)*0.005)})	
		$('.scene02 .imgs .img07').stop().css({'opacity':((scrollTop-s1+450)*0.005)})	
		$('.scene02 .imgs .img08').stop().css({'opacity':((scrollTop-s1+400)*0.005)})	
		$('.scene02 .imgs .img09').stop().css({'opacity':((scrollTop-s1+350)*0.005)})	
		$('.scene02 .imgs .img10').stop().css({'opacity':((scrollTop-s1+300)*0.005)})	
		$('.scene02 .imgs .img11').stop().css({'opacity':((scrollTop-s1+250)*0.005)})	
		$('.scene02 .imgs .img12').stop().css({'opacity':((scrollTop-s1+200)*0.005)})	
		$('.scene02 .imgs .img13').stop().css({'opacity':((scrollTop-s1+200)*0.005)})	







		/*
		if (scrollTop >= 145) { 
			$('#header').css({'position':'fixed','top':'-145px'});
		}else{		
			$('#header').css({'position':'absolute','top':'0'});
		}
		*/

	});




});