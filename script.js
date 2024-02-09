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

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the main image and placeholder
    const images = document.querySelectorAll(".main-image, .project-img, .about-pic");
    const placeholders = document.querySelectorAll(".placeholder");
    images.forEach((image, index) => {
        // Create a new Image object for each selected image
        const imgLoader = new Image();

        // Set the src attribute of the Image object to the current image's src
        imgLoader.src = image.src

        imgLoader.onload = function () {
            placeholders[index].style.display = "none"; // Hide the placeholder
            image.style.display = "flex"; // Show the loaded image
        };
    });
});