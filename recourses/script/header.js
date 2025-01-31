const nav = document.getElementById('navigator');
const menu = document.getElementById('menu');
const closeIcon = document.getElementById('close');
let isMenuClicked = false;

const toggleNav = () => {
    nav.classList.toggle('active');
}

const clickMenu = () => {
    if (!isMenuClicked) {
        menu.style.display = 'none';
        closeIcon.style.display = 'inline-block';
        nav.style.display = 'block'
        toggleNav()
        isMenuClicked = true;
    } else {
        menu.style.display = 'inline-block';
        closeIcon.style.display = 'none';
        nav.style.display = 'none'
        toggleNav()
        isMenuClicked = false;
    }
}


const updateHeader = () => {
    console.log(window.innerWidth)
 if (window.innerWidth > 700) {
    nav.style.display = 'inline-block';
    menu.style.display = 'none';
    closeIcon.style.display = 'none'
 }  else {
    nav.style.display = 'none';
    menu.style.display = 'inline-block';
 }
}

menu.onclick = clickMenu;
closeIcon.onclick = clickMenu;
window.onload = updateHeader;
window.onresize = updateHeader;