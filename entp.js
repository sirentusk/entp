document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all elements with the class 'polygon'
    document.querySelectorAll('.gallery .polygon').forEach(function(polygon) {
        polygon.addEventListener('click', toggleExpand);
    });

    // Add click event listeners to all img elements inside the class 'thumbnail'
    document.querySelectorAll('.thumbnail img').forEach(function(img) {
        img.addEventListener('click', toggleExpand);
    });
});

function toggleExpand(event) {
    event.preventDefault();
    var image = event.currentTarget; // The clicked element

    // Check if the clicked element already has the 'big' class
    if (image.classList.contains('big')) {
        // If it does, remove it and reset the style
        image.classList.remove('big');
        image.style.zIndex = '';
    } else {
        // If it doesn't, first remove the 'big' class from any other element with 'big'
        document.querySelectorAll('.big').forEach(function(el) {
            el.classList.remove('big'); // Remove 'big' class from all elements
            el.style.zIndex = ''; // Reset z-index
        });

        // Then, add the 'big' class to the clicked element
        image.classList.add('big');
        image.style.zIndex = 10;
    }
}
