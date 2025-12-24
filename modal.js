
const burgerBtn = document.querySelector('.top--page--menu');
    const mobileMenu = document.querySelector('#mobileMenu');
    const closeEls = mobileMenu?.querySelectorAll('[data-close]');

    function openMenu() {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
    if (!mobileMenu || !burgerBtn) return;
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    }

    burgerBtn?.addEventListener('click', openMenu);

    closeEls?.forEach((el) => el.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
    });
