const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', () => {
        alert(`Has clickeado en la sección de ${section.id}`);
    });
});