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
    var targetElement = event.target;

    // Handling if the target is an image inside a polygon
    if (targetElement.tagName.toLowerCase() === 'img' && targetElement.parentElement.classList.contains('polygon')) {
        targetElement = targetElement.parentElement;
    }

    // Check if the clicked element already has the 'big' class
    if (targetElement.classList.contains('big')) {
        // If it does, remove it and reset the style
        targetElement.classList.remove('big');
        targetElement.style.zIndex = '';
    } else {
        // If it doesn't, first remove the 'big' class from any other element with 'big'
        document.querySelectorAll('.big').forEach(function(el) {
            el.classList.remove('big');
            el.style.zIndex = '';
        });

        // Then, add the 'big' class to the clicked element
        targetElement.classList.add('big');
        targetElement.style.zIndex = 10;
    }
}
