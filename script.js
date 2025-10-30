// 1- Crea un botón que muestre un mensaje en consola al hacer clic.
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    console.log('¡Botón clickeado!');
    alert('¡Botón clickeado!');
});

// 2- Haz que un campo de texto cambie su color de fondo al escribir en él.
   const myInput = document.getElementById('myInput');
    myInput.addEventListener('input', function() {
      myInput.style.backgroundColor = 'red';
    });

// Implementa un contador que aumente cada vez que se haga clic en un botón.
// Muestra un mensaje de error si un campo de texto está vacío al enviar un formulario.
// Cambia la posición de un elemento cuando se pase el ratón sobre él.
// Detecta y muestra en la consola la tecla presionada por el usuario.
// Implementa un botón que oculte o muestre un elemento al hacer clic (toggle).
// Crea un campo de selección (dropdown) que actualice un párrafo con la opción seleccionada.
// Implementa un formulario con validación para correos electrónicos.
// Haz un evento que cambie el texto de un botón al hacer clic en él.
