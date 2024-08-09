const links = document.querySelector('.links');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    links.classList.toggle('active');
});