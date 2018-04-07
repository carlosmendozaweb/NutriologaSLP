//Abrir o cerrar lista del menú al oprimir el círculo que indica el menú
var Lista = document.getElementById('Menu-circle'); //Seleciona el elemento con este ID

Lista.addEventListener('click', function(){ //Cuando haga clic sobre el elemento obtenido
    Lista.classList.toggle('Mostrar'); //Agrega o quita la clase que se solicita
});


//Cerrar lista al oprimir opción del menú
$('.Menu-Item').click(function(){        
    Lista.classList.remove('Mostrar');
});