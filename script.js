// Active tab highlighting on scroll
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.filecard, .hero');

const setActive = (id) => {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
};

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.filecard').forEach(el => revealObserver.observe(el));

  const tabObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.id) {
        setActive(entry.target.id);
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  document.querySelectorAll('section[id]').forEach(el => tabObserver.observe(el));
} else {
  document.querySelectorAll('.filecard').forEach(el => el.classList.add('in-view'));
}
