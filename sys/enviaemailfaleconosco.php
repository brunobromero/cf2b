<?php
if(isset($_POST['email']) && isset($_POST['telefone'])){
	
header('Content-Type: text/html; charset=UTF-8');
$deemail = $_POST['email'];
$denome = $_POST['nome'];
$telefone = $_POST['telefone'];
$servico = $_POST['servico'];


include("class.phpmailer.php");
function respostacadastro($email, $nome, $assunto) {
  $mail2 = new PHPMailer;
  $mail2->IsSMTP();
  $mail2->SMTPSecure = 'ssl';
  $mail2->IsHTML(true);
  $mail2->CharSet = 'UTF-8';
  $mail2->From = "contato@cf2b.com.br";
  $mail2->FromName = "Grupo CF2B";
  $mail2->Host       = "mail.cf2b.com.br";
  $mail2->Port       = 465;
  $mail2->SMTPAuth   = true;
  $mail2->Username =   "contato@cf2b.com.br";
  $mail2->Password =   "kPbxsoTRYuEw";
    
  $mail2->AddAddress($email, $nome);
  $mail2->Subject = $assunto;
  $mail2->Body = "<html>
<head>
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
<title>Grupo CF2B</title>
<style>
html, body{
		padding:0px;
		margin:0px;
		overflow-x: hidden;
		overflow-y: auto;
		font-family: 'Lato', Arial, sans-serif;
		position:relative;
}
.logo{
position:relative;
height:140px;
background: url('https://www.cf2b.com.br/img/logo.png');
background-repeat: no-repeat;
background-size:contain;
background-position: center center; 
margin:60px auto;
}
.texto{
position:relative;
text-align:center;
width:100%;
height:auto;
margin:auto;
color:rgba(42,47,48);
}
.texto h1{
width:80%;
margin:auto;
font-size:60px;
font-weight:bold;
}
.texto h2{
width:80%;
margin:auto;
font-size:40px;
font-weight:normal;
}

.texto h3{
width:80%;
margin:15px auto;
font-size:30px;
font-weight:normal;
}

.msgbaixo{
width:100%;
padding:5px;
margin:80px auto 20px;
text-align:center;
color:rgb(184,177,173);
}

@media screen and (max-width:600px){
.texto h1{
margin:auto;
width:90%;
font-size:40px;
}
.texto h2{
margin:auto;
width:90%;
font-size:25px;
}
.texto h3{
margin:5px auto;
width:90%;
font-size:18px;
}
}
</style>
</head>
<body>
<a href=\"https://www.cf2b.com.br/\" target=\"_blank\"><div class=\"logo\"></div></a>
<div class=\"texto\">
<h1>Olá $nome,</h1><h2>Obrigado por entrar em contato.</h2><h3>Retornaremos assim que possível.</h3>
</div>
<div class=\"msgbaixo\">Esse &eacute; um e-mail autom&aacute;tico. N&atilde;o &eacute; necess&aacute;rio respond&ecirc;-lo.</div>
</body>
</html>";
  $mail2->AltBody = "Para ver essa mensagem, use um programa compatível com HTML!";
  if ($mail2->Send()) {
    return "1";
  } else {
    return "0";
  }
}

function avisoemail($email, $nome, $assunto, $telefone) {
  $mail = new PHPMailer;
  $mail->IsSMTP();
  $mail->SMTPSecure = 'ssl';
  $mail->IsHTML(true);
  $mail->CharSet = 'UTF-8';
  $mail->From = $email;
  $mail->FromName = $nome;
  $mail->AddReplyTo($mail->From, $mail->FromName);
  $mail->Host       = "mail.cf2b.com.br";
  $mail->Port       = 465;
  $mail->SMTPAuth   = true;
  $mail->Username =   "contato@cf2b.com.br";
  $mail->Password =   "kPbxsoTRYuEw";
    
  $mail->AddAddress('contato@cf2b.com.br', 'Grupo CF2B');
  $mail->Subject = $assunto;
  $mail->Body = "<html>
<head>
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\">
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
<title>Grupo CF2B</title>
<style>
html, body{
		padding:0px;
		margin:0px;
		overflow-x: hidden;
		overflow-y: auto;
		font-family: 'Lato', Arial, sans-serif;
		position:relative;
}
.logo{
position:relative;
height:140px;
background: url('https://www.cf2b.com.br/img/logo.png');
background-repeat: no-repeat;
background-size:contain;
background-position: center center; 
margin:60px auto;
}
.texto{
position:relative;
text-align:center;
width:100%;
height:auto;
margin:auto;
color:rgba(42,47,48);
}
.texto h1{
width:80%;
margin:auto;
font-size:60px;
font-weight:bold;
}
.texto h2{
width:80%;
margin:auto;
font-size:40px;
font-weight:normal;
}

.texto h3{
width:80%;
margin:15px auto;
font-size:30px;
font-weight:normal;
}

.msgbaixo{
width:100%;
padding:5px;
margin:80px auto 20px;
text-align:center;
color:rgb(184,177,173);
}

@media screen and (max-width:600px){
.texto h1{
margin:auto;
width:90%;
font-size:40px;
}
.texto h2{
margin:auto;
width:90%;
font-size:25px;
}
.texto h3{
margin:5px auto;
width:90%;
font-size:18px;
}
}
</style>
</head>
<body>
<a href=\"https://www.cf2b.com.br/\" target=\"_blank\"><div class=\"logo\"></div></a>
<div class=\"texto\">
<h1>$nome,</h1><h2>gostaria de informações sobre o seguinte serviço:</h2><h3>$servico.<br>Telefone: $telefone</h3>
</div>
<div class=\"msgbaixo\">Esse &eacute; um e-mail autom&aacute;tico. N&atilde;o &eacute; necess&aacute;rio respond&ecirc;-lo.</div>
</body>
</html>";
  $mail->AltBody = "Para ver essa mensagem, use um programa compatível com HTML!";
  if ($mail->Send()) {
    return "1";
  } else {
    return "0";
  }
}

$retorno = array();
$controleaviso =  avisoemail($deemail, $denome, "Mensagem do Site", $telefone, $servico);

if ($controleaviso == "1") {
    $controle =  respostacadastro($deemail, $denome, "Contato Site");
	if ($controle == "1") {
    $retorno['erro'] = '0';
} else {
    $retorno['erro'] = '1';
}
} else {
   	$retorno['erro'] = '1';
}
	$retorno = json_encode($retorno);
	echo $retorno;



	
	} else {
	header('Location: ../index.php');
	}
?>