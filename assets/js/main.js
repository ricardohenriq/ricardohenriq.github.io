$(document).ready(function(){
	$("#conhecimentos").accordion({heightStyle:'content'});
	$("#aprender").accordion({heightStyle:'content'});
});

function stripTags(str){
    return str.replace(/<\/?[^>]+>/gi, '');
}

function validateContactForm(){
	var Name = document.getElementById("nome").value;
	name = stripTags(name);
	var email = document.getElementById("email").value;
	email = stripTags(email);
	var subject = document.getElementById("assunto").value;
	subject = stripTags(subject);
	var description = document.getElementById("desc").value;
	description = stripTags(description);
	return {
		Name:name,
		Email:email,
		Subject:subject,
		Description:description
	};
}

function sendMail(){
	var formValues = validateContactForm();
	
	emailjs.send("gmail","basic_template",{
		Name: formValues.Name, 
		Email: formValues.Email,
		Subject: formValues.Subject,
		Description: formValues.Description
		})
	.then(
		function(response) {
			alert('Email Enviado!');
		}, 
		function(error) {
			alert('Houve um Erro, envie diretamente pelo email disponibilizado!');
		}
	);
}

$("#contact-form-email").click(function(){
	sendMail();
	return false;
});

$("#site-pessoal-imagens").click(function(){
    var urls = [
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/conhecimentos.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/atualizar-responsivo.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/contato-responsivo.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/experiencia.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/sobre-mim.png'
    ];
	getGallery(urls);
});

$("#mybanners-imagens").click(function(){
	var urls = [
		'http://ricardohenriq.github.io/assets/images/projetos/mybanners/index.png',
		'http://ricardohenriq.github.io/assets/images/projetos/mybanners/send-banner.png',
		'http://ricardohenriq.github.io/assets/images/projetos/mybanners/terms-of-use.png'
	];
	getGallery(urls);
});

$("#multitools-imagens").click(function(){
	var urls = [
		'http://ricardohenriq.github.io/assets/images/projetos/multitools/index.png',
		'http://ricardohenriq.github.io/assets/images/projetos/multitools/ascii-art.png'
	];
	getGallery(urls);
});

$("#cloudtags-imagens").click(function(){
	var urls = [
		'http://ricardohenriq.github.io/assets/images/projetos/cloudtags/index.png',
		'http://ricardohenriq.github.io/assets/images/projetos/cloudtags/banners.png',
		'http://ricardohenriq.github.io/assets/images/projetos/cloudtags/send-link.png'
	];
	getGallery(urls);
});

$("#compras007-imagens").click(function(){
	var urls = [
		'http://ricardohenriq.github.io/assets/images/projetos/compras007/pagina-login.png',
		'http://ricardohenriq.github.io/assets/images/projetos/compras007/pagina-inicial.png',
		'http://ricardohenriq.github.io/assets/images/projetos/compras007/pagina-pedidos.png',
		'http://ricardohenriq.github.io/assets/images/projetos/compras007/pagina-editar-pedido.png'
	];
	getGallery(urls);
});

$("#fastmove-imagens").click(function(){
	var urls = [
		'http://ricardohenriq.github.io/assets/images/projetos/fast-move/principal.png',
		'http://ricardohenriq.github.io/assets/images/projetos/fast-move/registro.png'
	];
	getGallery(urls);
});

function getGallery(urls){
	$.fancybox(urls,{
		'padding':0,
		'transitionIn':'none',
		'transitionOut':'none',
		'type':'image',
		'changeFade':0
	});
}

var _gaq = [['_setAccount', 'UA-63633330-1'], ['_trackPageview']];
(function(d, t){
	var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://www.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));
