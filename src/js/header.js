document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.open-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');
  const links = document.querySelectorAll(
    '.backdrop-list-item, .header-list-item'
  );


  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
      if (link.closest('.backdrop')) {
        toogleMenu(false);
      }
    })
  })

  function toogleMenu(show) {
    backdrop.classList.toggle('show', show);
    openMenuBtn.style.display = show ? 'none' : 'block';
    closeMenuBtn.style.display = show ? 'block' : 'none';
  }

  openMenuBtn?.addEventListener('click', () => toogleMenu(true));
  closeMenuBtn?.addEventListener('click', () => toogleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toogleMenu(false);
  })
})