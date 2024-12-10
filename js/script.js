function burgerMenu(selector) {
    const menu = document.querySelector(selector);
    const button = menu.querySelector('.burger-menu_button');
    const overlay = menu.querySelector('.burger-menu_overlay');
    const expandableLinks = menu.querySelectorAll('.expandable');
    const sections = document.querySelectorAll('section');
    const defaultSection = document.querySelector('#section-1');
    const links = menu.querySelectorAll('.burger-menu_link');
    const toggleBtns = document.querySelectorAll('.toggle-btn');


    
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    defaultSection.style.display = 'flex';

    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });


    overlay.addEventListener('click', () => toggleMenu());

    function toggleMenu() {
        menu.classList.toggle('burger-menu_active');
    }


    expandableLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const submenu = link.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                e.preventDefault();
                toggleSubmenu(link);
            }
        });
    });


    function toggleSubmenu(link) {
        const isOpen = link.classList.contains('open');
        closeAllSubmenus();
        if (!isOpen) {
            link.classList.add('open');
            const submenu = link.nextElementSibling;
            if (submenu) submenu.style.display = 'block';
        } else {
            link.classList.remove('open');
            const submenu = link.nextElementSibling;
            if (submenu) submenu.style.display = 'none';
        }
    }


    function closeAllSubmenus() {
        expandableLinks.forEach((link) => {
            link.classList.remove('open');
            const submenu = link.nextElementSibling;
            if (submenu) submenu.style.display = 'none';
        });
    }


    toggleBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const hiddenText = e.target.closest('.text-container').querySelector('.hidden-text');
            const isVisible = hiddenText.style.display === 'block';

            hiddenText.style.display = isVisible ? 'none' : 'block';
            e.target.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(90deg)';
        });
    });





      document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const hiddenText = button.nextElementSibling; // Знаходимо наступний елемент (текст)
    
            if (hiddenText.style.display === 'block') {
                hiddenText.style.display = 'none'; 
                button.classList.remove('expanded');
            } else {
                hiddenText.style.display = 'block'; 
                button.classList.add('expanded'); 
            }
        });
    });
    





    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.querySelector(`#${targetId}`);

            sections.forEach((section) => {
                section.style.display = 'none';
            });

            if (targetSection) {
                targetSection.style.display = 'flex';
            }
        });
    });
}

burgerMenu('.burger-menu');
