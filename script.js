/**
 * Toggles the menu and icon by adding or removing the "open" class.
 *
 * @return {void} This function does not return a value.
 */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}