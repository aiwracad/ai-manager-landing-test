(() => {
  const reference = document.getElementById('problems');
  const root = document.documentElement;
  if (!reference) return;
  const update = () => {
    if (window.matchMedia('(min-width:1024px)').matches) {
      root.style.setProperty('--reference-screen-height', `${Math.ceil(reference.getBoundingClientRect().height)}px`);
    } else {
      root.style.removeProperty('--reference-screen-height');
    }
  };
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(reference);
  window.addEventListener('resize', update, { passive:true });
  window.addEventListener('load', update, { once:true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(update);
  update();
})();

// Static preview: submission stays disabled until a backend is configured.
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", event => event.preventDefault());
});
