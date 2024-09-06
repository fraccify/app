const propietarioSpan = document.getElementById("propietario");
const domicilioSpan = document.getElementById("domicilio");
const correoSpan = document.getElementById("correo"); // Agregado el span para mostrar el correo
const statusSpan = document.getElementById("status");
const adeudoSpan = document.getElementById("adeudo");
const privadaSpan = document.getElementById("privada");
const perfilSpan = document.getElementById("perfil");

const sectionlogin = document.getElementById("login");
const homeSection = document.getElementById("homeSection");
const paymentHistory2024 = document.getElementById("paymentHistory2024");
const divingresos = document.getElementById("divingresos");
const divamenidades = document.getElementById("divamenidades");
const divpagos = document.getElementById("divpagos");
const divvotaciones = document.getElementById("divvotaciones");

const divliaseguridad = document.getElementById("liaseguridad");
const divliadmin = document.getElementById("liadmin");
const divlimenu = document.getElementById("limenu");


const ene2025Span = document.getElementById("ene2025");
const feb2025Span = document.getElementById("feb2025");
const mar2025Span = document.getElementById("mar2025");
const abr2025Span = document.getElementById("abr2025");
const may2025Span = document.getElementById("may2025");
const jun2025Span = document.getElementById("jun2025");
const jul2025Span = document.getElementById("jul2025");
const ago2025Span = document.getElementById("ago2025");
const sep2025Span = document.getElementById("sep2025");
const oct2025Span = document.getElementById("oct2025");
const nov2025Span = document.getElementById("nov2025");
const dic2025Span = document.getElementById("dic2025");

const ene2024Span = document.getElementById("ene2024");
const feb2024Span = document.getElementById("feb2024");
const mar2024Span = document.getElementById("mar2024");
const abr2024Span = document.getElementById("abr2024");
const may2024Span = document.getElementById("may2024");
const jun2024Span = document.getElementById("jun2024");
const jul2024Span = document.getElementById("jul2024");
const ago2024Span = document.getElementById("ago2024");
const sep2024Span = document.getElementById("sep2024");
const oct2024Span = document.getElementById("oct2024");
const nov2024Span = document.getElementById("nov2024");
const dic2024Span = document.getElementById("dic2024");

const ene2023Span = document.getElementById("ene2023");
const feb2023Span = document.getElementById("feb2023");
const mar2023Span = document.getElementById("mar2023");
const abr2023Span = document.getElementById("abr2023");
const may2023Span = document.getElementById("may2023");
const jun2023Span = document.getElementById("jun2023");
const jul2023Span = document.getElementById("jul2023");
const ago2023Span = document.getElementById("ago2023");
const sep2023Span = document.getElementById("sep2023");
const oct2023Span = document.getElementById("oct2023");
const nov2023Span = document.getElementById("nov2023");
const dic2023Span = document.getElementById("dic2023");

const selectYear = document.getElementById("selectYear");


const divbotonhistorico = document.getElementById("divbotonhistorico");
const divbotonpago = document.getElementById("divbotonpago");
const divbotonreservar = document.getElementById("divbotonreservar");
const divbotonvisitas = document.getElementById("divbotonvisitas");
const divregreso = document.getElementById("divregreso");
const btnenviaringreso = document.getElementById("btnenviaringreso");
const confirmacion = document.getElementById("confirmacion");
const formulario2 = document.getElementById("formulario2");
const segurichat = document.getElementById("segurichat");
const divqr = document.getElementById("divqr");
const iniciodatos = document.getElementById("iniciodatos");
const datoscorrectosvisitas = document.getElementById("datoscorrectosvisitas");
const btnenborrar = document.getElementById("btnenborrar");
const divnuevoregistro = document.getElementById("nuevoregistro");
const confirmarreserca = document.getElementById("confirmarreserca");
const divmisreservas = document.getElementById("divmisreservas");
const divinformes = document.getElementById("informes");
const divlistaresidentes = document.getElementById("divlistaresidentes");
const contenedoradminvotos = document.getElementById("contenedoradminvotos");






informes

var today = new Date().toISOString().split("T")[0];
var loggedIn = true;

const btndcerrarsesion = document.getElementById("cerrarsesion");
const btncerrarsesionadmin = document.getElementById("cerrarsesionadmin");
const tipo3Span = document.getElementById("tipo3");
const namevisita3Span = document.getElementById("namevisita3");
const fechavisita3Span = document.getElementById("fechavisita3");
const domdvisistaSpan = document.getElementById("domdvisista");
const divpagocargado = document.getElementById("pagocargado");
const divseguridad = document.getElementById("seguridad");
const btnvotacion = document.getElementById("btnvotacion");
const divheader = document.getElementById("header");




let checkboxadp = document.getElementById("avisoPrivacidad");
let checkboxrememberMe = document.getElementById("rememberMe");

let condominioInputGuardado = localStorage.getItem('condominioInputGuardado');
let usuarioInputGuardado = localStorage.getItem('usuarioInputGuardado');
let contrasenaInputGuardado = localStorage.getItem('contrasenaInputGuardado');


checkboxadp.addEventListener('click', function() {
    let aceptoAvisoPrivacidad = checkboxadp.checked;
    console.log("Valor actual del checkbox Aviso de Privacidad y terminos y condiciones:", aceptoAvisoPrivacidad);
    
});

checkboxrememberMe.addEventListener('click', function() {
    let rememberMe = checkboxrememberMe.checked;
    console.log("Condominio, Usuario y Contraseña guardadas:", rememberMe);
    
});

function cifrarCorreo(valor) {
    var texto = JSON.stringify(valor);
    var bytes = new TextEncoder().encode(texto);
    var cifrado = btoa(String.fromCharCode.apply(null, bytes));
    return cifrado;
}

import sheetIDs from './sheetIDs.js';

document.addEventListener("DOMContentLoaded", function() {
    // Obtén el formulario
    const formulario = document.getElementById("formulario");

    // Maneja el evento de submit

    if (condominioInputGuardado && usuarioInputGuardado && contrasenaInputGuardado) {
        console.log("Datos de inicio de sesión guardados")

        document.getElementById("condominio").value = condominioInputGuardado;
        document.getElementById("username").value = usuarioInputGuardado;
        document.getElementById("contrasena").value = contrasenaInputGuardado;
        document.getElementById("rememberMe").checked = true;
        document.getElementById("avisoPrivacidad").checked = true;
        

    } else {
        console.log("No hay datos de inicio de sesión guardados")
    }


    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        
    
    
        // Obtén los valores del formulario
        const condominioInput = document.getElementById("condominio").value;
        const usuarioInput = document.getElementById("username").value;
        const usuarioInputCodificado = cifrarCorreo(usuarioInput);
        const contrasenaInput = document.getElementById("contrasena").value;
        const contrasenaInputCodificado = cifrarCorreo(contrasenaInput);

        // Obtén el objeto correspondiente al condominio seleccionado
        const selectedCondominio = sheetIDs[condominioInput];

        // Accede a las propiedades dentro del objeto
        const sheetID = selectedCondominio.sheetID;
        const sheetIDprivada = selectedCondominio.sheetIDprivada;
        const sheetIDubicacion = selectedCondominio.sheetIDubicacion;

        const banco = selectedCondominio.banco;
        const titular = selectedCondominio.titular;
        const cuenta = selectedCondominio.cuenta;
        const clabe = selectedCondominio.clabe;
        const monto = selectedCondominio.monto;
        const preferenceID = selectedCondominio.preferenceID;
        const calles = selectedCondominio.calles;


        document.getElementById('banco').textContent = 'Banco: ' + banco;
        document.getElementById('titular').textContent = 'Titular: ' + titular;
        document.getElementById('cuenta').textContent = 'Cuenta: ' + cuenta;
        document.getElementById('clabe').textContent = 'CLABE: ' + clabe;
        document.getElementById('monto').textContent = 'Monto: ' + monto;

        let script = document.createElement('script');
        script.src = "https://www.mercadopago.com.mx/integrations/v1/web-payment-checkout.js";
        script.setAttribute('data-preference-id', preferenceID);
        script.setAttribute('data-source', 'button');
        
        // Remover cualquier script existente y reemplazarlo
        const mercadoPagoButton = document.getElementById('mercado-pago-button');
        mercadoPagoButton.innerHTML = '';  // Limpiar cualquier script anterior
        mercadoPagoButton.appendChild(script);  // Agregar el nuevo script


        // Verifica si el condominio ha sido seleccionado y si el aviso de privacidad ha sido aceptado
        const aceptoAvisoPrivacidad = checkboxadp.checked;
    
        if (!condominioInput) {
            alert("Por favor, selecciona un condominio.");
            return; // Evita continuar si no se ha seleccionado un condominio
        }
    
        if (aceptoAvisoPrivacidad) {
    
            if (sheetID) {
                if (rememberMe) {
                    localStorage.setItem('condominioInputGuardado', condominioInput);
                    localStorage.setItem('usuarioInputGuardado', usuarioInput);
                    localStorage.setItem('contrasenaInputGuardado', contrasenaInput);
                    console.log("Condominio, Usuario y contraseña se guardarán en localStorage");                    
                }
    

                const urlProp = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}`;

                fetch(urlProp)
                    .then((response) => response.json())
                    .then((data) => {
                        const correosCifrados = data.map((fila) => fila.correo);
                        const indice = correosCifrados.findIndex(
                            (correoCifrado) => correoCifrado === usuarioInputCodificado
                        );
                        
                        if (indice !== -1) {
                            const contraseñasCifradas = data.map((fila) => fila.password);
                            const contraseñaCifrada = contraseñasCifradas[indice];
                            
                            if (contraseñaCifrada === contrasenaInputCodificado) {
                                console.log("Inicio de sesión exitoso");
                                // Aquí puedes continuar con el flujo de inicio de sesión exitoso
            
                                const cliente = atob(data[indice].Cliente);
                                const clientecod = data[indice].Cliente; // Accede directamente al cliente en lugar de usar map
            
                                const domicilio = atob(data[indice].dom); // Accede directamente al domicilio en lugar de usar map
                                const domiciliocod = data[indice].dom; // Accede directamente al domicilio en lugar de usar map
            
                                const status = data[indice].status;
                                const adeudo = data[indice].adeudo;
                                const perfil = data[indice].perfil;

            
                                const clientesinComillas = cliente.replace(/"/g, "");
                                const domiciliosinComillas = domicilio.replace(/"/g, "");
            
                                propietarioSpan.textContent = clientesinComillas;
                                domicilioSpan.textContent = domiciliosinComillas;
                                correoSpan.textContent = usuarioInput; // Muestra el correo ingresado
                                statusSpan.textContent = status;
                                adeudoSpan.textContent = adeudo;
                                privadaSpan.textContent = condominioInput;
                                perfilSpan.textContent = perfil;

                                    
                                sectionlogin.style.display = "none";
                                homeSection.style.display = "block"
                                divheader.style.display = "block";

                                if (perfil.trim() === "Administrador") {
                                    console.log("Eres un administrador")
                                    divliaseguridad.style.display = "block";
                                    divliadmin.style.display = "block";
                                } else if (perfil.trim() === "Seguridad") {
                                    divlimenu.style.display = "none";
                                }

                                //////Registrar inicio de sesión////////

                                const fechaHoraActual = new Date();
                                const fechaHoraFormateada = fechaHoraActual.toLocaleString();

                                const datosreg = {
                                    registro: fechaHoraFormateada,
                                    dom: domicilio,
                                };

                                const urlregistro = `https://sheet.best/api/sheets/${sheetID}/tabs/registros${sheetIDprivada}`;
                                const opciones = {
                                    method: "POST",
                                    headers: {
                                    "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(datosreg), // Corregido aquí
                                };

                                fetch(urlregistro, opciones)
                                    .then((response) => response.json())
                                    .then((data) => {
                                    // Manejar la respuesta de la API si es necesario
                                    })
                                    .catch((error) => {
                                    console.error("Error al enviar datos a la API:", error);
                                });

                                //////Generar Recibo PDF////////

                                document.getElementById("btnreciboene2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibofeb2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibomar2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnreciboabr2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibomay2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibojun2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibojul2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnreciboago2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibosep2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibooct2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibonov2023").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibodic2023").addEventListener("click", generarrecibopdf);

                                document.getElementById("btnreciboene2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibofeb2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibomar2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnreciboabr2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibomay2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibojun2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibojul2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnreciboago2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibosep2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibooct2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibonov2024").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibodic2024").addEventListener("click", generarrecibopdf);

                                document.getElementById("btnreciboene2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibofeb2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibomar2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnreciboabr2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibomay2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibojun2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibojul2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnreciboago2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibosep2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibooct2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibonov2025").addEventListener("click", generarrecibopdf);
                                document.getElementById("btnrecibodic2025").addEventListener("click", generarrecibopdf);
                                
                                document.getElementById("mostradivvotos").addEventListener("click", mostradivvotos);
                                document.getElementById("regresar").addEventListener("click", regresar);
                                document.getElementById("imghome").addEventListener("click", regresar);
                                document.getElementById("divbotonhistorico").addEventListener("click", updatePaymentHistory);
                                document.getElementById("divbotonvisitas").addEventListener("click", ingresos);
                                document.getElementById("btnenviaringreso").addEventListener("click", enviarsdei);
                                document.getElementById("datoscorrectosvisitas").addEventListener("click", confirmacionvyp);
                                document.getElementById("enviarpago").addEventListener("click", enviardatospago);

                                document.getElementById("nuevoregistro").addEventListener("click", nuevoregistro);
                                document.getElementById("confirmarreserca").addEventListener("click", registrarReserva);
                                document.getElementById("misreservsas").addEventListener("click", toggleMisReservas);
                                document.getElementById("divbotonreservar").addEventListener("click", calendario);
                                document.getElementById("divbotonpago").addEventListener("click", redireccionarPagos);
                                document.getElementById("descargarinformes").addEventListener("click", informes);
                                document.getElementById("downloadinforme").addEventListener("click", fungenerarinforme);
                                document.getElementById("mostrarregistroResidentes").addEventListener("click", mostrarresidentes);
                                document.getElementById("agregarvotacion").addEventListener("click", agregarvotacion);


                              

                                var tiempoEspera = 5 * 1000; // 5 minutos en milisegundos
                                var timer; // variable para almacenar el temporizador


                                function desactivarBoton() {
                                    var boton = document.getElementById("btnparaconfirmarreserca");
                                    var boton2 = document.getElementById("generarvisitayqr");
                                    var boton3 = document.getElementById("enviarpago");
                                    boton.disabled = true;
                                    boton2.disabled = true;
                                    boton3.disabled = true;
                                }
                    
                                function activarBoton() {
                                    var boton = document.getElementById("btnparaconfirmarreserca");
                                    var boton2 = document.getElementById("generarvisitayqr");
                                    var boton3 = document.getElementById("enviarpago");
                                    boton.disabled = false;
                                    boton2.disabled = false;
                                    boton3.disabled = false;
                                }
                                
                                ///home///
                                function regresar() {
                                  divvotaciones.style.display = "none";
                                  paymentHistory2024.style.display = "none";
                                  divingresos.style.display = "none";
                                  divamenidades.style.display = "none";
                                  divpagos.style.display = "none";
                                  homeSection.style.display = "block"
                                  divinformes.style.display = "none"
                                  divlistaresidentes.style.display = "none"
                                  contenedoradminvotos.style.display = "none";

                                }

                                //menu 1//
                                function ingresos() {
                                    divvotaciones.style.display = "none";
                                    paymentHistory2024.style.display = "none";
                                    divingresos.style.display = "block";
                                    divamenidades.style.display = "none";
                                    divpagos.style.display = "none";
                                    homeSection.style.display = "none";
                                    divinformes.style.display = "none";
                                    divlistaresidentes.style.display = "none";
                                    contenedoradminvotos.style.display = "none";




                                    const namevisitaSpan = document.getElementById("namevisita").value;

                                    if (!namevisitaSpan || namevisitaSpan === "") {
                                      divnuevoregistro.style.display = "none";
                                    } else {
                                      divnuevoregistro.style.display = "block";
                                    }
                                }

                                ///menu 2//
                                function redireccionarPagos() {
                                    divvotaciones.style.display = "none";
                                    paymentHistory2024.style.display = "none";
                                    divingresos.style.display = "none";
                                    divamenidades.style.display = "none";
                                    divpagos.style.display = "block";
                                    homeSection.style.display = "none"
                                    divinformes.style.display = "none"
                                    divlistaresidentes.style.display = "none"
                                    contenedoradminvotos.style.display = "none";


                                }


                                ///menu 3///
                                function mostradivvotos() {
                                  // Ocultar y mostrar elementos según sea necesario
                                  divvotaciones.style.display = "block";
                                  homeSection.style.display = "none";
                                  paymentHistory2024.style.display = "none";
                                  divingresos.style.display = "none";
                                  divamenidades.style.display = "none";
                                  divpagos.style.display = "none";
                                  divinformes.style.display = "none"
                                  divlistaresidentes.style.display = "none"
                                  contenedoradminvotos.style.display = "none";



                              
                                  const url = `https://sheet.best/api/sheets/${sheetID}/tabs/avotar${sheetIDprivada}`;
                              
                                  fetch(url)
                                      .then((response) => response.json())
                                      .then((data) => {
                                          // Limpiar el contenido del div antes de agregar nuevas tablas
                                          divvotaciones.innerHTML = '';
                              
                                          data.forEach((fila, index) => {
                                              let table = document.createElement('table');
                                              table.className = 'votacion-table';
                                              
                                              // Crear fila para la pregunta
                                              let trPregunta = document.createElement('tr');
                                              let tdPregunta = document.createElement('td');
                                              tdPregunta.colSpan = 2;
                                              tdPregunta.textContent = fila.pregunta;
                                              trPregunta.appendChild(tdPregunta);
                                              table.appendChild(trPregunta);
                              
                                              // Crear fila para las opciones de votación
                                              let trOpciones = document.createElement('tr');
                                              let tdOpciones = document.createElement('td');
                                              tdOpciones.colSpan = 2;
                              
                                              // Asignar IDs únicos a los inputs de radio
                                              const idSi = `votoSi_${index}`;
                                              const idNo = `votoNo_${index}`;
                              
                                              tdOpciones.innerHTML = `
                                                  <label><input type="radio" id="${idSi}" name="voto${index}" value="Si" required> Si</label>
                                                  <label><input type="radio" id="${idNo}" name="voto${index}" value="No" required> No</label>
                                              `;
                                              trOpciones.appendChild(tdOpciones);
                                              table.appendChild(trOpciones);
                              
                                              divvotaciones.appendChild(table);
                              
                                              // Verificar si ya se ha votado antes y deshabilitar los inputs de radio si es asi
                                              verificarVoto(fila.pregunta, idSi, idNo, index);
                                          });
                                      })
                                      .catch((error) => console.error('Error al obtener datos:', error));
                                }

                                ///menu 4//
                                function updatePaymentHistory() {
                                  divvotaciones.style.display = "none";
                                  paymentHistory2024.style.display = "block";
                                  divingresos.style.display = "none";
                                  divamenidades.style.display = "none";
                                  divpagos.style.display = "none";
                                  homeSection.style.display = "none"
                                  divinformes.style.display = "none"
                                  divlistaresidentes.style.display = "none"


                                      
                                  const urlProp = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}`;
                                  fetch(urlProp)
                                    .then((response) => response.json())
                                    .then((data) => {
                                      ene2025Span.textContent = data[indice].ene2025;
                                      feb2025Span.textContent = data[indice].feb2025;
                                      mar2025Span.textContent = data[indice].mar2025;
                                      abr2025Span.textContent = data[indice].abr2025;
                                      may2025Span.textContent = data[indice].may2025;
                                      jun2025Span.textContent = data[indice].jun2025;
                                      jul2025Span.textContent = data[indice].jul2025;
                                      ago2025Span.textContent = data[indice].ago2025;
                                      sep2025Span.textContent = data[indice].sep2025;
                                      oct2025Span.textContent = data[indice].oct2025;
                                      nov2025Span.textContent = data[indice].nov2025;
                                      dic2025Span.textContent = data[indice].dic2025;
                  
                                      ene2024Span.textContent = data[indice].ene2024;
                                      feb2024Span.textContent = data[indice].feb2024;
                                      mar2024Span.textContent = data[indice].mar2024;
                                      abr2024Span.textContent = data[indice].abr2024;
                                      may2024Span.textContent = data[indice].may2024;
                                      jun2024Span.textContent = data[indice].jun2024;
                                      jul2024Span.textContent = data[indice].jul2024;
                                      ago2024Span.textContent = data[indice].ago2024;
                                      sep2024Span.textContent = data[indice].sep2024;
                                      oct2024Span.textContent = data[indice].oct2024;
                                      nov2024Span.textContent = data[indice].nov2024;
                                      dic2024Span.textContent = data[indice].dic2024;
                  
                                      ene2023Span.textContent = data[indice].ene2023;
                                      feb2023Span.textContent = data[indice].feb2023;
                                      mar2023Span.textContent = data[indice].mar2023;
                                      abr2023Span.textContent = data[indice].abr2023;
                                      may2023Span.textContent = data[indice].may2023;
                                      jun2023Span.textContent = data[indice].jun2023;
                                      jul2023Span.textContent = data[indice].jul2023;
                                      ago2023Span.textContent = data[indice].ago2023;
                                      sep2023Span.textContent = data[indice].sep2023;
                                      oct2023Span.textContent = data[indice].oct2023;
                                      nov2023Span.textContent = data[indice].nov2023;
                                      dic2023Span.textContent = data[indice].dic2023;
                                      adeudoSpan.textContent = data[indice].adeudo;
                                      statusSpan.textContent = data[indice].status;
                                    });
                                }

                                ///menu5//
                                function calendario() {
                                    divvotaciones.style.display = "none";
                                    paymentHistory2024.style.display = "none";
                                    divingresos.style.display = "none";
                                    divamenidades.style.display = "block";
                                    divpagos.style.display = "none";
                                    homeSection.style.display = "none"
                                    divinformes.style.display = "none"
                                    divlistaresidentes.style.display = "none"


                                    const contenedorCalendario = document.getElementById("contenedorCalendario");
                                    const calendarioIframe = document.createElement("iframe");
                    
                                    calendarioIframe.setAttribute(
                                      "src",
                                      `${sheetIDCalender}`
                                    );
                                    calendarioIframe.setAttribute("style", "border: 0");
                                    calendarioIframe.setAttribute("width", "800");
                                    calendarioIframe.setAttribute("height", "600");
                                    calendarioIframe.setAttribute("frameborder", "0");
                                    calendarioIframe.setAttribute("scrolling", "no");
                                    contenedorCalendario.appendChild(calendarioIframe);
                                }

                                function modificarEnSheets(valor, campo, indice) {
                                  let valorActualizado = valor;
                              
                                  if (campo === "correo" || campo === "password" || campo === "Cliente") {
                                      valorActualizado = cifrarCorreo(valor);
                                      console.log("Valor cifrado:", valorActualizado);
                                  }
                              
                                  const datosActualizados = { [campo]: valorActualizado };
                                  let url = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}/${indice}`;
                                  console.log("URL de actualización:", url);
                              
                                  fetch(url, {
                                      method: "PATCH",
                                      mode: "cors",
                                      headers: { "Content-Type": "application/json" },
                                      body: JSON.stringify(datosActualizados),
                                  })
                                  .then(response => response.json())
                                  .then(data => {
                                      console.log("Datos actualizados correctamente:", data);
                                      alert("Datos actualizados correctamente: Valor: " + valor + " Campo: " + campo);
                                  })
                                  .catch(error => {
                                      console.error("Error al actualizar los datos:", error);
                                      alert("Error al actualizar los datos:" + valor);
                                  });
                                }

                                ///menudadmin1//
                                function mostrarresidentes () {
                                  divvotaciones.style.display = "none";
                                  paymentHistory2024.style.display = "none";
                                  divingresos.style.display = "none";
                                  divamenidades.style.display = "none";
                                  divpagos.style.display = "none";
                                  homeSection.style.display = "none"
                                  divinformes.style.display = "none"
                                  divlistaresidentes.style.display = "block"
                                  contenedoradminvotos.style.display = "none";



                                  const detailsHTML = selectedCondominio.calles.map(calle => {
                                  const nombre = calle.nombre;
                                  if (!document.getElementById(`calle-${nombre}`)) {
                                    return `
                                        <details class="calle-box" id="calle-${nombre}" data-codigo="${calle.codigo}">
                                            <summary class="calle-title">${nombre}</summary>
                                            <input class="busqueda" type="text" id="busqueda-domicilio-${nombre}" placeholder="Buscar domicilio..." oninput="buscarDomicilio('${nombre}')">
                                            <div class="calle-registros" id="${nombre}-registros">
                                                <!-- Aquí se mostrarán los registros de la calle ${nombre} -->
                                            </div>
                                        </details>
                                    `;
                                  }
                              
                                    // Si el elemento ya existe, no generes nada nuevo
                                    return '';
                                  }).join('');
                                
                                  document.getElementById('tablaresidentes').innerHTML += detailsHTML;

                                  const scriptCode = `
                                  function actualizarDato(valor, campo, domcodificado) {
                                      console.log("Valor:", valor);
                                      console.log("Campo:", campo);
                                      console.log("Índice de:", domcodificado);
                                  
                                      const urlProp = \`https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}\`;
                                      fetch(urlProp)
                                          .then(response => response.json())
                                          .then(data => {
                                              const domcodificados = data.map(fila => fila.dom);
                                              let indice = domcodificados.findIndex(dom => dom === domcodificado);
                                              console.log("Índice encontrado:", indice);
                                  
                                              // Llamar a la función global para procesar los valores
                                              procesarDatos(valor, campo, indice);
                                          })
                                          .catch(error => {
                                              console.error("Error al obtener los datos:", error);
                                              alert("Error al obtener los datos.");
                                          });
                                  }
                                  `;
                                  
                                  // Crear el script y agregarlo al documento
                                  const scriptElement = document.createElement('script');
                                  scriptElement.type = 'text/javascript';
                                  scriptElement.text = scriptCode;
                                  document.body.appendChild(scriptElement);

                                  const urlProp = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}`;

                                  fetch(urlProp)
                                  .then((response) => response.json())
                                  .then((data) => {
                                      selectedCondominio.calles.forEach(calle => {
                                          const nombre = calle.nombre;
                                          const registrosFiltrados = data.filter((registro) => registro.dom.startsWith(calle.codigo));
                                          generarTabla(
                                              `${nombre}-registros`,
                                              registrosFiltrados
                                          );
                                      });
                                  })
                                  .catch((error) => {
                                      console.error('Error fetching data:', error);
                                  });

                                  function generarTabla(contenedorId, data) {
                                    const contenedor = document.getElementById(contenedorId);
                                  
                                    let tablaHTML = '<table border="0">';
                                
                                    const filasPorCalle = {};
                                
                                    data.forEach((fila, index) => {
                                      const domDecodificado = atob(fila.dom);
                                      const calle = domDecodificado.replace(/"/g, "");
                                      if (!filasPorCalle[calle]) {
                                        filasPorCalle[calle] = [];
                                      }
                                      filasPorCalle[calle].push({ fila, index });
                                    });
                                
                                    const callesOrdenadas = Object.keys(filasPorCalle).sort();
                                
                                    // Generar los detalles por cada calle
                                    callesOrdenadas.forEach((calle) => {
                                      // Iterar sobre las filas de la calle actual
                                      filasPorCalle[calle].forEach(({ fila, index }) => {
                                        const domcodificado = fila.dom;
                                        const domDecodificado = atob(fila.dom);
                                        const domComillas = domDecodificado.replace(/"/g, "");
                                        const clienteDecodificado = atob(fila.Cliente);
                                        const clienteComillas = clienteDecodificado.replace(/"/g, "");
                                        const correoDecodificado = atob(fila.correo);
                                        const correoSinComillas = correoDecodificado.replace(/"/g, "");
                                        const passwordDecodificado = atob(fila.password);
                                        const passwordComillas = passwordDecodificado.replace(/"/g, "");
                                        const claseFila =
                                          fila.status === "Moroso" ? "fila-roja" : "tablaporcada";
                                        const claseFila2 =
                                          fila.status === "Moroso" ? "fila-roja2" : "tablaporcada2";
                                        const celular = fila.cel;

                                        const claseFila3 = fila.status === "Moroso" ? "infodelresidenteconmora" : "infodelresidente";
                             
                                
                                        tablaHTML += `<tr>`;
                                        tablaHTML += `<td><details><summary class="${claseFila}">${calle}</summary>`;
                                        tablaHTML += `<table class="${claseFila3}" border="0">`;
                                        tablaHTML += "<tr>";
                                        tablaHTML += `<tr><td>Residente</td><td><input class="datostext" type="text" value="${clienteComillas}" onchange="actualizarDato(this.value, 'Cliente', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Usuario</td><td><input class="datostext" type="text" value="${correoSinComillas}" onchange="actualizarDato(this.value, 'correo', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Celular</td><td><input class="datostext" type="tel" value="${celular}" onchange="actualizarDato(this.value, 'cel', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Contraseña</td><td><input class="datostext" type="text" value="${passwordComillas}" onchange="actualizarDato(this.value, 'password', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Estatus</td><td>${fila.status}</td></tr>`;
                                        tablaHTML += `<tr><td>Adeudo</td><td>${fila.adeudo}</td></tr>`;

                                        tablaHTML += `<tr><td>Perfil</td><td>
                                        <select class="perfil-select" onchange="actualizarDato(this.value, 'perfil', '${domcodificado}')">
                                            <option value="Residente" ${fila.perfil.trim().toLowerCase() === "residente" ? "selected" : ""}>Residente</option>
                                            <option value="Administrador" ${fila.perfil.trim().toLowerCase() === "administrador" ? "selected" : ""}>Administrador</option>
                                        </select>
                                        </td></tr>`;

                                
                                        tablaHTML += `<tr><td>Multas</td><td><input class="pago" type="number" value="${fila.multas}" onchange="actualizarDato(this.value, 'multas', '${domcodificado}')"></td></tr>`;
                                
                                        tablaHTML += `<tr><td>Ene 2025</td><td><input class="pago" type="text" value="${fila.ene2025}" onchange="actualizarDato(this.value, 'ene2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Feb 2025</td><td><input class="pago" type="text" value="${fila.feb2025}" onchange="actualizarDato(this.value, 'feb2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Mar 2025</td><td><input class="pago" type="text" value="${fila.mar2025}" onchange="actualizarDato(this.value, 'mar2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Abr 2025</td><td><input class="pago" type="text" value="${fila.abr2025}" onchange="actualizarDato(this.value, 'abr2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>May 2025</td><td><input class="pago" type="text" value="${fila.may2025}" onchange="actualizarDato(this.value, 'may2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Jun 2025</td><td><input class="pago" type="text" value="${fila.jun2025}" onchange="actualizarDato(this.value, 'jun2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Jul 2025</td><td><input class="pago" type="text" value="${fila.jul2025}" onchange="actualizarDato(this.value, 'jul2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Ago 2025</td><td><input class="pago" type="text" value="${fila.ago2025}" onchange="actualizarDato(this.value, 'ago2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Sep 2025</td><td><input class="pago" type="text" value="${fila.sep2025}" onchange="actualizarDato(this.value, 'sep2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Oct 2025</td><td><input class="pago" type="text" value="${fila.oct2025}" onchange="actualizarDato(this.value, 'oct2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Nov 2025</td><td><input class="pago" type="text" value="${fila.nov2025}" onchange="actualizarDato(this.value, 'nov2025', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Dic 2025</td><td><input class="pago" type="text" value="${fila.dic2025}" onchange="actualizarDato(this.value, 'dic2025', '${domcodificado}')"></td></tr>`;
                                
                                        tablaHTML += `<tr><td>Ene 2024</td><td><input class="pago" type="text" value="${fila.ene2024}" onchange="actualizarDato(this.value, 'ene2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Feb 2024</td><td><input class="pago" type="text" value="${fila.feb2024}" onchange="actualizarDato(this.value, 'feb2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Mar 2024</td><td><input class="pago" type="text" value="${fila.mar2024}" onchange="actualizarDato(this.value, 'mar2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Abr 2024</td><td><input class="pago" type="text" value="${fila.abr2024}" onchange="actualizarDato(this.value, 'abr2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>May 2024</td><td><input class="pago" type="text" value="${fila.may2024}" onchange="actualizarDato(this.value, 'may2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Jun 2024</td><td><input class="pago" type="text" value="${fila.jun2024}" onchange="actualizarDato(this.value, 'jun2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Jul 2024</td><td><input class="pago" type="text" value="${fila.jul2024}" onchange="actualizarDato(this.value, 'jul2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Ago 2024</td><td><input class="pago" type="text" value="${fila.ago2024}" onchange="actualizarDato(this.value, 'ago2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Sep 2024</td><td><input class="pago" type="text" value="${fila.sep2024}" onchange="actualizarDato(this.value, 'sep2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Oct 2024</td><td><input class="pago" type="text" value="${fila.oct2024}" onchange="actualizarDato(this.value, 'oct2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Nov 2024</td><td><input class="pago" type="text" value="${fila.nov2024}" onchange="actualizarDato(this.value, 'nov2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Dic 2024</td><td><input class="pago" type="text" value="${fila.dic2024}" onchange="actualizarDato(this.value, 'dic2024', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Ene 2023</td><td><input class="pago" type="text" value="${fila.ene2023}" onchange="actualizarDato(this.value, 'ene2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Feb 2023</td><td><input class="pago" type="text" value="${fila.feb2023}" onchange="actualizarDato(this.value, 'feb2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Mar 2023</td><td><input class="pago" type="text" value="${fila.mar2023}" onchange="actualizarDato(this.value, 'mar2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Abr 2023</td><td><input class="pago" type="text" value="${fila.abr2023}" onchange="actualizarDato(this.value, 'abr2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>May 2023</td><td><input class="pago" type="text" value="${fila.may2023}" onchange="actualizarDato(this.value, 'may2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Jun 2023</td><td><input class="pago" type="text" value="${fila.jun2023}" onchange="actualizarDato(this.value, 'jun2023', '${domcodificado}'})"></td></tr>`;
                                        tablaHTML += `<tr><td>Jul 2023</td><td><input class="pago" type="text" value="${fila.jul2023}" onchange="actualizarDato(this.value, 'jul2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Ago 2023</td><td><input class="pago" type="text" value="${fila.ago2023}" onchange="actualizarDato(this.value, 'ago2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Sep 2023</td><td><input class="pago" type="text" value="${fila.sep2023}" onchange="actualizarDato(this.value, 'sep2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Oct 2023</td><td><input class="pago" type="text" value="${fila.oct2023}" onchange="actualizarDato(this.value, 'oct2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Nov 2023</td><td><input class="pago" type="text" value="${fila.nov2023}" onchange="actualizarDato(this.value, 'nov2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `<tr><td>Dic 2023</td><td><input class="pago" type="text" value="${fila.dic2023}" onchange="actualizarDato(this.value, 'dic2023', '${domcodificado}')"></td></tr>`;
                                        tablaHTML += `</table>`;
                                        tablaHTML += `<!--<button class="boton-eliminar" onclick="eliminarRegistro('${domcodificado}')">Eliminar</button>-->`;
                                        tablaHTML += `</details></td>`;
                                        tablaHTML += `</tr>`;
                                      });
                                    });
                                
                                    tablaHTML += "</table>";
                                    contenedor.innerHTML = tablaHTML;

                                  }
                                }

                                // Define la función procesarDatos en el contexto global
                               // Define la función procesarDatos en el contexto global
                                window.procesarDatos = function(valor, campo, indice) {

                                  // Actualiza el valor si es necesario
                                  let valorActualizado = valor; // Inicializamos valorActualizado aquí
                                  console.log("Valor inicial:", valorActualizado);

                                  if (campo === "correo" || campo === "password" || campo === "Cliente") {
                                      valorActualizado = cifrarCorreo(valor); // Asegúrate de que cifrarCorreo esté definida
                                      console.log("Valor cifrado:", valorActualizado);
                                  }

                                  const datosActualizados = {
                                      [campo]: valorActualizado,
                                  };

                                  // Genera la URL para actualizar el registro específico
                                  const url = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}/${indice}`;
                                  console.log("URL de actualización:", url);

                                  // Realizar la solicitud PATCH para actualizar los datos
                                  fetch(url, {
                                      method: "PATCH",
                                      mode: "cors",
                                      headers: {
                                          "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(datosActualizados),
                                  })
                                  .then(response => response.json())
                                  .then(data => {
                                      console.log("Datos actualizados correctamente:", data);
                                      alert("Datos actualizados correctamente: Valor: " + valor + " Campo: " + campo);
                                  })
                                  .catch(error => {
                                      console.error("Error al actualizar los datos:", error);
                                      alert("Error al actualizar los datos: " + valor);
                                  });
                                };




                                
                                  


                                ///menuadmin3//
                                function informes () {
                                  divvotaciones.style.display = "none";
                                  paymentHistory2024.style.display = "none";
                                  divingresos.style.display = "none";
                                  divamenidades.style.display = "none";
                                  divpagos.style.display = "none";
                                  homeSection.style.display = "none"
                                  divinformes.style.display = "block"
                                  divlistaresidentes.style.display = "none"
                                  contenedoradminvotos.style.display = "none";


                                }

                                function registrarReserva() {
                                    var boton = document.getElementById("btnparaconfirmarreserca");
                    
                                    if (boton.disabled) {
                                      return; // Evitar ejecutar la función si ya está en curso
                                    }
                                    desactivarBoton(); // Desactivar el botón al inicio de la función
                    
                                    const fechareserva =
                                      document.getElementById("fechareserva").value;
                                    const horaInicio = document.getElementById("horaInicio").value;
                                    const horaFin = document.getElementById("horaFin").value;
                                    const tiporeserva =
                                      document.getElementById("tiporeserva").value;
                                    const statusElement = document.getElementById("status");
                                    const statusText = statusElement.textContent;
                                    const fechaHoraActual = new Date();
                                    const fechaHoraFormateada = fechaHoraActual.toLocaleString();
                                    const domicilio = domicilioSpan.textContent;
                    
                                    const datos = {
                                      registro: fechaHoraFormateada,
                                      dom: domiciliocod,
                                      nombre: clientecod,
                                      fecha: fechareserva,
                                      amenidad: tiporeserva,
                                      inicio: horaInicio,
                                      fin: horaFin,
                                      domds: domicilio,
                                    };
                    
                                    if (
                                      fechareserva.trim() === "" ||
                                      horaInicio.trim() === "" ||
                                      horaFin.trim() === "" ||
                                      tiporeserva === ""
                                    ) {
                                      alert(
                                        "Por favor, complete todos los campos antes de registrar la reserva."
                                      );
                                      return; // Detener la ejecución si hay campos vacíos
                                    }
                    
                                    if (status === "Al Corriente") {
                                      const url = `https://sheet.best/api/sheets/${sheetID}/tabs/reservaciones${sheetIDprivada}`;
                                      const opciones = {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(datos),
                                      };
                    
                                      // Verificar disponibilidad antes de enviar los datos
                                      verificarDisponibilidad(fechareserva, tiporeserva)
                                        .then((disponible) => {
                                          if (disponible) {
                                            fetch(url, opciones)
                                              .then((response) => response.json())
                                              .then((data) => {
                                                // Alerta de éxito después de enviar los datos
                                                alert(
                                                  "Tu reservación para usar " +
                                                    tiporeserva +
                                                    " el " +
                                                    fechareserva +
                                                    " fue enviada"
                                                );
                                                console.log(fechareserva);
                                                console.log(tiporeserva);
                                                console.log(fechaHoraFormateada);
                                                console.log(domiciliocod);
                                                console.log(clientecod);
                                                console.log(fechareserva);
                                                console.log(tiporeserva);
                                                console.log(horaInicio);
                                                console.log(horaFin);
                    
                                                // Limpiar los campos del formulario después de enviar los datos
                                                document.getElementById("fechareserva").value = "";
                                                document.getElementById("horaInicio").value = "";
                                                document.getElementById("horaFin").value = "";
                                                document.getElementById("tiporeserva").value = "";
                                              })
                                              .catch((error) => {
                                                console.error(
                                                  "Error al enviar los datos a la hoja de cálculo",
                                                  error
                                                );
                                              });
                                          } else {
                                            alert(
                                              "Sin disponibilidad para reservar " +
                                                tiporeserva +
                                                " en la fecha seleccionada."
                                            );
                                          }
                                        })
                                        .catch((error) => {
                                          console.error(
                                            "Error al verificar disponibilidad:",
                                            error
                                          );
                                        });
                                    } else {
                                      alert(
                                        "Domicilio tiene adeudo, actualmente no tiene derecho al reservar amenidades"
                                      );
                                      console.log(statusText);
                                    }
                                    timer = setTimeout(activarBoton, tiempoEspera);
                                }
                    
                                function verificarDisponibilidad(fecha, tiporeserva) {
                                    const url = `https://sheet.best/api/sheets/${sheetID}/tabs/reservaciones${sheetIDprivada}`;
                    
                                    // Realizar una consulta para obtener los registros en la misma fecha y amenidad
                                    return fetch(url)
                                      .then((response) => response.json())
                                      .then((data) => {
                                        const registrosMismaFecha = data.filter(
                                          (registro) =>
                                            registro.fecha === fecha &&
                                            registro.amenidad === tiporeserva
                                        );
                                        const cantidadRegistros = registrosMismaFecha.length;
                    
                                        // Verificar disponibilidad según la cantidad de registros
                                        if (tiporeserva === "Asador") {
                                          return cantidadRegistros < 4; // Devuelve true si hay disponibilidad, de lo contrario, false
                                        } else if (tiporeserva === "Casa Club") {
                                          return cantidadRegistros < 1; // Devuelve true si hay disponibilidad, de lo contrario, false
                                        } else if (tiporeserva === "Alberca") {
                                          // La alberca siempre está disponible
                                          return true;
                                        }
                                      })
                                      .catch((error) => {
                                        console.error("Error al verificar disponibilidad:", error);
                                        throw error;
                                      });
                                }

                                function toggleMisReservas() {
                                    console.log("actualizándose");
                                    const urlmisreservas = `https://sheet.best/api/sheets/${sheetID}/tabs/reservaciones${sheetIDprivada}`;
                                    fetch(urlmisreservas)
                                      .then((response) => response.json())
                                      .then((data) => {
                                        // Filtrar los registros que coinciden con domicilioSpan
                                        const registrosFiltrados = data.filter(
                                          (registro) =>
                                            registro.dom && registro.dom.startsWith(domiciliocod)
                                        );
                                        console.log(registrosFiltrados);
                                        // Procesar los datos filtrados y agregarlos a los contenedores de calle
                                        agregarRegistros("divmisreservas", registrosFiltrados);
                                      });
                                }

                                function agregarRegistros(divmisreservas, registros) {
                                    const contenedor = document.getElementById(divmisreservas);
                                    contenedor.innerHTML = ""; // Limpiar el contenido del contenedor
                    
                                    const fechaActual = new Date(); // Obtener la fecha y hora actual
                                    const fechaAyer = new Date(
                                      fechaActual.getFullYear(),
                                      fechaActual.getMonth(),
                                      fechaActual.getDate() - 1
                                    ); // Obtener la fecha de ayer
                    
                                    registros.forEach((registro, index) => {
                                      // Convertir la fecha de la reserva a un objeto Date
                                      const fechaReserva = new Date(registro.fecha);
                    
                                      // Verificar si la fecha de la reserva está entre hoy y ayer (sin hora)
                                      if (fechaReserva >= fechaAyer) {
                                        const registroHTML = `<div id="${registro.amenidad}-${registro.fecha}-${domiciliocod}" class="registro-item">
                                                                <p><strong>Amenidad:</strong>${registro.amenidad}</p>
                                                                <p><strong>Fecha:</strong>${registro.fecha}</p>
                                                                <p><strong>Estatus:</strong>${registro.estatus}</p>
                                                                <button class="boton-eliminar">Eliminar</button>
                                                            </div>`;
                    
                                        contenedor.insertAdjacentHTML("beforeend", registroHTML);
                    
                                        // Agregar el evento click después de agregar el elemento al DOM
                                        const botonEliminar = document.getElementById(
                                          `${registro.amenidad}-${registro.fecha}-${domiciliocod}`
                                        );
                                        botonEliminar.addEventListener("click", function () {
                                          eliminarreservacion(
                                            registro.amenidad,
                                            registro.fecha,
                                            domiciliocod
                                          );
                                        });
                                      }
                                    });
                    
                                    function eliminarreservacion(amenidad, fecha, domiciliocod) {
                                      // Obtener la URL de la API
                                      const apiURL = `https://sheet.best/api/sheets/${sheetID}/tabs/reservaciones${sheetIDprivada}`;
                                      const mensajeConfirmacion = `¿Estás seguro de que deseas cancelar la reservación de ${amenidad} el ${fecha}?`;
                                      const confirmacion = confirm(mensajeConfirmacion);
                    
                                      if (confirmacion) {
                    
                                      // Realizar una solicitud GET para obtener los datos de la hoja de cálculo
                                      fetch(apiURL)
                                        .then((response) => response.json())
                                        .then((data) => {
                                          // Encontrar el índice del registro que coincide con los datos proporcionados
                                          const indice = data.findIndex(
                                            (registro) =>
                                              registro.amenidad === amenidad &&
                                              registro.fecha === fecha &&
                                              registro.dom === domiciliocod
                                          );

                                          let fechaHoraActual = new Date();
                                          let fechaHoraFormateada = fechaHoraActual.toLocaleString();
                    
                                          // Si se encuentra el índice, construir la URL de la solicitud PUT para actualizar la fila
                                          if (indice !== -1) {
                                            const updateURL = `${apiURL}/${indice}`;
                    
                                            // Definir los datos que deseas actualizar
                                            const newData = { eliminar: "Cancelada",
                                              fechadecancelacion: fechaHoraFormateada,
                                            }; // Aquí puedes poner la leyenda que quieras
                    
                                            // Configurar la solicitud PUT
                                            const requestOptions = {
                                              method: "PATCH",
                                              mode: "cors",
                                              headers: {
                                                "Content-Type": "application/json",
                                              },
                                              body: JSON.stringify(newData),
                                            };
                    
                                            // Realizar la solicitud PUT para actualizar la fila
                                            fetch(updateURL, requestOptions)
                                              .then((response) => {
                                                if (response.ok) {
                                                  console.log(
                                                    "La reserva fue marcada como eliminada en la hoja de cálculo."
                                                  );
                                                  alert(
                                                    "Tu reservación sera eliminada en los siguientes minutos"
                                                  );
                                                  // Puedes realizar cualquier otra acción que necesites aquí después de que la actualización se haya completado correctamente
                                                } else {
                                                  console.error(
                                                    "Hubo un error al actualizar la reserva en la hoja de cálculo."
                                                  );
                                                }
                                              })
                                              .catch((error) => {
                                                console.error("Hubo un error de red:", error);
                                              });
                                          } else {
                                            console.log("Registro no encontrado");
                                          }
                                        })
                                        .catch((error) => {
                                          console.error(
                                            "Hubo un error al obtener los datos de la hoja de cálculo:",
                                            error
                                          );
                                        });
                                      }
                                    }  
                                }

                                function enviardatospago() {
                                    var boton3 = document.getElementById("enviarpago");

                                    if (boton3.disabled) {
                                    return; // Evitar ejecutar la función si ya está en curso
                                    }
                                    desactivarBoton()
                                    let fechaPagoSpan =
                                    document.getElementById("fechaPago").textContent;
                                    let montoPagoSpan =
                                    document.getElementById("montoPago").textContent;
                                    let beneficiarioPagoSpan =
                                    document.getElementById("beneficiarioPago").textContent;
                                    let conceptodelpagoPagoSpan =
                                    document.getElementById("conceptodelpago").textContent;
                                    let clavederastreoSpan =
                                    document.getElementById("clavederastreo").textContent;
                                    let fechaHoraActual = new Date();
                                    let fechaHoraFormateada = fechaHoraActual.toLocaleString();
                                    let mesPagoSelect = document.getElementById("mespago").value;
                                    const inputArchivo = document.getElementById("archivo");

                                    // Verificar si el pago ya ha sido aplicado

                                    const urlVerificacion = `https://sheet.best/api/sheets/${sheetID}/tabs/pagos${sheetIDprivada}/clavederastreo/${encodeURIComponent(
                                    clavederastreoSpan
                                    )}`;
                                    console.log(urlVerificacion);

                                    if (mesPagoSelect === "") {
                                    alert(
                                        "Debe selecionar el mes al que desea que se aplique su pago"
                                    );
                                    timer = setTimeout(activarBoton, tiempoEspera);
                                    } else {
                                    fetch(urlVerificacion)
                                        .then((response) => response.json())
                                        .then((data) => {
                                        console.log(data);
                                        console.log(data.length);

                                        if (data.length > 0) {
                                            // Pago ya registrado, mostrar alerta
                                            alert(
                                            "Este comprobante ya no se puede volver a ocupar"
                                            );
                                            timer = setTimeout(activarBoton, tiempoEspera);

                                            document.getElementById("fechaPago").value = "";
                                            document.getElementById("montoPago").value = "";
                                            document.getElementById("beneficiarioPago").value = "";
                                            document.getElementById("conceptodelpago").value = "";
                                            document.getElementById("clavederastreo").value = "";
                                            inputArchivo.value = "";

                                            divpagocargado.style.display = "none";
                                        } else {
                                            // Pago no registrado, proceder a enviar los datos
                                            grabarpago();
                                            enviarDatos();

                                            alert(
                                            "Pago por " +
                                                montoPagoSpan +
                                                " aplicado a " +
                                                mesPagoSelect
                                            );

                                            document.getElementById("fechaPago").value = "";
                                            document.getElementById("montoPago").value = "";
                                            document.getElementById("beneficiarioPago").value = "";
                                            document.getElementById("conceptodelpago").value = "";
                                            document.getElementById("clavederastreo").value = "";
                                            divpagocargado.style.display = "none";
                                            timer = setTimeout(activarBoton, tiempoEspera);
                                        }
                                        })
                                        .catch((error) => {
                                        console.error("Error al verificar los datos", error);
                                        });

                                    function enviarDatos() {
                                        const datos = {
                                        registro: fechaHoraFormateada,
                                        dom: domiciliocod,
                                        nombre: clientecod,
                                        domds: domicilio,
                                        beneficiario: beneficiarioPagoSpan,
                                        fechapago: fechaPagoSpan,
                                        monto: montoPagoSpan,
                                        concepto: conceptodelpagoPagoSpan,
                                        aplicarpara: mesPagoSelect,
                                        clavederastreo: clavederastreoSpan,
                                        };

                                        const url = `https://sheet.best/api/sheets/${sheetID}/tabs/pagos${sheetIDprivada}`;
                                        const opciones = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(datos),
                                        };

                                        fetch(url, opciones)
                                        .then((response) => response.json())
                                        .then((data) => {
                                            // Lógica después de enviar datos
                                        })
                                        .catch((error) => {
                                            console.error(
                                            "Error al enviar los datos a la hoja de cálculo",
                                            error
                                            );
                                        });
                                    }

                                    function grabarpago() {
                                        console.log("el indice es");
                                        console.log(indice);

                                        const pagoaplicado = {
                                        [mesPagoSelect]: montoPagoSpan,
                                        };
                                        const url = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}/${indice}`;
                                        console.log("URL:", url);
                                        // Realizar la solicitud PATCH para actualizar los datos
                                        fetch(url, {
                                        method: "PATCH",
                                        mode: "cors",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(pagoaplicado),
                                        })
                                        .then((response) => response.json())
                                        .then((data) => {
                                            console.log("Pago aplicado");
                                        })
                                        .catch((error) => {
                                            console.error("Error al aplicar el pago", error);
                                        });
                                    }
                                    }
                                }
                  
                                function generarrecibopdf() {
                                    // Obtener la fila correspondiente al botón clicado
                                    var fila = event.target.closest("tr");
                    
                                    // Obtener los datos de la fila
                                    var datosFila = fila.querySelectorAll("td");
                    
                                    // Obtener el texto de cada elemento td y guardarlo en variables
                                    var mes = datosFila[0].textContent.trim(); // Mes
                                    var idMes = datosFila[1].querySelector("span").id; // ID del mes
                                    var cantidad = datosFila[1]
                                      .querySelector("span")
                                      .textContent.trim(); // Cantidad
                    
                                    // Verificar si la cantidad está vacía
                                    if (cantidad === "") {
                                      alert("Aún no hay un pago aplicado a este mes");
                                      return; // Salir de la función
                                    } else {
                                      var año = idMes.substring(3); // Extraer los caracteres a partir del cuarto (el año)
                                      var now = new Date();
                                      var folio =
                                        now.getFullYear() +
                                        pad(now.getMonth() + 1) +
                                        pad(now.getDate()) +
                                        pad(now.getHours()) +
                                        pad(now.getMinutes()) +
                                        pad(now.getSeconds());
                    
                                      // Función para agregar ceros a la izquierda si es necesario
                                      function pad(number) {
                                        return (number < 10 ? "0" : "") + number;
                                      }
                    
                                      // Crear un nuevo objeto jsPDF
                                      const { jsPDF } = window.jspdf;
                                      var doc = new jsPDF({
                                        orientation: "landscape",
                                        unit: "mm",
                                        format: [216, 140], // Tamaño personalizado: 216mm x 140mm (media carta horizontal)
                                      });
                    
                                      var fontSize = 12;
                                      doc.setFontSize(fontSize);
                                      doc.setTextColor(1, 62, 106); // RGB: 1, 62, 106
                    
                                      // Agregar la información al PDF
                                      doc.setTextColor(255, 0, 0); // RGB: 255, 0, 0 (rojo)
                                      doc.text("Folio: " + folio, 160, 20); // Folio alineado a la derecha
                                      doc.setTextColor(0, 0, 0); // RGB: 0, 0, 0 (negro)
                                      doc.text(
                                        "Fecha: " + new Date().toLocaleDateString(),
                                        174,
                                        25
                                      ); // Fecha de hoy alineada a la derecha
                    
                                      doc.setTextColor(1, 120, 210); // RGB para el color hexadecimal 0178d2
                                      doc.text("Estimado(a) " + cliente, 10, 50); // Nombre del cliente
                    
                                      doc.setTextColor(0, 0, 0); // RGB: 0, 0, 0 (negro)
                                      var text = [
                                        "Es un placer informarte que hemos recibido tu comprobante de pago por la cantidad de " +
                                          cantidad,
                                        "correspondiente al mes de " +
                                          mes +
                                          " " +
                                          año +
                                          " de tu propiedad ubicada en " +
                                          domicilio,
                                        "Cada contribución es esencial para asegurar el buen estado de nuestras áreas comunes y servicios.",
                                        "Agradecemos tu puntualidad y compromiso con el mantenimiento de nuestra comunidad.",
                                        "Este documento tiene carácter informativo. El pago será respaldado con el CEP o estado de cuenta y no constituye un instrumento para el acceso a amenidades o servicios",
                                      ];
                    
                                      // Guardar el estado actual de las propiedades de la instancia del documento
                                      doc.saveGraphicsState();
                    
                                      // Establecer el color y el grosor de la línea del rectángulo
                                      doc.setDrawColor(1, 120, 210); // Color del margen (gris claro)
                                      doc.setLineWidth(1); // Grosor de la línea
                    
                                      // Dibujar un rectángulo alrededor del contenido
                                      doc.roundedRect(
                                        5,
                                        5,
                                        doc.internal.pageSize.width - 10,
                                        doc.internal.pageSize.height - 10,
                                        10,
                                        10
                                      );
                    
                                      // Restaurar el estado guardado
                                      doc.restoreGraphicsState();
                    
                                      // Agregar el contenido del texto
                                      doc.text(text, 10, 65, { align: "justify", maxWidth: 190 });
                    
                                      doc.setTextColor(1, 120, 210); // RGB para el color hexadecimal 0178d2
                                      doc.text(
                                        `Atentamente: La Mesa Directiva de ${condominioInput}`,
                                        10,
                                        100
                                      );
                    
                                      var imgData = "Fraccify.png"; // Reemplaza esto con la URL de tu imagen
                                      doc.addImage(imgData, "JPEG", 10, 10, 30, 30); // Ajusta las coordenadas y el tamaño según sea necesario
                    
                                      // Guardar el PDF
                                      doc.save("recibo_" + mes.toLowerCase() + "_" + año + ".pdf");
                                    }
                                }

                                function verificarVoto(pregunta, idSi, idNo, index) {
                                    const url = `https://sheet.best/api/sheets/${sheetID}/tabs/votaciones${sheetIDprivada}`;
                                
                                    fetch(url)
                                        .then(response => response.json())
                                        .then(votaciones => {
                                            // Comprobar si ya existe un voto para la pregunta específica
                                            const votoExistente = votaciones.find(voto => voto.pregunta === pregunta);
                                
                                            if (votoExistente) {
                                                // Si ya existe un voto, deshabilitar los inputs de radio y marcar el voto correspondiente
                                                document.getElementById(idSi).disabled = true;
                                                document.getElementById(idNo).disabled = true;
                                                if (votoExistente.respuesta === 'Si') {
                                                    document.getElementById(idSi).checked = true;
                                                } else {
                                                    document.getElementById(idNo).checked = true;
                                                }
                                                // Guardar el estado del voto en localStorage
                                                localStorage.setItem(`voto_${index}`, votoExistente.respuesta);
                                            } else {
                                                // Si no existe un voto, agregar eventos change a los inputs de radio
                                                document.getElementById(idSi).addEventListener('change', () => enviarvoto(pregunta, 'Si', idSi, idNo, index));
                                                document.getElementById(idNo).addEventListener('change', () => enviarvoto(pregunta, 'No', idSi, idNo, index));
                                            }
                                        })
                                        .catch(error => console.error('Error al verificar el voto:', error));
                                }
                                
                                function enviarvoto(pregunta, voto, idSi, idNo, index) {
                                    const status = document.getElementById("status").textContent;
                                
                                    if (status === "Al Corriente") {
                                        const fechaHoraActual = new Date();
                                        const fechaHoraFormateada = fechaHoraActual.toLocaleString();
                                
                                        const domicilio = document.getElementById("domicilio").textContent;
                                
                                        const datos = {
                                            domicilio: domicilio,
                                            pregunta: pregunta,
                                            respuesta: voto,
                                            fechaHoraRegistro: fechaHoraFormateada,
                                        };
                                
                                        const url = `https://sheet.best/api/sheets/${sheetID}/tabs/votaciones${sheetIDprivada}`;
                                
                                        const opciones = {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify(datos),
                                        };
                                
                                        // Enviar los datos a la hoja de cálculo
                                        fetch(url, opciones)
                                            .then(response => response.json())
                                            .then(data => {
                                                // Alerta de éxito después de enviar los datos
                                                alert('Voto Emitido');
                                                // Deshabilitar los inputs de radio
                                                document.getElementById(idSi).disabled = true;
                                                document.getElementById(idNo).disabled = true;
                                                // Guardar el estado del voto en localStorage
                                                localStorage.setItem(`voto_${index}`, voto);
                                            })
                                            .catch(error => {
                                                console.error('Error al enviar los datos:', error);
                                            });
                                    } else {
                                        alert("Domicilio con adeudo, no puede votar");
                                    }
                                }

                                function confirmacionvyp() {
                                    var boton2 = document.getElementById("generarvisitayqr");
                                    if (boton2.disabled) {
                                      return; // Evitar ejecutar la función si ya está en curso
                                    }
                                    desactivarBoton(); // Desactivar el botón al inicio de la función
                    
                                    confirmacion.style.display = "none";
                                    datoscorrectosvisitas.style.display = "block";
                                    divnuevoregistro.style.display = "block";
                                    const domicilio = domicilioSpan.textContent;
                                    const propietario = propietarioSpan.textContent;
                                    const namevisitaSpan =
                                    document.getElementById("namevisita").value;
                                    const fechavisitaSpan =
                                    document.getElementById("fechavisita").value;
                                    const fechaHoraActual = new Date();
                                    const fechaHoraFormateada = fechaHoraActual.toLocaleString();
                    
                                    // Formatear la fecha como DDMMAAAA
                                    const dia = String(fechaHoraActual.getDate()).padStart(2, "0");
                                    const mes = String(fechaHoraActual.getMonth() + 1).padStart(
                                      2,
                                      "0"
                                    ); // Los meses empiezan desde 0
                                    const año = fechaHoraActual.getFullYear();
                    
                                    // Formatear la hora como HHMM
                                    const horas = String(fechaHoraActual.getHours()).padStart(
                                      2,
                                      "0"
                                    );
                                    const minutos = String(fechaHoraActual.getMinutes()).padStart(
                                      2,
                                      "0"
                                    );
                    
                                    const propietarioAbreviado = propietario
                                      .slice(0, 2)
                                      .toUpperCase();
                                    const domicilioAbreviado = domicilio.slice(0, 2).toUpperCase();
                                    const namevisitaAbreviado = namevisitaSpan
                                      .slice(0, 2)
                                      .toUpperCase();
                                    const fechaSinEspacios = fechavisitaSpan.replace(/\s/g, ""); // Eliminar espacios de la fecha
                                    const fechaHoraRegistroSinEspacios =
                                      fechaHoraFormateada.replace(/\s/g, ""); // Eliminar espacios de la fechaHoraRegistro
                                    const idUnico = `${propietarioAbreviado}${domicilioAbreviado}${namevisitaAbreviado}${dia}${mes}${año}${horas}${minutos}`;
                                    console.log(idUnico);
                    
                                    const tipoSpan = document.getElementById("tipo").value;
                                    console.log(
                                      domicilio,
                                      propietario,
                                      namevisitaSpan,
                                      tipoSpan,
                                      fechavisitaSpan
                                    );
                    
                                    const datos = {
                                      propietario: clientecod,
                                      domicilio: domiciliocod,
                                      namevisita: namevisitaSpan,
                                      fecha: fechavisitaSpan,
                                      tipo: tipoSpan,
                                      fechaHoraRegistro: fechaHoraFormateada,
                                      idunico: idUnico,
                                    };
                    
                                    const qrData = {
                                      Casa: domicilio,
                                      Nombre: namevisitaSpan,
                                      Fecha: fechavisitaSpan,
                                      Tipo: tipoSpan,
                                      ID: idUnico,
                                    };
                    
                                    const url = `https://sheet.best/api/sheets/${sheetID}/tabs/visitas${sheetIDprivada}`;
                    
                                    const opciones = {
                                      method: "POST",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(datos),
                                    };
                    
                                    // Enviar los datos a la hoja de cálculo
                                    fetch(url, opciones)
                                      .then((response) => response.json())
                                      .then((data) => {
                                        // Alerta de éxito después de enviar los datos
                                        alert(
                                          "Tu solicitud para el ingreso de " +
                                            namevisitaSpan +
                                            " el " +
                                            fechavisitaSpan +
                                            " fue enviada"
                                        );
                    
                                        // Generar el contenido para el QR
                                        const qrContent = JSON.stringify(qrData);
                    
                                        // Clonar qrElement para evitar problemas de agregar un elemento ya existente
                                        const qrElementClone = qrElement.cloneNode(true);
                    
                                        // Generar el código QR y mostrarlo en la página
                                        new QRCode(qrElementClone, qrContent);
                    
                                        // Obtener el contenedor donde se desea agregar el código QR
                                        const contenedorQR = document.getElementById("qrElement");
                    
                                        // Limpiar el contenedor antes de agregar el código QR clonado
                                        contenedorQR.innerHTML = "";
                    
                                        // Agregar el código QR al contenedor
                                        contenedorQR.appendChild(qrElementClone);
                                        divqr.style.display = "block";

                    
                                        // Llamar a las funciones para borrar elementos y regresar
                                        //borrarElementos();
                                        //regresar();
                                      })
                              
                                      .catch((error) => {
                                        console.error(
                                          "Error al enviar los datos a la hoja de cálculo",
                                          error
                                        );
                                      });
                                    timer = setTimeout(activarBoton, tiempoEspera);
                                }

                                function enviarsdei() {
                                    const namevisitaSpan = document.getElementById("namevisita").value;
                                    const tipoSpan = document.getElementById("tipo").value;
                                    const fechavisitaSpan = document.getElementById("fechavisita").value;
                    
                                    if (
                                      namevisitaSpan.trim() === "" ||
                                      tipoSpan.trim() === "" ||
                                      fechavisitaSpan.trim() === ""
                                    ) {
                                      alert("Por favor, complete todos los campos.");
                                      return; // Detener la ejecución si algún campo está vacío
                                    }
                                    const namevisita2Span = document.getElementById("namevisita2");
                                    const fechavisita2Span =document.getElementById("fechavisita2");
                                    const tipo2Span = document.getElementById("tipo2");
                    
                                    if (status === "Al Corriente") {

                                      confirmacion.style.display = "block";
                                      formulario2.style.display = "none";
                    
                                      namevisita2Span.textContent = namevisitaSpan;
                                      fechavisita2Span.textContent = fechavisitaSpan;
                                      tipo2Span.textContent = tipoSpan;
                    
                                      namevisita3Span.textContent = namevisitaSpan;
                                      fechavisita3Span.textContent = fechavisitaSpan;
                                      tipo3Span.textContent = tipoSpan;

                                    } else {
                                      alert(
                                        "Domicilio con adeudo, actualmente no tiene derecho al ingreso de visitas o proveedores"
                                      );
                                    }
                                }

                                function nuevoregistro() {
                                    borrarElementos();
                                }

                                function borrarElementos() {
                                    const namevisita2Span = document.getElementById("namevisita2");
                                    const fechavisita2Span = document.getElementById("fechavisita2");
                                    const tipo2Span = document.getElementById("tipo2");
                                    const namevisitaSpan = document.getElementById("namevisita");
                                    const fechavisitaSpan = document.getElementById("fechavisita");
                                    const tipoSpan = document.getElementById("tipo");
                                    const contenedorQR = document.getElementById("qrElement");
                    
                                    // Eliminar el contenido de los elementos
                                    namevisita2Span.value = "";
                                    fechavisita2Span.value = "";
                                    tipo2Span.value = 0;
                                    namevisitaSpan.value = "";
                                    fechavisitaSpan.value = "";
                                    tipoSpan.value = 0;
                                    contenedorQR.innerHTML = "";
                                    namevisita3Span.value = "";
                                    fechavisita3Span.value = "";
                                    tipo3Span.value = "";
                    
                                    formulario2.style.display = "block";
                                    divingresos.style.display = "block";
                                    paymentHistory2024.style.display = "none";
                                    confirmacion.style.display = "none";
                                    divqr.style.display = "none";

                                }

                                function fungenerarinforme() {
                                  const tipoInforme = document.getElementById('tipoinforme').value;
                                  let url;
                                
                                  if (tipoInforme === 'Votaciones') {
                                      url = `https://sheet.best/api/sheets/${sheetID}/tabs/votaciones${sheetIDprivada}`;
                                  } else if (tipoInforme === 'pagos') {
                                      url = `https://sheet.best/api/sheets/${sheetID}/tabs/pagos${sheetIDprivada}`;
                                  } else if (tipoInforme === 'reservas') {
                                      url = `https://sheet.best/api/sheets/${sheetID}/tabs/reservaciones${sheetIDprivada}`;
                                  } else if (tipoInforme === 'visitasyproveedores') {
                                      url = `https://sheet.best/api/sheets/${sheetID}/tabs/visitas${sheetIDprivada}`;
                                  } else if (tipoInforme === 'Propietarios') {
                                    url = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}`;
                                  } else {
                                      console.log('Otro tipo de informe seleccionado');
                                      return; // Salir de la función si el tipo de informe no es válido
                                  }
                                
                                  fetch(url)
                                      .then(response => response.json())
                                      .then(data => {
                                          const formattedData = formatData(data, tipoInforme); // Pasar tipoInforme como parámetro
                                          const csvData = convertToCSV(formattedData);
                                          downloadCSV(csvData, `${tipoInforme.toLowerCase()}.csv`);
                                      })
                                      .catch(error => console.error('Error fetching data:', error));
                                }
                                
                                function formatData(data, tipoInforme) {
                                  return data.map(item => {
                                    if (tipoInforme === 'Votaciones') {
                                      return {
                                        domicilio: item.domicilio,
                                        pregunta: item.pregunta.replace(/\n/g, " | "), // Reemplaza los saltos de línea
                                        respuesta: item.respuesta,
                                        fechaHoraRegistro: formatFechaHora(item.fechaHoraRegistro),
                                
                                      }
                                    } else if (tipoInforme === 'pagos') {
                                      return {
                                        domds: item.domds,
                                        beneficiario: item.beneficiario,
                                        fechapago: item.fechapago,
                                        monto: item.monto,
                                        concepto: item.concepto,
                                      }
                                    } else if (tipoInforme === 'reservas') {
                                      return {
                                        domds: item.domds,
                                        amenidad: item.amenidad,
                                        fecha: item.fecha,
                                        estatus: item.estatus,
                                        fechadecancelacion: item.fechadecancelacion,
                                        registro: item.registro,
                                
                                      }
                                    } else if (tipoInforme === 'visitasyproveedores') {
                                      return {
                                        domicilio: atob(item.domicilio), // Descodifica el domicilio
                                        namevisita: item.namevisita,
                                        fecha: item.fecha,
                                        ingresoc1: item.ingresoc1,
                                        ingresoc2: item.ingresoc2,
                                        fechaHoraRegistro: item.fechaHoraRegistro,
                                
                                      }
                                    }  else if (tipoInforme === 'Propietarios') {
                                      return {
                                        nombre: atob(item.Cliente),
                                        domicilio: atob(item.dom), // Descodifica el domicilio
                                        correo: atob(item.correo),
                                        satus: item.status,
                                        perfil: item.perfil,
                                        celular: item.cel,
                                        ene2023: item.ene2023,
                                        feb2023: item.feb2023,
                                        mar2023: item.mar2023,
                                        abr2023: item.abr2023,
                                        may2023: item.may2023,
                                        jun2023: item.jun2023,
                                        jul2023: item.jul2023,
                                        ago2023: item.ago2023,
                                        sep2023: item.sep2023,
                                        oct2023: item.oct2023,
                                        nov2023: item.nov2023,
                                        dic2023: item.dic2023,
                                        ene2024: item.ene2024,
                                        feb2024: item.feb2024,
                                        mar2024: item.mar2024,
                                        abr2024: item.abr2024,
                                        may2024: item.may2024,
                                        jun2024: item.jun2024,
                                        jul2024: item.jul2024,
                                        ago2024: item.ago2024,
                                        sep2024: item.sep2024,
                                        oct2024: item.oct2024,
                                        nov2024: item.nov2024,
                                        dic2024: item.dic2024,
                                        ene2025: item.ene2025,
                                        feb2025: item.feb2025,
                                        mar2025: item.mar2025,
                                        abr2025: item.abr2025,
                                        may2025: item.may2025,
                                        jun2025: item.jun2025,
                                        jul2025: item.jul2025,
                                        ago2025: item.ago2025,
                                        sep2025: item.sep2025,
                                        oct2025: item.oct2025,
                                        nov2025: item.nov2025,
                                        dic2025: item.dic2025,
                                      }
                                    }    
                                  });
                                }
                                
                                function formatFechaHora(fechaHora) {
                                  if (!fechaHora) return '';
                                
                                  const [datePart, timePart] = fechaHora.split(' ');
                                  const dateParts = datePart.includes('/') ? datePart.split('/') : datePart.split('-');
                                  const isUSFormat = dateParts[0].length === 4;
                                
                                  if (isUSFormat) {
                                      // Date in YYYY/MM/DD or YYYY-MM-DD format
                                      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
                                      return `${formattedDate} ${timePart}`;
                                  } else {
                                      // Date in DD/MM/YYYY or DD-MM-YYYY format
                                      return fechaHora;
                                  }
                                }
                                
                                function convertToCSV(objArray) {
                                  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
                                  let str = '';
                                  let row = '';
                                
                                  for (let index in array[0]) {
                                      row += index + ',';
                                  }
                                  row = row.slice(0, -1);
                                  str += row + '\r\n';
                                
                                  for (let i = 0; i < array.length; i++) {
                                      let line = '';
                                      for (let index in array[i]) {
                                          if (line !== '') line += ',';
                                          line += array[i][index];
                                      }
                                      str += line + '\r\n';
                                  }
                                  return str;
                                }
                                
                                function downloadCSV(csv, filename) {
                                  const csvFile = new Blob([csv], { type: 'text/csv' });
                                  const downloadLink = document.createElement('a');
                                  downloadLink.download = filename;
                                  downloadLink.href = window.URL.createObjectURL(csvFile);
                                  downloadLink.style.display = 'none';
                                  document.body.appendChild(downloadLink);
                                  downloadLink.click();
                                  document.body.removeChild(downloadLink);
                                }
                                  
                                document.getElementById("compartirQrButton").addEventListener("click", async function() {
                                    //alert("Botón clickeado!");
                                  
                                    const domicilio = document.getElementById("domicilio").textContent;
                                    const propietario = document.getElementById("propietario").textContent;
                                    const namevisitaSpan = document.getElementById("namevisita").value;
                                    const fechavisitaSpan = document.getElementById("fechavisita").value;
                                    //alert(`Datos obtenidos: ${namevisitaSpan}, ${fechavisitaSpan}, ${domicilio}, ${propietario}`);
                                  
                                    const qrElement = document.getElementById("qrElement");
                                    html2canvas(qrElement).then(async canvas => {
                                        canvas.toBlob(async function(blob) {
                                            try {
                                                const imgbbUrl = await uploadToImgbb(blob);
                                                //alert(`Imagen subida a imgbb: ${imgbbUrl}`);
                                  
                                                const shortUrl = await shortenUrl(imgbbUrl);
                                                //alert(`URL acortada: ${shortUrl}`);
                                  
                                                const whatsappMessage1 = `Hola ${namevisitaSpan}`;
                                                const whatsappMessage2 = `El residente ${propietario} de ${condominioInput} te ha autorizado un acceso para su domicilio ${domicilio} para el ${fechavisitaSpan}`;
                                                const whatsappMessage3 = `Muestra este QR a seguridad: ${shortUrl}`;
                                                const whatsappMessage4 = `Ubicación: ${sheetIDubicacion}`;
                                  
                                                const whatsappMessage = `${whatsappMessage1}\n\n${whatsappMessage2}\n\n${whatsappMessage3}\n\n${whatsappMessage4}`;
                                  
                                                const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
                                                //alert(`WhatsApp URL: ${whatsappUrl}`);
                                  
                                                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                                                const whatsappApiUrl = isMobile ? whatsappUrl.replace('api.whatsapp.com', 'wa.me') : whatsappUrl;
                                  
                                                //alert(`WhatsApp API URL: ${whatsappApiUrl}`);
                                  
                                                window.open(whatsappUrl, "_blank");
                                            } catch (error) {
                                                alert(`Hubo un error al procesar la imagen: ${error.message}`);
                                                console.error("Error al procesar la imagen:", error);
                                            }
                                        }, 'image/png');
                                    });
                                });

                                async function uploadToImgbb(blob) {
                                    //alert("Subiendo imagen a imgbb...");
                                    const formData = new FormData();
                                  
                                    formData.append("file", blob);
                                    formData.append("upload_preset", "qrcodes_upload"); // Necesitas configurarlo en Cloudinary
                                  
                                    try {
                                        const response = await fetch("https://api.cloudinary.com/v1_1/ddpqkyeqv/image/upload", {
                                            method: "POST",
                                            body: formData
                                        });
                                  
                                        const data = await response.json();
                                        return data.secure_url; 
                                    } catch (error) {
                                        //alert(`Error al subir la imagen: ${error.message}`);
                                        console.error("Error al subir la imagen:", error);
                                        throw error;
                                    }
                                }
                                  
                                async function shortenUrl(url) {
                                    //alert(`Acortando URL: ${url}`);
                                    try {
                                        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
                                        if (!response.ok) {
                                            const errorText = await response.text();
                                            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
                                        }
                                        const shortUrl = await response.text();
                                        //alert(`URL acortada: ${shortUrl}`);
                                        return shortUrl;
                                    } catch (error) {
                                        //alert(`Error al acortar la URL: ${error.message}`);
                                        console.error("Error al acortar la URL:", error);
                                        throw error;
                                    }
                                }

                                document.getElementById("calle-morosos").addEventListener("click", function() {
                                  if (this.open) { // Si necesitas verificar una condición de "abierto", esto sería solo para un <details>
                                      obtenerdomconmora();
                                  } else {
                                      obtenerdomconmora(); // Si usas un click sin <details>, podrías evitar la condición
                                  }
                                });

                                function obtenerdomconmora() {
                                  console.log("Obteniendo registros de morosos...");
                                  const url = `https://sheet.best/api/sheets/${sheetID}/tabs/propietarios${sheetIDprivada}`;
                                  fetch(url)    
                                      .then((response) => response.json())
                                      .then((data) => {
                                          // Filtrar y agregar los registros con estado "Moroso" (sin importar la fecha)
                                          const registrosMorosos = data.filter((registro) => registro.status.startsWith("Moroso"));
                                          agregarRegistrosMorosos("morosos-registros", registrosMorosos);
                                      })
                                      .catch((error) => {
                                          console.error(error);
                                      });
                                }
                                  // Función para agregar registros de morosos
                                  function agregarRegistrosMorosos(contenedorId, registros) {
                                      const contenedor = document.getElementById(contenedorId);
                                      // Vaciar el contenedor antes de agregar nuevos registros
                                      contenedor.innerHTML = '';
                                      registros.forEach(registro => {
                                          const registroHTML = `
                                              <div id="div${registro.dom}" class="registro-item-mora">
                                                  <p><strong>Domicilio:</strong> ${atob(registro.dom)}</p>
                                                  <p><strong>Adeudo Total:</strong> ${registro.adeudo}</p>
                                              </div>
                                          `;
                                          contenedor.insertAdjacentHTML('beforeend', registroHTML);
                                      });
                                  }


                                  function agregarvotacion() {

                                        divvotaciones.style.display = "none";
                                        paymentHistory2024.style.display = "none";
                                        divingresos.style.display = "none";
                                        divamenidades.style.display = "none";
                                        divpagos.style.display = "none";
                                        homeSection.style.display = "none"
                                        divinformes.style.display = "none"
                                        divlistaresidentes.style.display = "none"
                                        contenedoradminvotos.style.display = "block";
                                


                                  
                                        const tablapreguntasadmin = document.getElementById("tablapreguntasadmin");
                                  
                                        const url = `https://sheet.best/api/sheets/${sheetID}/tabs/avotar${sheetIDprivada}`;
                                  
                                        fetch(url)
                                            .then((response) => response.json())
                                            .then((data) => {
                                                // Limpiar el contenido del div antes de agregar nuevas tablas
                                                tablapreguntasadmin.innerHTML = '';
                                  
                                                // Crear una tabla para contener todas las preguntas
                                                let table = document.createElement('table');
                                                table.className = 'tablaporcada';
                                  
                                                data.forEach((fila, index) => {
                                                    let trPregunta = document.createElement('tr');
                                                    let tdPregunta = document.createElement('td');
                                                    tdPregunta.colSpan = 2;
                                                    tdPregunta.textContent = fila.pregunta;
                                  
                                                    // Aplicar una clase diferente para filas alternadas
                                                    if (index % 2 === 0) {
                                                        trPregunta.className = 'fila-par';
                                                    } else {
                                                        trPregunta.className = 'fila-impar';
                                                    }
                                  
                                                    trPregunta.appendChild(tdPregunta);
                                                    table.appendChild(trPregunta);
                                                });
                                  
                                                // Agregar la tabla al contenedor
                                                tablapreguntasadmin.appendChild(table);
                                            })
                                            .catch((error) => {
                                                console.error('Error al obtener datos:', error);
                                            });
                                    
                                  }

                                  document.getElementById('btnAgregarPregunta').addEventListener('click', () => {
                                    const nuevaPregunta = prompt('Ingrese la nueva pregunta:');
                                    
                                    
                                        agregarPregunta(nuevaPregunta);
                                    
                                  });

                                  function agregarPregunta(pregunta) {
                                    
                                    const url = `https://sheet.best/api/sheets/${sheetID}/tabs/avotar${sheetIDprivada}`;
                                  
                                    const datos = {
                                        pregunta: pregunta
                                    };
                                  
                                    const opciones = {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(datos),
                                    };
                                  
                                    fetch(url, opciones)
                                        .then(response => response.json())
                                        .then(data => {
                                            alert('Pregunta agregada exitosamente');
                                            // Puedes actualizar la vista aquí si es necesario
                                            agregarvotacion(); // Opcional: para actualizar la lista de preguntas
                                        })
                                        .catch(error => {
                                            console.error('Error al agregar la pregunta:', error);
                                        });
                                    
                                  }




                            } else {
                                alert("Contraseña incorrecta.");
                            }
                        } else {
                            alert("Usuario no encontrado.");
                        }
                    })
                    .catch((error) => {
                        console.error("Error al obtener datos:", error);
                    });
            } else {
                alert("El condominio seleccionado no es válido.");
            } 
        } else {
            alert("Debe aceptar el aviso de privacidad para iniciar sesión");
        }   
    });
});


//Cerrar Sesión
document.getElementById("cerrarSesionItem").addEventListener("click", function() {
    // Elimina los elementos del localStorage
    localStorage.removeItem('condominioInputGuardado');
    console.log("Borrando condominio");
    localStorage.removeItem('usuarioInputGuardado');
    console.log("Borrando Usuario");
    localStorage.removeItem('contrasenaInputGuardado');
    console.log("Borrando contraseña"); 

    
    // Recarga la página
    window.location.reload();
});

/////////////////////////
function removeSpecialCharacters(input) {
    // Reemplaza caracteres especiales y acentos con una expresión regular
    input.value = input.value.replace(/[^A-Za-z\s]/g, "");
}
/////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const archivoInput = document.getElementById("archivo");

    archivoInput.addEventListener("change", function() {
        // Llama a la función cuando el archivo cambie
        procesarArchivo();
    });
});


document.getElementById("tipoinforme").addEventListener("change", function() {

  const tipoInforme = document.getElementById('tipoinforme').value;
  const datePickerContainer1 = document.getElementById('datePickerContainer1');
  const datePickerContainer2 = document.getElementById('datePickerContainer2');


       if (tipoInforme === 'Votaciones' || tipoInforme === 'Propietarios') {
          datePickerContainer1.style.display = 'none';
          datePickerContainer2.style.display = 'none';

      } else {
          datePickerContainer1.style.display = 'block';
          datePickerContainer2.style.display = 'block';

      }
});


function procesarArchivo() {
    const archivo = document.getElementById("archivo").files[0];
    divpagocargado.style.display = "block";

  
    if (!archivo) {
        alert("Por favor, seleccione un archivo PDF o una imagen.");
        return;
    }
  
    const lector = new FileReader();
    lector.onload = function (evento) {
        const datos = evento.target.result;
        if (archivo.type === "application/pdf") {
            console.log("Es PDF");
            procesarPDF(datos);
        } else if (archivo.type.startsWith("image/")) {
            console.log("Es imagen");
            procesarImagen(datos);
        } else {
            alert(
                "Tipo de archivo no compatible. Por favor, seleccione un archivo PDF o una imagen."
            );
        }
        archivoInput.value = ""; // Limpiar el input después de procesar
    };
  
    lector.onerror = function (error) {
        console.error("Error al leer el archivo:", error);
        alert("Error al procesar el archivo. Inténtelo de nuevo.");
    };
  
    lector.readAsArrayBuffer(archivo);
}

  
function procesarPDF(datos) {
    pdfjsLib.getDocument(datos).promise.then(function (pdf) {
      pdf.getPage(1).then(function (pagina) {
        pagina.getTextContent().then(function (contenido) {
          const texto = contenido.items
            .map(function (item) {
              return item.str;
            })
            .join(" ");
  
          console.log(texto);
  
          // Buscar el monto
          const regexMonto = /\$\s?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/; // Coincide con el formato de monto: $XXX,XXX.XX o $XXX.XX
          const montoMatch = texto.match(regexMonto);
          const monto = montoMatch ? montoMatch[1] : null;
  
          // Buscar la fecha
          const regexFecha = /(\d{1,2}\s+de\s+[a-zA-Z]+\s+de\s+\d{4})/; // Coincide con el formato de fecha: dd de mes de aaaa
          const fechaMatch = texto.match(regexFecha);
          const fecha = fechaMatch ? fechaMatch[0] : null;
  
          // Buscar el beneficiario
          const regexBeneficiario = /COLONOS\sSAN\sSEBASTIAN\sAC/; // Coincide con "COLONOS SAN SEBASTIAN AC"
          const beneficiarioMatch = texto.match(regexBeneficiario);
          const beneficiario = beneficiarioMatch ? beneficiarioMatch[0] : null;
  
          // Buscar el concepto del pago
          const regexConceptoPago = /Monto IVA Referencia numérica Clave de rastreo  \d{2} de [a-zA-Z]+\sde\s\d{4}\s(.+?)\s+\$/;
          const conceptoPagoMatch = texto.match(regexConceptoPago);
          const conceptoPago = conceptoPagoMatch ? conceptoPagoMatch[1] : null;
          
          console.log(conceptoPago);
  
          // Clave de rastreo
  
          const regexDatosDespuesDeCero = /\$ 0\.00\s*(\S+)\s*(\S+)/; // Coincide con "$ 0.00" seguido de dos grupos de cualquier otro texto
          const datosDespuesDeCeroMatch = texto.match(regexDatosDespuesDeCero);
          const primerDato = datosDespuesDeCeroMatch
            ? datosDespuesDeCeroMatch[1]
            : null;
          const segundoDato = datosDespuesDeCeroMatch
            ? datosDespuesDeCeroMatch[2]
            : null;
          console.log(primerDato);
          console.log(segundoDato);
          const clavederastreosinf = primerDato + " " + segundoDato;
          const clavederastreo =clavederastreosinf.replace(/[-\/]/g, '');
          console.log(clavederastreo);
  
          // Mostrar los datos en el HTML
          document.getElementById("fechaPago").innerText =
            fecha || "No se encontró fecha";
          document.getElementById("montoPago").innerText =
            monto || "No se encontró monto";
          document.getElementById("beneficiarioPago").innerText =
            beneficiario || "No se encontró beneficiario";
          document.getElementById("conceptodelpago").innerText =
            conceptoPago || "No se encontró concepto";
          document.getElementById("clavederastreo").innerText =
            clavederastreo || "No se encontró concepto";
  
          if (!monto || !fecha || !beneficiario || !conceptoPago) {
            alert("Comprobante no valido");
            document.getElementById("fechaPago").value = "";
            document.getElementById("montoPago").value = "";
            document.getElementById("beneficiarioPago").value = "";
            document.getElementById("conceptodelpago").value = "";
            document.getElementById("clavederastreo").value = "";
            divpagocargado.style.display = "none";
          }
        });
      });
    });
}
  
function procesarImagen(datos) {
    const loader = document.getElementById("loader");
    loader.style.display = "block"; // Mostrar el indicador de carga
  
    Tesseract.recognize(
      datos,
      "spa", // Idioma de reconocimiento (puedes cambiarlo según tus necesidades)
      { logger: (m) => console.log(m) } // Opciones adicionales, como el registro de mensajes
    ).then(({ data: { text } }) => {
      // Imprimir el texto completo reconocido en la consola
      console.log("Texto reconocido:", text);
  
      // Buscar el monto
      const regexMonto = /\$\s?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/; // Coincide con el formato de monto: $XXX,XXX.XX o $XXX.XX
      const montoMatch = text.match(regexMonto);
      const monto = montoMatch ? montoMatch[1] : null;
  
      // Buscar la fecha
  
      const regexFecha = /(\d{1,2}\s+de\s+[a-zA-Z]+\s+de\s+\d{4})/; // Coincide con el formato de fecha: dd de mes de aaaa
      const fechaMatch = text.match(regexFecha);
      const fecha = fechaMatch ? fechaMatch[0] : null;
  
      // Buscar el beneficiario
      const regexBeneficiario = /COLONOS\sSAN\sSEBASTIAN\sAC/; // Coincide con "COLONOS SAN SEBASTIAN AC"
      const beneficiarioMatch = text.match(regexBeneficiario);
      const beneficiario = beneficiarioMatch ? beneficiarioMatch[0] : null;
  
      // Buscar el concepto del pago
      const regexConceptoPago =
        /Concepto\s+del\s+pago\s+(.+?)\s+Clave\s+de\s+rastreo\s+\w+/; // Coincide con "Concepto del pago" seguido de cualquier texto hasta la siguiente ocurrencia de "Clave de rastreo" seguido de letras o números
      const conceptoPagoMatch = text.match(regexConceptoPago);
      const conceptoPago = conceptoPagoMatch ? conceptoPagoMatch[1] : null;
  
      const regexReferenciaNumerica = /Referencia numérica (\S+)/; // Coincide con "Referencia numérica" seguido de cualquier otro texto
      const referenciaNumericaMatch = text.match(regexReferenciaNumerica);
      const referenciaNumerica = referenciaNumericaMatch
        ? referenciaNumericaMatch[1]
        : null;
  
      // Buscar los datos después de "Clave de rastreo"
      const regexClaveRastreo = /Clave de rastreo (\S+)/; // Coincide con "Clave de rastreo" seguido de cualquier otro texto
      const claveRastreoMatch = text.match(regexClaveRastreo);
      const claveRastreo = claveRastreoMatch ? claveRastreoMatch[1] : null;
  
      const refeyclave = referenciaNumerica + " " + claveRastreo;
      console.log(refeyclave);
  
      // Ocultar el indicador de carga
      loader.style.display = "none";
  
      // Imprimir los datos en la consola
      console.log("Fecha:", fecha || "No se encontró fecha");
      console.log("Monto:", monto || "No se encontró monto");
      console.log("Beneficiario:", beneficiario || "No se encontró beneficiario");
  
      document.getElementById("fechaPago").innerText =
        fecha || "No se encontró fecha";
      document.getElementById("montoPago").innerText =
        monto || "No se encontró monto";
      document.getElementById("beneficiarioPago").innerText =
        beneficiario || "No se encontró beneficiario";
      document.getElementById("conceptodelpago").innerText =
        conceptoPago || "No se encontró concepto";
      document.getElementById("clavederastreo").innerText =
        refeyclave || "No se encontró concepto";
  
      if (!monto || !fecha || !beneficiario || !conceptoPago || !refeyclave) {
        console.log("segunda validacion");
  
        const regexMonto2 = /\$\s?(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2}))/; // Coincide con el formato de monto: $XXX,XXX.XX o $XXX.XX
        const montoMatch2 = text.match(regexMonto2);
        const monto2 = montoMatch2 ? montoMatch2[1] : null;
        console.log(monto2);
  
        const regexFecha2 = /Fecha y hora de operación\s+([\w\/]+ - [\d:]+)/;
        const fechaMatch2 = text.match(regexFecha2);
        const fecha2 = fechaMatch2 ? fechaMatch2[1] : null;
        console.log(fecha2);
  
        const regexBeneficiario2 = /SAN\sSEBASTIAN/; // Coincide con "COLONOS SAN SEBASTIAN AC"
        const beneficiarioMatch2 = text.match(regexBeneficiario2);
        const beneficiario2 = beneficiarioMatch2 ? beneficiarioMatch2[0] : null;
        console.log(beneficiario2);
  
        const regexConceptoPago2 = /por el concepto\s+“(\w+)”/; // Coincide con "Concepto del pago" seguido de cualquier texto hasta la siguiente ocurrencia de "Clave de rastreo" seguido de letras o números
        const conceptoPagoMatch2 = text.match(regexConceptoPago2);
        const conceptoPago2 = conceptoPagoMatch2 ? conceptoPagoMatch2[1] : null;
        console.log(conceptoPago2);
  
        const regexReferenciaNumerica2 = /Ref\. SuperMóvil\s+(\d+)/; // Coincide con "Referencia numérica" seguido de cualquier otro texto
        const referenciaNumericaMatch2 = text.match(regexReferenciaNumerica2);
        const refeyclave2 = referenciaNumericaMatch2
          ? referenciaNumericaMatch2[1]
          : null;
        console.log(refeyclave2);
  
        // Imprimir los datos en la consola
        console.log("Fecha:", fecha2 || "No se encontró fecha");
        console.log("Monto:", monto2 || "No se encontró monto");
        console.log(
          "Beneficiario:",
          beneficiario2 || "No se encontró beneficiario"
        );
  
        document.getElementById("fechaPago").innerText =
          fecha2 || "No se encontró fecha";
        document.getElementById("montoPago").innerText =
          monto2 || "No se encontró monto";
        document.getElementById("beneficiarioPago").innerText =
          beneficiario2 || "No se encontró beneficiario";
        document.getElementById("conceptodelpago").innerText =
          conceptoPago2 || "No se encontró concepto";
        document.getElementById("clavederastreo").innerText =
          refeyclave2 || "No se encontró concepto";
  
        if (!fecha2 || !conceptoPago2) {
          console.log("Texto proporcionado:");
          console.log(text);
  
          const regexFecha3 =
            /\d{1,2}\/(?:Ene|Feb|Mar|Abr|May|Jun|Jul|Ago|Sep|Oct|Nov|Dic)\/\d{4}\s+-\s+\d{1,2}:\d{2}/;
          const fechaMatch3 = text.match(regexFecha3);
          console.log("Coincidencia encontrada:");
          console.log(fechaMatch3);
  
          const fecha3 = fechaMatch3 ? fechaMatch3[0] : null;
          console.log("Tercera validación:");
          console.log(fecha3);
  
          const regexConceptoPago3 = /por\s+el\s+concepto\s+“([^”]+)"/;
          const conceptoPagoMatch3 = text.match(regexConceptoPago3);
          const conceptoPago3 = conceptoPagoMatch3 ? conceptoPagoMatch3[1] : null;
          console.log(conceptoPago3);
  
          document.getElementById("fechaPago").innerText =
            fecha3 || "No se encontró fecha";
          document.getElementById("conceptodelpago").innerText =
            conceptoPago3 || "No se encontró concepto";
  
          if (!fecha3) {
            alert("Comprobante no valido");
            document.getElementById("fechaPago").value = "";
            document.getElementById("montoPago").value = "";
            document.getElementById("beneficiarioPago").value = "";
            document.getElementById("conceptodelpago").value = "";
            document.getElementById("clavederastreo").value = "";
            divpagocargado.style.display = "none";
          }
        }
      }
    });
}
///////////////