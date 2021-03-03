import buildHome from './buildHome';
import buildMenu from './buildMenu';
import buildContact from './buildContact';


(function() {
    const switchTabs = function() {
        document.querySelector('.selected-tab').className = 'header__nav-item unselected-tab';
        this.className = 'header__nav-item selected-tab';
        document.getElementById('content').innerHTML = '';
        if(this.innerHTML === 'Home') buildHome();
        if(this.innerHTML === 'Menu') buildMenu();
        if(this.innerHTML === 'Contact') buildContact();
    }


    buildHome();
    Array.from(document.querySelectorAll('.header__nav-item')).forEach(el => {
        el.addEventListener('click', switchTabs);
    });
})();
