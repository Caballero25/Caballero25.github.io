function mostrarMas() {

    var botonMostrarMas = document.getElementById('botonMostrarMas');
    var parrafoOculto = document.querySelector('.conocenosThirdSection .conocenosThirdSectionOculto');
    var opciones = document.querySelector('#botonMostrarMas .button-text');
    botonMostrarMas.addEventListener('click', function() {
      if (opciones.textContent === 'Leer más...') {
        parrafoOculto.style.display = 'block';
        opciones.textContent = 'Leer menos...';
      }  else {
        parrafoOculto.style.display = 'none';
        opciones.textContent = 'Leer más...';
      }
    });
}

function startCounter() {
  var container = document.querySelector(".conocenosFourthSection"); 
  var containerPosition = container.getBoundingClientRect().top;
  var triggerPosition = containerPosition + window.scrollY;

  function animateCounters() {
    var counters = document.querySelectorAll('.js_count');
    counters.forEach(function(counter, index) {
      var target = parseInt(counter.textContent);
      var current = 0;
      var increment = Math.ceil(target / 60); // Velocidad del contador (60 para 60fps)
      var interval;
      if (index === 0) {
        interval = setInterval(function() {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          counter.textContent = current;
        }, 150); // Intervalo de tiempo mayor para el primer contador
      } else {
        interval = setInterval(function() {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          counter.textContent = current;
        }, 40); // Intervalo de tiempo para 60fps
      }
    });
  }

  function handleScroll() {
    var anchoPantalla = window.innerWidth
    if (anchoPantalla < 600) {
      var subtTrigger = 200
    } else {
      var subtTrigger = 550
    }
    if (window.scrollY > triggerPosition - subtTrigger) {
      window.removeEventListener("scroll", handleScroll);
      animateCounters();
    }
  }

  window.addEventListener("scroll", handleScroll);
}

