// Select all elements with the .yi class
gsap.from(".yi", {
    opacity: 0,          // Start with 0 opacity (invisible)
    y: 50,               // Move elements 50px down (they will animate upwards)
    duration: 1.0,         // Animation duration for each element (in seconds)
    stagger: 1.0,        // Time delay between each element starting (in seconds)
    ease: "power2.out",  // Easing function for smooth animation
});
let counter = 0;
let counterElement = document.getElementById("l");
let interval = setInterval(function() {
    if (counter <= 100) {
        counterElement.innerText = counter < 10 ? '0' + counter : counter; // Format to show 2 digits
        counter++;
    } else {
        clearInterval(interval);  // Stop the counter when it reaches 100
    }
}, 40);
setTimeout(function() {
    document.getElementById('loader').style.display = 'none';

    // GSAP animation for #page1 AFTER the loader is hidden
    gsap.from("#page1", {
        opacity: 0,
        y: 150,
        duration: 1.0,
        delay: 0 // Optional delay after the loader disappears
    });
}, 4500);
const cursor = document.getElementById('csr');

// Add an event listener to track mouse movements
document.addEventListener('mousemove', (e) => {
    // Get mouse position
    const x = e.clientX;
    const y = e.clientY;
        // Move the custom cursor to the mouse position
        cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`; // 10 is because crs is 20 so to make it in center we use 10
        // Offset by 10px so the cursor centers on the mouse point
});
