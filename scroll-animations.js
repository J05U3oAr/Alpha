const revealItems = document.querySelectorAll('.reveal');
const teamSection = document.getElementById('equipo');
const contactSection = document.getElementById('contacto');
const footer = document.querySelector('.footer');

if (teamSection) {
  const teamLabel = teamSection.previousElementSibling;

  if (teamLabel?.classList.contains('section-label')) {
    teamLabel.textContent = 'Sección 6 — Áreas de trabajo';
  }

  const duplicateLabel = teamLabel?.previousElementSibling;

  if (duplicateLabel?.classList.contains('section-label')) {
    duplicateLabel.remove();
  }
}

if (contactSection) {
  const contactLabel = contactSection.previousElementSibling;

  if (contactLabel?.classList.contains('section-label')) {
    contactLabel.textContent = 'Sección 7 — Llamada a la acción';
  }
}

if (footer) {
  const footerLabel = footer.previousElementSibling;

  if (footerLabel?.classList.contains('section-label')) {
    footerLabel.textContent = 'Sección 8 — Footer';
  }
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealItems.forEach((item) => {
  if (item.classList.contains('is-visible')) {
    return;
  }

  revealObserver.observe(item);
});
