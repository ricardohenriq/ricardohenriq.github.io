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