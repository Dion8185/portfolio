const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
    sidebar.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target !== sidebar && e.target !== burger && !sidebar.contains(e.target)) {
        sidebar.style.display = 'none';
    }
});