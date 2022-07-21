navbar = document.getElementById('test');
blockselect = document.getElementsByClassName('selection');
// console.log(window.scrollY);

function changeNavbarColor() {
    if (window.scrollY !== 0) {
        navbar.style.display = 'block';
        if (darkMode) {
            for (i = 0; i < 4; i++) {
                blockselect[i].style.backgroundColor = '#222';
                blockselect[i].style.boxShadow = '0 0 5px rgba(128,128,128,0.5)';
            }
        } else {
            for (i = 0; i < 4; i++) {
                blockselect[i].style.boxShadow = '0 0 5px rgba(128,128,128,0.5)';
                blockselect[i].style.backgroundColor = '#fff';
            }
        }
    } else {
        navbar.style.display = 'none';
        for (i = 0; i < 4; i++) {
            blockselect[i].style.boxShadow = '0 0 0 #000';
            blockselect[i].style.backgroundColor = 'transparent';
        }
    }
}

var darkMode = false;
lightCss = document.getElementById('light-css');
darkCss = document.getElementById('dark-css');
themeBtn = document.getElementById('toDarkMode');
mainBody = document.getElementsByClassName('main');
function changeTheme() {
    console.log(themeBtn.innerHTML);
    if (!darkMode) {
        themeBtn.innerHTML = "Dark mode:  On"
        darkMode = true;
        darkCss.media = '';
        lightCss.media = 'none';
        changeNavbarColor();
    } else {
        themeBtn.innerHTML = "Dark mode: Off"
        darkMode = false;
        darkCss.media = 'none';
        lightCss.media = '';
    }
}