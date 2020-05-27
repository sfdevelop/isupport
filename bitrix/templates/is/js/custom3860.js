function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}
$(document).ready(function() {
	$('.modalbox').fancybox({
		afterLoad: function (instance, current) {
			//$(document).on('click', '.filter__title', function () {
			$(".opdebdel").remove();
			if($("#is-order-block2 .pt30").hasClass("hideformaac"))
				$("#is-order-block2 .pt30").removeClass("hideformaac");
		//});
		}
	});

   // $(".modalbox").fancybox();
    /*$("#f_contact").submit(function(){ return false; });
    $("#f_send").on("click", function(){
         
        // тут дальнейшие действия по обработке формы
        // закрываем окно, как правило делать это нужно после обработки данных
        $("#f_contact").fadeOut("fast", function(){
            $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
            setTimeout("$.fancybox.close()", 1000);
        });
    });*/

	//init
	//$('[data-toggle="popover"]').popover();
	$('.is-order-input[name="user_phone"]').mask("+7 (999) 999-99-99");
	$('.callback-phone').mask("+7 (999) 999-99-99");
/*
$.fn.getCursorPosition = function() {
        var input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
}
	
$.fn.setCursorPosition = function(pos) {
	if ($(this).get(0).setSelectionRange) {
		console.log($(this).get(0));
		$(this).get(0).setSelectionRange(pos, pos);
	} else if ($(this).get(0).createTextRange) {
		console.log($(this).get(0));
		var range = $(this).get(0).createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};
$('.is-order-input[name="user_phone"]').click(function() {
		
	console.log($(this).getCursorPosition());
		
		var countCursor = 4;
		var valphone = $(this).val();
		var valphone = replaceAll(valphone, "_", "");
		var valphone = replaceAll(valphone, "-", "");
		var valphone = replaceAll(valphone, "(", "");
		var valphone = replaceAll(valphone, ")", "");
		var valphone = replaceAll(valphone, " ", "");
		
		var countphone = valphone.length;
		countCursor = countphone+2;
		if(countCursor>=7)
			countCursor = countCursor+2;
		if(countCursor>=12)
			countCursor = countCursor+1;
		if(countCursor>=15)
			countCursor = countCursor+1;
		console.log(valphone+"-"+countCursor);
		$(this).setCursorPosition(countCursor);  // set position number
});*/

	/*$('.is-order-input[name="user_phone"]').focus(function() {
		$(this).target.setSelectionRange(0,0);
		console.log( "Handler for .focus() called." );
	});*/

	var _problem_id=0;

	if ($(window).width() < 768){
		$('.is-main-header').append($('.is-main-header .is-slider-layer'));
	}
	
	if ($(".tag_item").length > 0 && $(window).width() > 767) {
		
		setTimeout(function() { 
			maxItemHeight = 0;
			$(".tag_item").each(function(){
				heightItem = $(this).height();
				if (heightItem > maxItemHeight) {
					maxItemHeight = heightItem;
				}
			});
			$(".tag_item").each(function(){
				$(this).css("height", maxItemHeight+40 + "px");
			});
		}, 1000);
	}
	
// --------------------------------------------------------------------------

	$('.menu-mb').on('click', function(event) 
	{
		$('.menu-mb-wrapper').toggleClass('menu-active');
		$(this).toggleClass('active');
		if ($(this).hasClass('active'))
		{
			$('body').css({'overflow':'hidden'});
		}else{
			$('body').css({'overflow':'auto'});
		}
	});
	
	$(".vacancy-item-title-h3").on("click", function(){
		$(this).parent().toggleClass("active");
	})
	
// --------------------------------------------------------------------------	
	
	$('body').click(function(e){
		
		var el = e.target.parentElement;
	
		if (e.target.className != 'is-problems-img' && e.target.className != 'is-problems-text')
		{
			$('.is-problems li .is-problems-img').popover('hide');
			
		} 
		
		if ($(el).parents('.is-iphone-slide').length==0)
		{
			$('.is-iphone-slider .is-iphone-slide-a').popover('hide');
		}
		
	});
	
// -------------------------------------------------------------------------

	/*var gallery_iphone_opt = {"prevNextButtons":true, "pageDots": false, "freeScroll": true, "cellAlign": 'left', "contain": true, 'arrowShape': 'M70,8c0.5,0,1,0.2,1.4,0.6c0.8,0.8,0.8,2,0,2.8L32.8,49.9l38.6,38.7c0.8,0.8,0.8,2,0,2.8c-0.8,0.8-2,0.8-2.8,0l-40-40.1c-0.4-0.4-0.6-0.9-0.6-1.4c0-0.5,0.2-1,0.6-1.4l40-39.9C69,8.2,69.5,8,70,8z'};
	var $gallery_iphone = $('.is-iphone-slider').flickity(gallery_iphone_opt);
	var isFlickity = true;

	if ($('.is-iphone-slider').data('count')>10 || $(window).width() < 768){
		//$('[data-toggle="popover"]').popover();
			$gallery_iphone.flickity(gallery_iphone_opt);
			isFlickity = true;
	}else{
		$gallery_iphone.flickity('destroy');
		isFlickity = false;
	}*/

	/*$gallery_iphone.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
		if ( !cellElement ) {
			return;
		}*/

		//window.location.href = $( cellElement ).data('detail');

	/*});*/






/* 	window.onresize = function(event) {
		if ($(window).width() < 768){
			if (!isFlickity) $gallery_iphone.flickity(gallery_iphone_opt);
			isFlickity = true;
		}else{
			if (isFlickity)	$gallery_iphone.flickity('destroy');
			isFlickity = false;
		}
	}; */

// ========================================================================
	//animation
	/*if ($('.is-animation-appear').length)
	{
		//isScrolledIntoView
		delay = 200;
		var timerx = [];
		
		$.each($('.is-animation-appear:not(.is-animation-appear-active)'),function(index)
		{
			var elem = $(this);
			if (isScrolledIntoView(elem))
			{
				setTimeout(function(){elem.addClass('is-animation-appear-active'); }, delay+=150);
			}
		});
	}*/

// ========================================================================

	$(window).on('scroll', function()
	{
		if ($('.is-prlx').length && $(window).width() > 800){

			var scroll = $(window).scrollTop();
			var pos = $('.is-prlx').offset().top;

			if (Math.abs(scroll-pos) < 1000){

				/*var bgpos = $('.is-prlx').css('background-position').split(" ");*/
				var val = 0;

				if($('.is-prlx').get(0).tagName == 'IMG')
				{
					direction = $('.is-prlx').data('direction');
					val = direction + scroll*0.25;
					$('.is-prlx').css({'bottom': val + 'px'});
				}else
				{
					val = pos - scroll*0.5;
					$('.is-prlx').css({'background-position': '50% ' + val + 'px'});
				}
			}
		}

		/*if ($('.is-animation-appear:not(.is-animation-appear-active)').length)
		{

			delay = 200;
			$.each($('.is-animation-appear:not(.is-animation-appear-active)'), function(index)
			{
				var elem = $(this);
				if (isScrolledIntoView(elem))
				{
					setTimeout(function(){elem.addClass('is-animation-appear-active');}, delay+=150);
				}
			});
		}*/
	});
	
// ========================================================================
	
	// iPhone slider
	
	/*
	$('.is-iphone-slider .is-iphone-slide ').on('click', function()
	{		
		
		var id = $(this).data('id');
		var name = $(this).data('name');
		var detail = $(this).data('detail');
		var el = $(this);
		
		if (_problem_id == 0)
		{
			window.location.href = detail;
		}else{
		
			$('.is-iphone-slider .is-iphone-slide ').find('.is-iphone-slide-a').popover('destroy');
						
			$('.is-iphone-slider .is-iphone-slide ').removeClass('active').addClass('inactive');
			$(el).removeClass('inactive').addClass('active');
			
			$('.is-order-btn').on('click', order_btn_click);
			
			$.ajax({
				method: 'POST',
				url: '/remont/ajax.php',
				data: {id:id, name:name, detail:detail, problem:_problem_id},
				cache: false,
				success:function(data){
				
					if (data){
						var d = JSON.parse(data);
						console.log(d);
						$(el).find('.is-iphone-slide-a').popover({trigger: 'manual',content: d});
						$(el).find('.is-iphone-slide-a').popover('toggle');
						
						$('.is-order-btn').on('click', order_btn_click);
					}
				}
			});
		}
	});
	*/
// ===========================================================================

	// REPAIR

	$('.courier-input').on('click', function() {
		if($(this).is(':checked')) {
			$('.address-input').attr('style', 'display: block;');
			$('.mobile-address .mobile-checkbox').addClass('mobile-checkbox-pos');
		} else {
			$('.address-input').attr('style', 'display: none;');
			$('.mobile-address .mobile-checkbox').removeClass('mobile-checkbox-pos');
		}
	});

	if(window.location.href.match('problem') && $('.is-order-form .is-order-textarea[name="MESSAGE"]').val() == '') {
		$('.is-order-form .is-order-textarea[name="MESSAGE"]').val($('.service-problem-post .text-center h1').html());
	}

	$('.problem-item-btn').on('click', function() {
		$('.is-order-form .is-order-input[name="user_model"]').val($(this).data('service'));

		$('html, body').animate({
			scrollTop: $('#is-order-block ').offset().top - 50
		}, 700);
	});

	// problems	
	/*
	$('.is-problems li ').on('click', function()
	{
		_problem_id = $(this).data('id');				

		$(this).find('.is-problems-img').popover('toggle');
		$('.is-problems li ').not(this).find('.is-problems-img').popover('hide');

		if ($(this).hasClass('active')){
			$('.is-problems li').removeClass('inactive active');
			_problem_id = 0;
		}else{
			$('.is-problems li').removeClass('active').addClass('inactive');
			$(this).removeClass('inactive').addClass('active');
		}

	});
	*/
	
	$('.is-problems.is-inner li ').on('click', function()
	{
		var flag = 0, loc;
		var element    = $(this);
		var problem_id = element.data('id');
		var product_id = element.data('product-id');
			
			problem_id = problem_id.toString();
			//console.log(_problem_id);
			
		var	el = $(this).find('.is-problems-img');
		
		$('.is-problems.is-inner li .is-problems-img').popover('destroy');
		$('.service-price-list .service-item').removeClass('active');
		
		// count of service item
		$('.service-price-list .service-item').each(function()
		{
			var arr_id = $(this).data('problems_id');
				arr_id = arr_id.toString().split(',');
				
			if ($.inArray(problem_id, arr_id) >= 0)
			{
				flag++;
				$(this).addClass('active');
				loc = $(this);
			}
		});
		
		if (flag == 1)
		{
			$('html, body').animate({
				scrollTop: loc.parent('.service-price-block-content').parent('.service-price-block').offset().top - 60
			}, 700);
		}else
		if (flag > 1){
			$.ajax({
				method: 'POST',
				url: '/remont/ajax_service.php',
				data: {id:product_id, problem:problem_id},
				cache: false,
				success:function(data){
				
					if (data){
						var d = JSON.parse(data);
					
						$(el).popover({trigger: 'manual',content: d});
						$(el).popover('toggle');
						
						$('.is-pop-link').on('click', function()
						{
							$('html, body').animate({
									scrollTop: $('.service-item.active').parent('.service-price-block-content').parent('.service-price-block').offset().top - 60
								}, 700);
						});
					}
				}
			});		
		}
	});
	
	
	//order button
	$('.service-price-list .service-item-btn').click(function()
	{
		var product_name = $(this).data('product');
			
		var service_title= $(this).parent('.service-item').find('.service-item-content').find('.service-item-text').find('.service-item-title').text();
		
		$('.is-order-form .is-order-input[name="user_model"]').attr('placeholder', '');
		$('.is-order-form .is-order-input[name="user_model"]').val(product_name);
		$('.is-order-form .is-order-textarea').val($('.is-order-form .is-order-textarea').val() + '- ' + service_title + '\n');
		
		$('html, body').animate({
			scrollTop: $('#is-order-block ').offset().top - 50
		}, 700);
	});

	$('.is-order-form .is-order-input[name="user_model"]').change(function() {
		if($(this).val() == '') {
			$(this).attr('placeholder', 'Модель телефона')
		}else {
			$(this).attr('placeholder', '')
		}
	});

	$('.is-order-form .is-order-input[name="user_phone"]').change(function() {
		if($(this).val() == '') {
			$(this).attr('placeholder', 'Контактный телефон')
		}else {
			$(this).attr('placeholder', '')
		}
	});

	// collapsible service item block
	$('.service-block-collapse').on('click', function()
	{
		$('.service-price-block-content[data-id=' + $(this).data('id') + ']').slideToggle();
		text = $(this).data('text');
		$(this).data('text', $(this).text());
		$(this).text(text);
	});	

	var startTime = new Date();

	$('.is-order-form').on('submit', function() {
		endTime = new Date();
		if((endTime - startTime) < 10000) return false;
	});	


// ===========================================================================

	// MODDING
	
	var overflag = false;
	
	$('.is-modding-select-colors .is-modding-color').click(function()
	{
		$('.is-modding-select-colors .is-modding-color').removeClass('active');
		$(this).addClass('active');
		
		$('#is-phone-color').text($(this).data('color'));
		$('.is-modding-phones > img').attr('src', '/images/modding/color-iphone-' + $(this).data('id') + '.jpg');
		$('.is-order-input[name="MESSAGE"]').val($(this).data('color'));
	});
	
	/*$('.is-modding-select-colors .is-modding-color').on('mouseover',function()
	{
		overflag = true;
		var thisid = $(this).data("id");
		
		$('#is-phone-color').text($(this).data('color'));
		// $('.is-modding-clone img').hide();
		// $('.is-modding-clone img[data-id=' + thisid + ']').show();
		
		$('.is-modding-clone img[data-id=' + thisid + ']').addClass('active');
		
		setTimeout(function()
		{ 
		$('.is-modding-helper img').remove();
		$('.is-modding-helper').append('<img src="/images/modding/color-iphone-' + thisid + '.jpg" />');
		}, 1000);

	});*/

	/*$('.is-modding-select-colors .is-modding-color').on('mouseout',function()
	{
		overflag = false;
		$('.is-modding-clone img').removeClass('active');
		
		//-----------------------------------------
		setTimeout(function()
		{ 
			$('.is-modding-helper img').fadeOut();
			if (overflag == false){
				$('#is-phone-color').text($('.is-modding-select-colors .is-modding-color.active').data('color'));
			}
			
		}, 1000);
	});*/
	
	$('.is-modding-phones img').click(function()
	{
		id = $('.is-modding-select-colors .is-modding-color.active').data('id');
		
		if($('.is-modding-select-colors .is-modding-color.active').is(':last-child'))
		{
			id_next = $('.is-modding-select-colors .is-modding-color:first-child').data('id');
		}else{
			id_next = $('.is-modding-select-colors .is-modding-color.active').next().data('id');
		}
		
		
		$('.is-modding-phones > img').attr('src', '/images/modding/color-iphone-' + id_next + '.jpg');
		$('.is-modding-clone').removeClass('active');	
		setTimeout(function()
		{ 
			$('.is-modding-clone img').hide();
			$('.is-modding-clone img[data-id=' + id_next + ']').show();
			
			$('.is-modding-clone').addClass('active');
		}, 500);
		
		$('.is-modding-select-colors .is-modding-color').removeClass('active');
		$('.is-modding-select-colors .is-modding-color[data-id=' + id_next + ']').addClass('active');
		
		$('#is-phone-color').text($('.is-modding-select-colors .is-modding-color.active').data('color'));
		$('.is-order-input[name="MESSAGE"]').val($('.is-modding-select-colors .is-modding-color.active').data('color'));
	});
	
// ===========================================================================

	// ABOUT PAGE
	if ($('#is-about-diagram').length)
	{
		new Chartist.Line('#is-about-diagram', {
			  labels: ['2014', '8', '9', '10', '11', '12', '2015', '2', '3', '4', '5', '6'],
			  series: [
				{
				  name: 'Посещаемость',
				  data: [475, 706, 1376, 1805, 1815, 1591, 1449, 1470, 1783, 1941, 1491, 1674]
				}
			  ]
			});
			
		var $chart = $('.ct-chart');

		var $toolTip = $chart
		  .append('<div class="tooltip"></div>')
		  .find('.tooltip')
		  .hide();

		$chart.on('mouseenter', '.ct-point', function() {
		  var $point = $(this),
			value = $point.attr('ct:value'),
			seriesName = $point.parent().attr('ct:series-name');
		  $toolTip.html(seriesName + '<br>' + value).show();
		});

		$chart.on('mouseleave', '.ct-point', function() {
		  $toolTip.hide();
		});

		$chart.on('mousemove', function(event) {
		  $toolTip.css({
			left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 12,
			top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
		  });
		});
	}
	
	if($('#is-about-chart').length)
	{
		var data = {
		  labels: ['Bananas', 'Apples', 'Grapes'],
		  series: [20, 15, 40]
		};

		var options = {
		  labelInterpolationFnc: function(value) {
			return value[0]
		  }
		};

		var responsiveOptions = [
		  ['screen and (min-width: 640px)', {
			chartPadding: 30,
			labelOffset: 100,
			labelDirection: 'explode',
			labelInterpolationFnc: function(value) {
			  return value;
			}
		  }],
		  ['screen and (min-width: 1024px)', {
			labelOffset: 80,
			chartPadding: 20
		  }]
		];

		new Chartist.Pie('#is-about-chart', data, options, responsiveOptions);
	}
	
// ================================================================================

	// SHOP FILTER
	
	$('.is-shop-filter-link').click(function()
	{
		if (!$(this).data('status'))
		{
			$('.is-shop-products').removeClass('col-sm-12').addClass('col-sm-8');
			$('.is-shop-products .col-sm-4').addClass('col-sm-6').removeClass('col-sm-4');
			$('.is-shop-products .clearfix').remove();
			$('.is-shop-products .col-sm-6:nth-child(2n)').after('<div class="clearfix"></div>');
			
			if ($(window).width() < 768){
				$('.is-shop-products').before($('.is-shop-filter-wrapper'));
			}else{
				$('.is-shop-products').after($('.is-shop-filter-wrapper'));
			}
			
			$('.is-shop-filter-wrapper').fadeIn(200).removeClass('dn');
			$(this).data('status', 1);
		}else{
			$('.is-shop-products').removeClass('col-sm-8').addClass('col-sm-12');
			$('.is-shop-products .col-sm-6').addClass('col-sm-4').removeClass('col-sm-6');
			$('.is-shop-products .clearfix').remove();
			$('.is-shop-products .col-sm-4:nth-child(3n)').after('<div class="clearfix"></div>');
			$('.is-shop-filter-wrapper').fadeOut(200);
			$(this).data('status', 0);
		}
	});
	
	$('.is-filter-clear').click(function()
	{
		$('.is-shop-filter input[type="checkbox"]').attr('checked', false);
	});
	
// ================================================================================

	// PRODUCT CARD
	
	$('.is-bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		onSliderLoad: function(){
			$('.is-bxslider').animate({
				opacity: 1,
			}, 200);
		}
	});
	
	$('.is-shop-order-btn').click(function()
	{
		var p = $(this).data('product');
		
		$('.is-order-input[name="user_model"]').val(p.price);
		$('.is-order-textarea').val(p.name);
		
	});
	
	$('.is-order-form-ajax').submit(function(e) {      // Обработка отправки данных формы
      e.preventDefault();                  // Сброс стандартного обработчика формы
      formData = $(this).serialize() + "&submit=Отправить";   // Сохраняем массив введенных данных включая значение кнопки "Отправить", без этого компонент Битрикса не примет данные
      target = $(this).data('target');
	  
      $.post(      // Отправим POST запрос серверу
         $(this).attr('action'),   // Текущая страница с дописанным параметром - по нему подключается пустой шаблон с одним #WORK_AREA#
         formData,
         function(response){
			$('body').append('<div class="tmp dn"></div>');
			$('.tmp').html(response);
            //console.log(response);
			
			if ($('.tmp').find('.okText').length){
				$('#' + target + ' .is-response').html($('.tmp').find('.okText'));
				
				$('.is-order-input[name="user_model"]').val('');
				$('.is-order-textarea').val('');
			}
			if ($('.tmp').find('.errortext').length)
				$('#' + target + ' .is-response').html($('.tmp').find('.errortext'));
				
			$('.tmp').remove();
         }
      );

      return false;
   });
   
// =================================================================================================
   
   $('.is-order-btn').on('click', order_btn_click);
   $('.is-remont-status-btn').on('click', status_btn_click);
   
   function order_btn_click(){
		
		if ($('#is-order-block').length)
		{
			
			$('html, body').animate({
				scrollTop: $('#is-order-block').offset().top - 50
			}, 600);
			//console.log('exist');
		}else{
			if ($(window).width() < 768)
			{
				window.location.href = 'order-form/index.html';
			}else
			{
				$('.is-order-input[name="user_model"]').val('');
				$('.is-order-textarea').val('');
				$('#remontOrderModal').modal('show');
			}
		}
		
		if ($(this).data('product'))
		{
			$('.is-order-input[name="user_model"]').val($(this).data('product'));
		}
		if (typeof $(this).data('detail') !== typeof undefined)
		{
			$('.is-order-textarea[name="MESSAGE"]').val($(this).data('detail'));
		}
   }
   
   function status_btn_click(){
	
		if ($('.is-remont-status').length)
		{
			
			$('html, body').animate({
				scrollTop: $('.is-remont-status').offset().top - 180
			}, 600);
			//console.log('exist');
		}else{
			$('#remontStatusModal').modal('show');
		}
		
   }
	
});

function isScrolledIntoView(elem)
{
    var $elem = elem;
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
	
	/* console.log('elemTop ' + elemTop);
	console.log('elemBottom ' + elemBottom);
	console.log('docViewTop ' + docViewTop);
	console.log('docViewBottom ' + docViewBottom); */

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/* function mapinit(ymaps){

 	var xy = $('#YMapsID').data('xy').split(',');
	var pin = $('#YMapsID').data('pin');
	var sizes = $('#YMapsID').data('pinsizes').split(',');
	var shift =  [-sizes[0]/2,-sizes[1]];
	var linecolor = $('#YMapsID').data('linecolor');
	
	//var placemark = new YMaps.Placemark(new YMaps.GeoPoint(xy[1], xy[0]));
	var myPlacemark = new ymaps.Placemark(xy, {}, {
		iconLayout: 'default#image',
		iconImageHref: pin,
		iconImageSize: sizes,
		iconImageOffset: shift
	});
	
	myMap = new ymaps.Map("YMapsID", {
		center: xy,
		zoom: 17
	});




	var myPolyline = new ymaps.Polyline(
		[[55.758514,37.624391],[55.759309,37.625433],[55.7594,37.62554],[55.758792,37.626582]],
		{},
		{
			strokeWidth: 5,
			strokeColor: linecolor,
		}
	);
	
	
	myMap.geoObjects.add(myPlacemark);
	myMap.geoObjects.add(myPolyline);
	myMap.behaviors.disable('scrollZoom'); 
} */
$(document).ready(function() {
	$(".is-header-callback-link").on("click", function(){
		$('#callback-modal').modal('show');
	})
	
	$("#callback-form").submit(function(e){
		var form = $(this);
		var name = $("input[name='callback-name']").val();
		var phone = $("input[name='callback-phone']").val();
		e.preventDefault();
		var data = form.serialize();
		if( phone!="" && name!="" ){
			$.ajax({ 
			   type: 'POST', 
			   url: '/seo/callback-handler.php',
			   data: data, 
			   dataType : "json",
			   beforeSend: function(data) { 
					form.find('input[type="submit"]').attr('disabled', 'disabled'); 
				  },
			   success: function(data){ 
					if (data.status != 1) { 
						form.find('#error-obr-zvon').replaceWith('<span class="err-send">'+data.msg+'</span>');
					} else { // eсли всe прoшлo oк
						gtag('event', 'custom', { 'event_category': 'zakazali_zvonok', 'event_action': document.URL, }); yaCounter15693190.reachGoal('zakazali_zvonok');console.log('zakazali_zvonok');
						$("#callback-modal").modal('hide');
						$("#sent").modal('show');
						setTimeout(function() {
							$("#sent").modal('hide');
						}, 3000);
					}
				 },
			   complete: function(data) { 
					form.find('input[type="submit"]').prop('disabled', false); 
				 }
					  
			 });
		}
		return false;
	});
})

function showAddForm(nameClass, hideClass) {
	$("."+nameClass).show("slow");
	$("."+hideClass).hide();
}

$( function()
{
	if($( 'audio' ).length > 0) {
		$( 'audio' ).audioPlayer();
	}
});



$(document).ready(function(){
	
	if($(".serviceHashLink").length > 0) {
		$(".serviceHashLink").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top - 65;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	}
	
	$("#back-top").hide();
	windowHeight = $(window).height();
	windowWidth = $(window).width();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > windowHeight / 2 && windowWidth > 980) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top').click(function () {
			$('body, html').animate({
				scrollTop: 0
			}, "slow");
			
			return false;
		});
	});

	$("form.addCommentReply").on("submit", function(e){		
		var form = $(this);
		e.preventDefault();
		var data = form.serialize();
		
		$.ajax({ 
		   type: 'POST', 
		   url: '/ajax/addReply.php',
		   data: data, 
		   dataType : "json",
		   beforeSend: function(data) { 
				form.find('input[type="submit"]').attr('disabled', 'disabled'); 
			  },
		   success: function(data){ 
				if (data.status != 1) { 
					form.append('<span class="err-send">'+data.msg+'</span>');
				} else { // eсли всe прoшлo oк
					form.replaceWith('<span class="ok-send">'+data.msg+'</span>');
				}
			 },
			complete: function(data) { 
				form.find('input[type="submit"]').prop('disabled', false); 
			 }
				  
		 });
		 
		return false;
	})
})

