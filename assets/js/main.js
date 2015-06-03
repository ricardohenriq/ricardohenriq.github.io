$(document).ready(function(){
	$("#conhecimentos").accordion({heightStyle:'content'});
	$("#aprender").accordion({heightStyle:'content'});
});

function sendMail(){
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var assunto = document.getElementById("assunto").value;
	var desc = document.getElementById("desc").value;
	var body = '<strong>Nome: </strong>'+nome+'<br />'+
			   '<strong>Email: </strong>'+email+'<br />'+
			   '<strong>Assunto: </strong>'+assunto+'<br />'+
			   '<strong>Descição: </strong>'+desc;
	
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

$("#site-pessoal-imagens").click(function(){
    $.fancybox([
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/conhecimentos.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/atualizar-responsivo.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/contato-responsivo.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/experiencia.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/sobre-mim.png'
        ],{
		'padding':0,
		'transitionIn':'none',
		'transitionOut':'none',
		'type':'image',
		'changeFade':0
	});
});

$("#parser-imagens").click(function(){
    $.fancybox([
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/conhecimentos.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/atualizar-responsivo.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/contato-responsivo.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/experiencia.png',
		'http://ricardohenriq.github.io/assets/images/projetos/site-pessoal/sobre-mim.png'
        ],{
		'padding':0,
		'transitionIn':'none',
		'transitionOut':'none',
		'type':'image',
		'changeFade':0
	});
});

$("#video-content-imagens").click(function(){
    $.fancybox([
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/index.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/agregador-feeds.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/cadastro.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/feed.png',
		'http://ricardohenriq.github.io/assets/images/projetos/video-content/parceiros.png'
        ],{
		'padding':0,
		'transitionIn':'none',
		'transitionOut':'none',
		'type':'image',
		'changeFade':0
	});
});

var _gaq = [['_setAccount', 'UA-63633330-1'], ['_trackPageview']];
(function(d, t){
	var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://www.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));