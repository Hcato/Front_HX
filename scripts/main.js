document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        const moveX = (Math.random() - 2) * 25; 
        const moveY = (Math.random() - 2) * 25; 
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)'; 
    });
});