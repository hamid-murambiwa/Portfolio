const menuBtn = document.querySelector('.menu');
const menuList = document.querySelector('.navlinks');
const menuItems = Array.from(document.querySelectorAll('.navlink-items'));
const menuIcon = document.querySelector('.menu-icons');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');

    if (menuBtn.classList.contains('active')) {
        menuIcon.src = './images/Disabled.svg';
    } else {
        location.reload();
    }
});

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menuList.classList.toggle('active');
        menuIcon.src = './images/Menu.svg';
    })
})