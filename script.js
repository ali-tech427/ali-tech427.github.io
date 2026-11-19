const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.section-kicker, .about-grid, .experience-card, .education-row, .project-card, .skill-group, .contact-inner').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
const copyButton = document.querySelector('.copy-button');
const toast = document.querySelector('.toast');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  } catch {
    window.location.href = 'mailto:' + copyButton.dataset.copy;
  }
});
