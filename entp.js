function toggleExpand(event) {
    event.preventDefault();
    var image = event.currentTarget; // The clicked image

    // Check if the clicked image already has the 'big' class
    if (image.classList.contains('big')) {
        // If it does, remove it and reset the style
        image.classList.remove('big');
        image.style.zIndex = '';
    } else {
        // If it doesn't, first remove the 'big' class from any other image with 'big'
        document.querySelectorAll('.big').forEach(function(el) {
            el.classList.remove('big'); // Remove 'big' class from all images
            el.style.zIndex = ''; // Reset z-index
        });

        // Then, add the 'big' class to the clicked image
        image.classList.add('big');
        image.style.zIndex = 10;
    }
}
