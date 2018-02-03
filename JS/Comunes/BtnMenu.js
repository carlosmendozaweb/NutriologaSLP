var Lista = document.getElementById('Menu-circle'); //Seleciona el elemento con este ID

Lista.addEventListener('click', function(){ //Cuando haga clic sobre el elemento obtenido
    Lista.classList.toggle('Mostrar'); //Agrega o quita la clase que se solicita
})