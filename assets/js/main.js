$(document).ready(function(){
	$("#conhecimentos").accordion({heightStyle:'content'});
	$("#aprender").accordion({heightStyle:'content'});
});

function stripTags(str){
    return str.replace(/<\/?[^>]+>/gi, '');
}

function validateContactForm(){
	var nome = document.getElementById("nome").value;
	nome = stripTags(nome);
	var email = document.getElementById("email").value;
	email = stripTags(email);
	var assunto = document.getElementById("assunto").value;
	assunto = stripTags(assunto);
	var desc = document.getElementById("desc").value;
	desc = stripTags(desc);
	return {
		nome:nome,
		email:email,
		assunto:assunto,
		desc:desc
	};
}

function createContactEmail(formValues){
	var body = '<strong>Nome: </strong>'+formValues.nome+'<br />'+
			   '<strong>Email: </strong>'+formValues.email+'<br />'+
			   '<strong>Assunto: </strong>'+formValues.assunto+'<br />'+
			   '<strong>Descição: </strong>'+formValues.desc;
	return body;
}

function sendToMandrill(body){
	$.ajax({
		type:"POST",
		url:"https://mandrillapp.com/api/1.0/messages/send.json",
		data:{
				'key':'Akj5sUZpdPZ7O3LbpPpSiw',
				'message':{
					'from_email':'albernazassis@gmail.com',
					'to':[
						{
							'email':'albernazassis@gmail.com',
							'name':'Ricardo Henrique',
							'type':'to'
						}
					],
					'subject':'[MandrillJS] Portfolio',
					'html':body
				}
			}
	});
}

function sendMail(){
	var formValues = validateContactForm();
	var body = createContactEmail(formValues);
	sendToMandrill(body);
	alert('Email Enviado!');
}

$("#contact-form-email").click(function(){
	sendMail();
	return false;
});

$("#site-pessoal-imagens").click(function(){
    var urls = [
		'http://ricardohenrique.divshot.io/assets/images/projetos/site-pessoal/conhecimentos.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/site-pessoal/atualizar-responsivo.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/site-pessoal/contato-responsivo.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/site-pessoal/experiencia.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/site-pessoal/sobre-mim.png'
    ];
	getGallery(urls);
});

$("#video-content-imagens").click(function(){
	var urls = [
		'http://ricardohenrique.divshot.io/assets/images/projetos/video-content/index.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/video-content/agregador-feeds.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/video-content/cadastro.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/video-content/feed.png',
		'http://ricardohenrique.divshot.io/assets/images/projetos/video-content/parceiros.png'
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