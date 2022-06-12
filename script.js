function chamar_api(){
	fetch('https://dog.ceo/api/breeds/image/random')
	  .then(response => response.json())
	  .then(data => exibir_imagem(data));
}

function exibir_imagem(data){
	document.getElementById("img").src = data.message;
}
