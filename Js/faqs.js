function faqsDesplazables() {
    const items = document.querySelectorAll(".faqsThirdSectionaccordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

var contactanosFaqs = document.getElementsByClassName("fourthSectionBtn")
contactanosFaqs[0].href = "https://wa.me/573155058792?text=Hola,%20tengo%20algunas%20preguntas%20con%20respecto%20a%20los%20servicios%20del%20CEAC.";
}
