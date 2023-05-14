var isMenuOn = false;

function showMenu() {
    isMenuOn = !isMenuOn;
    console.log(isMenuOn);
    let menu = document.getElementById('menu-container');
    if(isMenuOn) return menu.style.visibility = 'visible';
    return menu.style.visibility = 'hidden';
}
