
$(document).ready(function() {
	Body = $('html, body');
	$('.card, nav .container a').on('mouseover' , function(e){
		x = e.pageX -  $(this).offset().left,
		y = e.pageY -  $(this).offset().top;
		
		$(this).find('span').css({top: y, left: x});
	})
	
	$('.card, nav .container a').on('mouseleave' , function(e){
		x = e.pageX -  $(this).offset().left,
		y = e.pageY -  $(this).offset().top;
		
		$(this).find('span').css({top: y, left: x});
	})
	
	$('.container_cards').on('click' , function(e){
	$('.card').mouseleave();
	})
	
	
	var slider = $('#autoWidth').lightSlider({
        autoWidth:false,
		auto:true,
        loop:true,
		item: 5,
		controls: false,
		pauseOnHover: true,
		responsive: [
      {
        breakpoint: 1200,
        settings: {
          item: 4
        }
      }, 
	  {
        breakpoint: 900,
        settings: {
          item: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          item: 3
        }
      },
	  {
        breakpoint: 600,
        settings: {
          item: 2
        }
      },
	  {
        breakpoint: 450,
        settings: {
          item: 1
        }
      }
    ]
        
    });  
	
	
	$('#slideanterior').on('click', function () {
    slider.goToPrevSlide();
	});
	$('#slideproximo').on('click', function () {
		slider.goToNextSlide();
	});
	
	
	
	var behavior = function (val) {
					return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
				},
				options = {
					onKeyPress: function (val, e, field, options) {
						field.mask(behavior.apply({}, arguments), options);
					}
				};

				$('#telefone').mask(behavior, options);
});
	//ready --  fim
	
	
	$(window).bind("load", function(){
		$('.carregando_div').fadeOut(function(){
			$(this).remove();
			Body.removeClass('carregando');
		});
		
   
	});
	
	$(window).bind("resize", function(){
		if($('.hamburger-menu').hasClass("aberto") && $(window).width() > 850){
			$('.hamburger-menu').click();
		}
		
	});
	
	//scrolls
	
	const translate = document.querySelectorAll(".translate");
	const big_title = document.querySelector(".big-title");
	const header = document.querySelector("header");
	const shadow = document.querySelector(".shadow");
	const content = document.querySelector(".content");
	const section = document.querySelector("section");
	const image_container = document.querySelector(".imgContainer");
	const opacity = document.querySelectorAll(".opacity");
	const border = document.querySelector(".border");

	let header_height = header.offsetHeight;
	let section_height = section.offsetHeight;
	
	$(window).scroll(function() {
		var currentScroll = $(window).scrollTop();
		
		
		if (currentScroll >= 300) {
			if($('#listaservicos').is(":hidden")){
				$('.irparatopo').css('display', 'block');
			}
			
		}
		else{
			$('.irparatopo').css('display', 'none');
		}
		if($(window).width() > 850){
		if(currentScroll > $('header').outerHeight()/2){
			$('nav').addClass('navfixo');
		}
		if(currentScroll == 0 && $('nav').hasClass("navfixo")){
			$('nav').removeClass('navfixo');
		}
		}
		
		
		
		let sectionY = section.getBoundingClientRect();
		
		translate.forEach(element => {
			let speed = element.dataset.speed;
			element.style.transform = `translateY(${currentScroll * speed}px)`;
			
		});

		opacity.forEach(element => {
			var opacity_new = currentScroll / (sectionY.top + section_height);
			if(opacity_new >= 0){
			element.style.opacity = opacity_new;
			}
			else{
				element.style.opacity = 1;
			}
		})

		big_title.style.opacity = - currentScroll / (header_height / 2) + 1;
		shadow.style.height = `${currentScroll * 2 + 300}px`;
		
	});
	//scrolls
	
	
	//ir para o topo
	$(document).on('click','.irparatopo',function(){
		Body.animate({ scrollTop: 0 }, 'slow');
        return false; 
		});
	//ir para o topo
	
	$(document).on('click','.hamburger-menu',function(){
		if($(this).hasClass("aberto")){
			$(this).removeClass("aberto");
			$('.menu').removeClass("aberto");
			$('.hamburger-menu').removeAttr('style');
			$('header, section, #banner, .container_cards, .parceiros, .contato, footer, .copyright, .irparatopo, .social').removeAttr('style');
			if($(window).width() <= 850 && voltaScroll != 0){
				Body.scrollTop(voltaScroll);		
			}
			
		}
		else{
			
			$(this).addClass("aberto");
			voltaScroll = $(window).scrollTop();
			$('.menu').addClass("aberto");
			$('nav').removeClass("navfixo");
			/* $('.menu').css({'display' : 'flex', 'width': window.innerWidth-$(".hamburger-menu").offset().left}); */
			if($(window).width() > 850){
			
			/* $('.hamburger-menu').offset({ left: $('.menu').offset().left }); */
			$('.hamburger-menu').css({'position' : 'absolute', 'right' : '3rem'});
			}
			
			if($(window).width() <= 850){
			$('section, #banner, .container_cards, .parceiros, .contato, footer, .copyright, .irparatopo, .social').css({'display' : 'none'});
			$('header').css({'height':$('nav').outerHeight()});
			}
			
		}
		
	});
	
	
	$(document).on('click','a[sessao]',function(){
		var sessao = $(this).attr('sessao');
		var alturanav = $('nav').outerHeight();
		if($(this).parent().hasClass('menu')){
			$('.hamburger-menu').click();
		}
		Body.animate({ scrollTop: $('.'+sessao).offset().top - alturanav}, 'slow');
		
	});
	
	
	$(document).on('mouseup',function(e){
		
		if($('.hamburger-menu').hasClass("aberto")){
				var container = $('.menu, .hamburger-menu');
					if (!container.is(e.target) && container.has(e.target).length === 0) 
					{
						$('.hamburger-menu').click();
					}
				}
		
   	});
	
	$(document).on('click','.selectservicos',function(){
				voltaScroll = $(window).scrollTop();
				$('.irparatopo').css('display', 'none');
				Body.css('background', 'rgb(42,47,48)');
				$('div, section, header, footer').not('#listaservicos').hide();
				$('#listaservicos').css({'display' : 'flex'});
				$('#listaservicos').find('*').show();
				if($('.servicos div.ativo').length){
				Body.scrollTop( $('.servicos div.ativo').offset().top);
				}
				else{
					window.scrollTo(0, 0);
				}
	});
	
	$(document).on('click','.servicos #servico',function(){
		var selecionado = $(this).text();
		Body.css('background', 'rgb(255,255,255)');
		$('.servicos div').removeClass('ativo');
		$(this).addClass('ativo');
		$('.selectservicos servico').text(selecionado);
		if($(window).width() <= 1024){
			$('div, section, header, footer').not('#listaservicos').show();	
		}
		else{
			$('div, section, header, footer').not('#listaservicos, .hamburger-menu').show();
		}
		$('#listaservicos').css({'display' : 'none'});
		$('#listaservicos').find('*').hide();
		Body.scrollTop(voltaScroll);
		$('#buscaservico').val('');
		$(".selectservicos, label[for='servico']").removeAttr("style");
		$("label[for='servico'] b").remove();
		
	});
	
	
	$(document).on('click','.contato .servicos h2',function(){
		Body.css('background', 'rgb(255,255,255)');
		if($(window).width() <= 1024){
			$('div, section, header, footer').not('#listaservicos').show();	
		}
		else{
			$('div, section, header, footer').not('#listaservicos, .hamburger-menu').show();
		}
		$('#listaservicos').css({'display' : 'none'});
		$('#listaservicos').find('*').hide();
		Body.scrollTop(voltaScroll);
		$('#buscaservico').val('');
		$(".selectservicos, label[for='servico']").removeAttr("style");
		$("label[for='servico'] b").remove();
		
	});
	
	
	$(document).on('blur','.contatoin div input',function(){
		if($(this).val() != "" && !$(".carrega_msg").length){
			$("label[for='"+$(this).attr('id')+"'] b").remove();
			$("label[for='"+$(this).attr('id')+"']").removeAttr("style");
			$(this).removeAttr("style");
		}
		
	});
	
	$(document).on('click','.contato span',function(){
		var texto = $(this).text();
		if(texto == "Enviar"){
			var nome = $("#nome").val();
			var email = $("#email").val();
			var telefone = $("#telefone").val();
			var servico = $('.selectservicos servico').text();
			var testaremail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
			$("label b").remove();
			$("label, input, .selectservicos").removeAttr("style");
			if(nome == ""){
				$("label[for='nome']").css({'color':'rgb(250,171,32)'}).append(' <b>- Preencha este campo.</b>');
				$("#nome").css({'border':'4px solid rgb(250,171,32)'}).focus();
			}
			
			else if(email == ""){
				$("label[for='email']").css({'color':'rgb(250,171,32)'}).append(' <b>- Preencha este campo.</b>');
				$("#email").css({'border':'4px solid rgb(250,171,32)'}).focus();
				 
			}
			
			else if(!testaremail.test(email)){
				$("label[for='email']").css({'color':'rgb(250,171,32)'}).append(' <b>- E-mail incorreto!</b>');
				$("#email").css({'border':'4px solid rgb(250,171,32)'}).focus();
				 
			}
			
			else if(telefone == ""){
				$("label[for='telefone']").css({'color':'rgb(250,171,32)'}).append(' <b>- Preencha este campo.</b>');
				$("#telefone").css({'border':'4px solid rgb(250,171,32)'}).focus();
				 
			}
			
			else if(servico == ""){
				$("label[for='servico']").css({'color':'rgb(250,171,32)'}).append(' <b>- Preencha este campo.</b>');
				$(".selectservicos").css({'border':'4px solid rgb(250,171,32)'})
			}
			
			else{
				beforeSend:
				$('.contatoin').prepend('<div class="carrega_msg"></div>');
				$("#nome").blur();
				$("#email").blur();
				$("#telefone").blur();
				$(".contato span").text("Enviando...").prop('disabled',true);
				$.post('sys/enviaemailfaleconosco.php', {email: email, nome: nome, telefone: telefone, servico: servico}, function(x){
					if(x.erro == "1"){
						$('.contatoin').prepend('<div class="avisos">Houve um erro, por favor tente novamente.</div>');
						$(".avisos").delay(2000).fadeOut(function() {
							$(".contato span").text("Enviar").prop('disabled',false);
							$(this).remove();
							$('.carrega_msg').remove();
							
						});
						return false;
					}
					else{
							if(!$(".avisos").length){
							$('.contatoin').prepend('<div class="avisos"></div>');
							}
							$(".avisos").text("Mensagem enviada com sucesso!");
							$(".avisos").delay(2000).fadeOut(function() {
								$(this).remove();
								$(".contato span").text("Enviar").prop('disabled',false);
								$('#nome, #email, #telefone').val('');
								$('.servicos div').removeClass('ativo');
								$('.selectservicos servico').text('');
								$('.carrega_msg').remove();
							});
						
						}
				}, 'jSON').fail(function() { 
						$('.contatoin').prepend('<div class="avisos">Houve um erro, por favor tente novamente.</div>');
						$(".avisos").delay(2000).fadeOut(function() {
							$(".contato span").text("Enviar").prop('disabled',false);
							$(this).remove();
							$('.carrega_msg').remove();
							
						});
					});
				}
		}
		else{return false}
	});
	
	
	//filtrar servicos
	$(document).on('keyup','#buscaservico',function(){
		var value = $(this).val().toLowerCase();
		$('.servicos #servico').filter(function() {
		   $(this).toggle($(this).text().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) > -1)
		
		});
	});	
	//filtrar servicos
