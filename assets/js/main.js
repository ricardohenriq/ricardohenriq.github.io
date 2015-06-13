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
				'key':'-po7dRSIlB4YoFYevstd_w',
				'message':{
					'from_email':'ricardohenrique996@gmail.com',
					'to':[
						{
							'email':'ricardohenrique1@outlook.com',
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

$("#video-content-imagens").click(function(){
	var urls = [
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/index.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/agregador-feeds.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/cadastro.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/feed.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/parceiros.png'
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