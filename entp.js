document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all elements with the class 'polygon'
    document.querySelectorAll('.gallery .polygon').forEach(function(polygon) {
        polygon.addEventListener('click', toggleExpand);
    });

    // Add click event listeners to all img elements inside the class 'thumbnail'
    document.querySelectorAll('.thumbnail img').forEach(function(img) {
        img.addEventListener('click', function(event) {
            toggleExpand(event, this); // Pass 'this' to refer to the img element
        });
    });
});

function toggleExpand(event, element) {
    event.preventDefault();
    var image = element || event.currentTarget; // Use the passed element or the event's currentTarget

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
