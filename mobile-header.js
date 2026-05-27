document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('sidebarToggle');
    const mobileMenu = document.getElementById('mobileHeaderMenu');

    if (!toggleButton || !mobileMenu) return;

    const isMobileViewport = () => window.matchMedia('(max-width: 768px)').matches;

    const setMenuOpen = (isOpen) => {
        document.body.classList.toggle('mobile-nav-open', isOpen);
        toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    };

    setMenuOpen(false);

    toggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        setMenuOpen(!document.body.classList.contains('mobile-nav-open'));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('click', (event) => {
        if (!document.body.classList.contains('mobile-nav-open')) return;
        if (mobileMenu.contains(event.target) || toggleButton.contains(event.target)) return;
        setMenuOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && document.body.classList.contains('mobile-nav-open')) {
            setMenuOpen(false);
            toggleButton.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (!isMobileViewport()) {
            setMenuOpen(false);
        }
    });
});