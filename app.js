const homeSection = document.getElementById('homeSection');
const homeImage = document.getElementById('homeImage');

const gestorPagosSection = document.getElementById('gestorPagosSection');
const gestordepagosImage = document.getElementById('gestordepagosImage')

const gestordeamenidadesSection = document.getElementById('gestordeamenidadesSection');
const gestordeamenidadesImage = document.getElementById('calendarioImage')

const gestorIASection = document.getElementById('gestorIASection');
const gestorIAImage = document.getElementById('gestorIAImage')


// Función para alternar el menú móvil
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('open');
}



document.addEventListener('DOMContentLoaded', function() {
    showHome(); // Ejecuta la función cuando la página ha terminado de cargar
});


document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        if (document.querySelector('.nav-menu').classList.contains('open')) {
            toggleMenu();
        }
    });
});


// Función para detectar si la sección está visible en el viewport
function createObserver(section, callback) {
    const options = {
        root: null, // Observa el viewport
        rootMargin: '0px',
        threshold: 0.7 // 50% de la sección visible para ejecutar la función
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
            }
        });
    }, options);

    observer.observe(section);
}

// Función para gestionar el comportamiento del Gestor de Pagos
function showGestorPagos() {
    const homeImage = document.querySelector('#homeImage');
    const gestordepagosImage = document.querySelector('#gestordepagosImage');
    const gestorPagosSection = document.querySelector('#gestorPagosSection');
    const gestordeamenidadesImage = document.querySelector('#gestordeamenidadesImage');
    const controldeaccesosImage = document.querySelector('#controldeaccesosImage');



    // Animar la imagen hacia la derecha
    homeImage.style.transition = 'transform 0.9s ease';
    homeImage.style.transform = 'translateX(250%)';
    gestordepagosImage.style.transform = 'translateX(250%)';
    gestordepagosImage.style.display = 'block';

    gestordeamenidadesImage.style.transition = 'transform 0.9s ease';
    gestordeamenidadesImage.style.transform = 'translateX(-250%)';
    controldeaccesosImage.style.transform = 'translateX(-250%)';


    setTimeout(() => {
        //gestorPagosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        homeImage.style.display = 'none';
        gestordeamenidadesImage.style.display = 'none';
        controldeaccesosImage.style.display = 'none';

        gestordepagosImage.style.transition = 'transform 0.9s ease';
        gestordepagosImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 500);

    setTimeout(() => {
        gestordepagosImage.style.transition = 'transform 2s ease';
        gestordepagosImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 2000);
}

// Función para gestionar el comportamiento de Home
function showHome() {
    const homeImage = document.querySelector('#homeImage');
    const gestordepagosImage = document.querySelector('#gestordepagosImage');
    const homeSection = document.querySelector('#homeSection');
    const controldeaccesosImage = document.querySelector('#controldeaccesosImage');


    // Similar a la función anterior pero para la sección Home
    if (homeImage.style.display === 'none') {
        gestordepagosImage.style.transition = 'transform 0.9s ease';
        gestordepagosImage.style.transform = 'translateX(250%)';
        homeImage.style.transition = 'transform 0.1s ease';
        homeImage.style.transform = 'translateX(250%)';
        homeImage.style.display = 'block';
        controldeaccesosImage.style.transform = 'translateX(-250%)';

        gestorIAImage.style.transform = 'translateX(250%)';


        setTimeout(() => {
            //homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            gestordepagosImage.style.display = 'none';
            controldeaccesosImage.style.display = 'none';

            homeImage.style.transition = 'transform 0.9s ease';
            homeImage.style.transform = 'translateX(1%) rotate(10deg)';
        }, 200);

        setTimeout(() => {
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(-10deg)'; 
        }, 2000); 

        setTimeout(() => {
         
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(10deg)'; 
        }, 4000); 

        setTimeout(() => {
            
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(-10deg)'; 
        }, 6000); 

        setTimeout(() => {
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(10deg)'; 
        }, 8000); 

    } else {
        // Animar la imagen hacia la izquierda (rotación negativa)
        homeImage.style.display = 'block';
        homeImage.style.transition = 'transform 2s ease'; // Ajusta la duración según lo que necesites
        homeImage.style.transform = 'rotate(-10deg)'; // Rotar a la izquierda

        setTimeout(() => {
            // Después de 2 segundos, rotar hacia la derecha
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(10deg)'; // Rotar a la derecha
        }, 2000); // Espera 2 segundos para que la primera rotación termine

        setTimeout(() => {
            // Luego de otros 2 segundos, devolverla a su posición original
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(-10deg)'; // Rotar de nuevo a su posición original
        }, 4000); // Espera 4 segundos en total (2 segundos para la primera rotación, 2 para la segunda)

        setTimeout(() => {
            // Después de 2 segundos, rotar hacia la derecha
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(10deg)'; // Rotar a la derecha
        }, 6000); // Espera 2 segundos para que la primera rotación termine


        setTimeout(() => {
            // Luego de otros 2 segundos, devolverla a su posición original
            homeImage.style.transition = 'transform 2s ease';
            homeImage.style.transform = 'rotate(10deg)'; // Rotar de nuevo a su posición original
        }, 8000); // Espera 4 segundos en total (2 segundos para la primera rotación, 2 para la segunda)
    }
}


function showGestorAmenidades () {
    const gestordepagosImage = document.querySelector('#gestordepagosImage');
    const gestordeamenidadesImage = document.querySelector('#gestordeamenidadesImage');
    const controldeaccesosImage = document.querySelector('#controldeaccesosImage');

    const gestordeamenidadesSection = document.querySelector('#gestordeamenidadesSection');

    // Animar la imagen hacia la derecha
    gestordepagosImage.style.transition = 'transform 0.9s ease';
    gestordepagosImage.style.transform = 'translateX(250%)';
    gestordeamenidadesImage.style.transform = 'translateX(-250%)';
    gestordeamenidadesImage.style.display = 'block';
    controldeaccesosImage.style.transform = 'translateX(-250%)';


    setTimeout(() => {
        //gestordeamenidadesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        gestordepagosImage.style.display = 'none';
        controldeaccesosImage.style.display = 'none';

        gestordeamenidadesImage.style.transition = 'transform 0.9s ease';
        gestordeamenidadesImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 500);

    setTimeout(() => {
        gestordeamenidadesImage.style.transition = 'transform 2s ease';
        gestordeamenidadesImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 2000);
}

var onloadCallback = function() {
    grecaptcha.render('recaptcha-container', {
        'sitekey': '6LdViEoqAAAAAHszCZyTd8NRNEUNxCDGcvccT5zW' // Tu clave del sitio
    });
  };
  
  

// Función para gestionar el comportamiento del Gestor de Pagos
function showcontroldeaccesos() {
    const homeImage = document.querySelector('#homeImage');
    const gestordepagosImage = document.querySelector('#gestordepagosImage');
    const controldeaccesosImage = document.querySelector('#controldeaccesosImage');
    const controldeaccesosSection = document.querySelector('#controldeaccesosSection');
    const gestorIAImage = document.querySelector('#gestorIAImage');



    // Animar la imagen hacia la derecha
    homeImage.style.transition = 'transform 0.9s ease';
    homeImage.style.transform = 'translateX(250%)';

    gestordepagosImage.style.transition = 'transform 0.9s ease';
    gestordepagosImage.style.transform = 'translateX(250%)';

    gestorIAImage.style.transition = 'transform 0.9s ease';
    gestorIAImage.style.transform = 'translateX(250%)';


    controldeaccesosImage.style.transform = 'translateX(250%)';
    controldeaccesosImage.style.display = 'block';

    controldeaccesosImage.style.transition = 'transform 0.9s ease';
    controldeaccesosImage.style.transform = 'translateX(-250%)';

    setTimeout(() => {
        //controldeaccesosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        homeImage.style.display = 'none';
        gestordepagosImage.style.display = 'none';
        gestorIAImage.style.display = 'none';

        controldeaccesosImage.style.transition = 'transform 0.9s ease';
        controldeaccesosImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 500);

    setTimeout(() => {
        controldeaccesosImage.style.transition = 'transform 2s ease';
        controldeaccesosImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 2000);
}

function showcontactSection (){
    const contactSection = document.querySelector('#contactSection');



    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

}

function showIA () {
    const homeImage = document.querySelector('#homeImage');
    const gestordepagosImage = document.querySelector('#gestordepagosImage');
    const controldeaccesosSection = document.querySelector('#controldeaccesosSection');
    const gestorIAImage = document.querySelector('#gestorIAImage');

    // Animar la imagen hacia la derecha
    homeImage.style.transition = 'transform 0.9s ease';
    homeImage.style.transform = 'translateX(250%)';

    gestordepagosImage.style.transition = 'transform 0.9s ease';
    gestordepagosImage.style.transform = 'translateX(250%)';

    gestorIAImage.style.transform = 'translateX(250%)';
    gestorIAImage.style.display = 'block';

    gestorIAImage.style.transition = 'transform 0.9s ease';
    gestorIAImage.style.transform = 'translateX(250%)';

    setTimeout(() => {
        //controldeaccesosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        homeImage.style.display = 'none';
        gestordepagosImage.style.display = 'none';
        gestorIAImage.style.transition = 'transform 0.9s ease';
        gestorIAImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 500);

    setTimeout(() => {
        gestorIAImage.style.transition = 'transform 2s ease';
        gestorIAImage.style.transform = 'translateX(1%) rotate(0deg)';
    }, 2000);
}



// Asignar las secciones a observar
document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.querySelector('#homeSection'); // Sección Home
    const gestorPagosSection = document.querySelector('#gestorPagosSection'); // Sección Gestor de Pagos
    const gestordeamenidadesSection = document.querySelector('#gestordeamenidadesSection'); // Sección Gestor de Pagos
    const controldeaccesosSection = document.querySelector('#controldeaccesosSection'); // Sección Gestor de Pagos
    const contactSection = document.querySelector('#contactSection'); // Sección Gestor de Pagos
    const gestorIASection = document.querySelector('#gestorIASection'); // Sección Gestor de Pagos





    // Crear observers para ambas secciones
    createObserver(homeSection, showHome);
    createObserver(gestorPagosSection, showGestorPagos);
    createObserver(gestordeamenidadesSection, showGestorAmenidades);
    createObserver(controldeaccesosSection, showcontroldeaccesos);
    createObserver(contactSection, showcontactSection);
    createObserver(gestorIASection, showIA);



});

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario de manera tradicional

    var response = grecaptcha.getResponse();

    if (!response) {
      alert("Por favor, completa el reCAPTCHA.");
      return; // Si no hay respuesta, no continuar
    }

    // Recolectar los datos del formulario
    const datos = {
        estado: document.getElementById('estado').value,
        cargo: document.getElementById('cargo').value,
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
    };
    const sheetID = "20758fb4-773d-43c9-995b-dcc92cc09071";


    // Enviar los datos a Sheet.best
    const url = `https://sheet.best/api/sheets/${sheetID}/tabs/interesados`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
        showAlert('Pronto te contactaremos', 'success');
    })
    .catch((error) => {
        console.error('Error:', error);
        showAlert('Hubo un error al enviar el formulario.', 'error');
    });
});

function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.textContent = message;

    alertContainer.innerHTML = ''; // Limpiar alertas anteriores
    alertContainer.appendChild(alert);

    alert.style.display = 'block'; // Mostrar alerta

    setTimeout(() => {
        alert.style.display = 'none'; // Ocultar alerta después de unos segundos
    }, 5000); // 5 segundos
}

