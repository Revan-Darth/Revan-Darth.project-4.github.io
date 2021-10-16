$(document).ready(function(){

	$('.features__link').click(function(tabs){ // кнопки на которые будем нажимать
		tabs.preventDefault();
		$('.features__link').removeClass('features__link--active');
		$('.features__content').removeClass('features__content--active');
	$(this).addClass('features__link--active');
		$($(this).attr('href')).addClass('features__content--active');
	});
		$('.features__link:first').click();

		$('.features__descr-click').click(function(){ // на какой класс (кнопку) будем нажимать
		$(this).toggleClass('active').next().slideToggle(300);
		$('.features__img--server').toggleClass('active');
	});

		$('.menu__burger').click(function(event){
		$('.menu__burger, .menu__adaptive').toggleClass('active');
	});
});