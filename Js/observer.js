const targetNode = document.getElementById('contenido');

// Opciones para el observador (qué tipo de mutaciones nos interesan)
const config = { childList: true };

//Devolución de llamada para manejar los cambios en el DOM
const callback = function (mutationsList, observer) {
    if (mutationsList[0].type === 'childList') {
        let child = targetNode.firstElementChild.id;
        switch (child) {
            case "inicio":
                sliderLoader();
                break;
            case "conocenos":
                mostrarMas();
                startCounter();
                break;
        }
    }
};

//Instancia de MutationObserver con la función de devolución de llamada
const observer = new MutationObserver(callback);

//Observar el nodo objetivo y sus descendientes
observer.observe(targetNode, config);
