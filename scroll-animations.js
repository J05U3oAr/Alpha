const revealItems = document.querySelectorAll('.reveal');
const teamSection = document.getElementById('equipo');
const contactSection = document.getElementById('contacto');
const footer = document.querySelector('.footer');
const heroParticles = document.querySelector('.hero-particles');

if (heroParticles) {
  const particleBlueprints = [
    { size: 16, left: 10, duration: 11, delay: -2, driftX: 10, driftY: -210, opacity: 0.42 },
    { size: 9, left: 22, duration: 8.5, delay: -5, driftX: -6, driftY: -170, opacity: 0.34 },
    { size: 20, left: 30, duration: 12.5, delay: -1, driftX: 14, driftY: -225, opacity: 0.4 },
    { size: 12, left: 42, duration: 9.5, delay: -4, driftX: -10, driftY: -185, opacity: 0.36 },
    { size: 26, left: 56, duration: 14, delay: -7, driftX: 18, driftY: -240, opacity: 0.26, mist: true },
    { size: 11, left: 63, duration: 9, delay: -3, driftX: 7, driftY: -175, opacity: 0.33 },
    { size: 18, left: 72, duration: 12, delay: -6, driftX: -12, driftY: -215, opacity: 0.38 },
    { size: 14, left: 81, duration: 10.5, delay: -2.5, driftX: 9, driftY: -190, opacity: 0.31 },
    { size: 24, left: 88, duration: 13.5, delay: -8, driftX: -16, driftY: -230, opacity: 0.24, mist: true },
  ];

  particleBlueprints.forEach((particleData) => {
    const particle = document.createElement('span');
    particle.className = particleData.mist
      ? 'hero-particle hero-particle--mist'
      : 'hero-particle';

    particle.style.width = `${particleData.size}px`;
    particle.style.height = `${particleData.size}px`;
    particle.style.left = `${particleData.left}%`;
    particle.style.animationDuration = `${particleData.duration}s`;
    particle.style.animationDelay = `${particleData.delay}s`;
    particle.style.setProperty('--drift-x', `${particleData.driftX}px`);
    particle.style.setProperty('--drift-y', `${particleData.driftY}px`);
    particle.style.setProperty('--particle-opacity', particleData.opacity);

    heroParticles.appendChild(particle);
  });
}

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

const eduTabs = document.querySelectorAll('[data-tab-target]');
const eduPanels = document.querySelectorAll('.edu-panel');

eduTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-tab-target');
    const targetPanel = document.getElementById(targetId);

    if (!targetPanel) {
      return;
    }

    eduTabs.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });

    eduPanels.forEach((panel) => {
      panel.classList.remove('active');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    targetPanel.classList.add('active');
  });
});
