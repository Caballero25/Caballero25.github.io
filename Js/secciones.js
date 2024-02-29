function cargarContenido(event, seccion) {
    var seccionNueva = seccion;
    sessionStorage.setItem('cargarSeccion', seccionNueva);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('contenido').innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar la sección: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', seccion + '.html', true);
    xhr.send();
    event.preventDefault();
}

function cargarStorage(seccion) {
    var seccionNueva = seccion;
    sessionStorage.setItem('cargarSeccion', seccionNueva);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('contenido').innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar la sección: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', seccion + '.html', true);
    xhr.send();
}
var seccionActual = sessionStorage.getItem('cargarSeccion');
if (seccionActual == null || seccionActual == "") {
    document.addEventListener("DOMContentLoaded", function () {
        cargarStorage("Templates/inicio");
    });
} else {
    document.addEventListener("DOMContentLoaded", function () {
        var seccionActual = sessionStorage.getItem('cargarSeccion');
        cargarStorage(seccionActual);
    });
}

function preventRedirection(event) {
    event.preventDefault();
}

//ENLACES
var enlaceWhatsapp = "https://wa.me/573155058792?text=Estoy%20interesado%20en%20recibir%20una%20cotización%20personalizada%20para%20encargar%20un%20proyecto%20académico.";
var enlaceLinkedin = "https://www.linkedin.com/in/jos%C3%A9-david-caballero-mej%C3%ADa-207b13234/"
var enlaceGmail = "mailto:davidcame124@gmail.com?subject=Cotización%20personalizada%20CEAC.&body=Estoy%20interesado%20en%20recibir%20una%20cotización%20personalizada%20para%20encargar%20un%20proyecto%20académico."
var enlaceInstagram = "https://www.instagram.com/dvidcaballero/"
//WhatsApp
var whatsappButtons = document.getElementsByClassName("whatsaapURL");
for (var i = 0; i < whatsappButtons.length; i++) {
    whatsappButtons[i].href = enlaceWhatsapp;
}
//Linkedin
var linkedinButtons = document.getElementsByClassName("linkedinURL");
for (var i = 0; i < linkedinButtons.length; i++) {
    linkedinButtons[i].href = enlaceLinkedin;
}
//Gmail
var gmailButtons = document.getElementsByClassName("gmailURL");
for (var i = 0; i < gmailButtons.length; i++) {
    gmailButtons[i].href = enlaceGmail;
}
//Instagram
var instagramButtons = document.getElementsByClassName("instagramURL");
for (var i = 0; i < instagramButtons.length; i++) {
    instagramButtons[i].href = enlaceInstagram;
}
//FÍN ENLACES
