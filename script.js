
const navbar = document.getElementById('nav');
const btnMenu = document.getElementById('menu');
const btnClose = document.getElementById('close');
const header = document.querySelector('header'); 
const body = document.getElementsByTagName('body');
const navLinks = navbar.querySelectorAll('.nav-link');
const overlay = document.getElementById('overlay');
const formError = document.getElementById('form_error');

// PARA ABRIR NAVBAR
btnMenu.addEventListener('click', () => {

    navbar.classList.toggle('right-0');
    btnMenu.classList.toggle('hidden');
    btnClose.classList.remove('hidden');

    overlay.classList.remove('hidden');

    document.body.style.overflow = 'hidden';

    
});

// PARA CERRAR NAVBAR
btnClose.addEventListener('click', () => {

    navbar.classList.toggle('right-0');
    btnMenu.classList.toggle('hidden');
    btnClose.classList.toggle('hidden');

    overlay.classList.add('hidden');

    document.body.style.overflow = 'auto';

});

// PARA CERRAR NAVBAR AL PULSAR UN ENLACE
navLinks.forEach(link => {
    link.addEventListener('click', () => {

        navbar.classList.remove('right-0');
        btnMenu.classList.remove('hidden');
        btnClose.classList.add('hidden');

        overlay.classList.add('hidden');
        
        document.body.style.overflow = 'auto';
    });
});

// PARA MOSTRAR OVERLAY AL ABRIR NAVBAR Y CERRAR NAVBAR AL HACER CLICK EN ÉL
overlay.addEventListener('click', () => {

    navbar.classList.remove('right-0');
    btnMenu.classList.remove('hidden');
    btnClose.classList.add('hidden');
    
    overlay.classList.add('hidden');
    
    document.body.style.overflow = 'auto';
});

// PARA OCULTAR HEADER CUANDO SE HAGA SCROLL VERTICAL
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Hacia arriba
        header.classList.remove('-top-20');
        header.classList.add('top-0');
    } else {
        // Hacia abajo
        header.classList.remove('top-0');
        header.classList.add('-top-20');
    }

    prevScrollPos = currentScrollPos;
});

// USO DE EMAILJS PARA RECIBIR LOS CORREOS DESDE EL FORM DE CONTACTO
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Inicializo EmailJS
      emailjs.init("-iunfa2U5yEkGGZoF");
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
    });
});

// VALIDACION DEL FORMULARIO
document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name === '' || subject === '' || message === '') {
                event.preventDefault();
                formError.innerHTML = '<p>Please, fill in all the fields of the form.</p>';
            } else {
                const templateParams = {
                    to_name: "Destinatario",
                    from_name: name,
                    email_id: email,
                    subject: subject,
                    message: message,
                };

                emailjs.send("service_f1rai6f", "template_gw9op49", templateParams).then(
                    function (response) {
                        swal("Form sent successfully!","I will contact you immediately", "success");
                        form.reset();
                    },
                    function (error) {
                        swal("Has been a error!","Try again later, i'm sorry! :(", "error");
                    }
                );
            }

        });
});