const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.solution--modal--content--close');

openBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});
closeBtn.addEventListener('click', () => {
    closeModal();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

const burgerBtn = document.querySelector('.header_page--menu');
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
