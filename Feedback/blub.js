
const bubble = document.createElement('div');
bubble.classList.add('bubble');
document.body.appendChild(bubble);

function createBubble() {
    const size = Math.random() * 60 + 20; 
    const left = Math.random() * window.innerWidth; 
    bubble.style.left = `${left}px`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}
setInterval(createBubble, 800);
