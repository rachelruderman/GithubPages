export const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = 0;
        preloader.style.zIndex = -1;
    }
};