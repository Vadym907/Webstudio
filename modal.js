(() => {
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".solution--modal--content--close");

    openBtn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

})();
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    menu.classList.toggle('active');
});
