const swipeBar = document.querySelector('header');
const header = document.querySelector('header');
let isDragging = false;
let startY = 0;
let startHeight = 0;

// Função para iniciar o arraste
const startDrag = (e) => {
    isDragging = true;

    // Registra a posição inicial (toque ou mouse)
    startY = e.touches ? e.touches[0].clientY : e.clientY;

    // Obtém a altura atual do header
    startHeight = header.offsetHeight;

    // Previne comportamentos indesejados durante o arraste
    document.body.style.overflow = 'hidden'; // Impede rolagem
    document.body.style.userSelect = 'none'; // Impede seleção de texto
    header.style.transition = 'none'; // Remove transições durante o arraste
};

// Função de arraste
const doDrag = (e) => {
    if (!isDragging) return;


    // Impede o comportamento padrão para evitar rolagem
    e.preventDefault();

    // Calcula o deslocamento
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const deltaY = currentY - startY;

    // Calcula a nova altura com base no deslocamento
    const newHeight = startHeight + deltaY;

    // Aplica limites à altura do header
    if (window.innerWidth >= 769) { 
        // Para telas maiores
        if (newHeight >= 150 && newHeight <= 250) {
            header.style.height = `${newHeight}px`;
        }
    } else { 
        // Para telas menores
        if (newHeight >= 160 && newHeight <= 300) {
            header.style.height = `${newHeight}px`;
        }
    }

};

// Função para finalizar o arraste
const stopDrag = () => {
    if (!isDragging) return;

    isDragging = false;

    // Restaura o comportamento normal
    document.body.style.overflow = '';
    document.body.style.userSelect = '';

    // Ajusta a altura final do header para o valor mais próximo
    const currentHeight = header.offsetHeight;
    let finalHeight;

    // Verifica a largura da janela (não do estilo do body)
    if (window.innerWidth >= 769) {
        // Define o estado final para telas maiores
        finalHeight = currentHeight > 200 ? 250 : 150;
    } else {
        // Define o estado final para telas menores
        finalHeight = currentHeight > 250 ? 260 : 185;
    }

    const swipeDown = document.querySelector('.swipe-down');

    // Aplica o valor calculado de altura ao header
    header.style.height = `${finalHeight}px`;
    header.style.transition = 'height 0.3s ease'; // Reintroduz transições suaves

    // Esconde o elemento de swipe-down
    if (swipeDown) {
        swipeDown.style.display = 'none';
    }
};


// Adiciona eventos para mouse
swipeBar.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', doDrag);
document.addEventListener('mouseup', stopDrag);

// Adiciona eventos para toque
swipeBar.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', (e) => {
    if (isDragging) e.preventDefault(); // Previne rolagem
    doDrag(e);
});
document.addEventListener('touchend', stopDrag);

// Impede comportamento indesejado ao arrastar
swipeBar.addEventListener('dragstart', (e) => e.preventDefault());













document.addEventListener("DOMContentLoaded", () => {
    // Remove os atributos 'visibility' e 'opacity' do body
    const body = document.body;
    body.style.visibility = "visible";
    body.style.opacity = "1";
    body.style.width = "100%";
    body.style.alignItems = "center";

    // Inicia GSAP Timeline
    const timeline = gsap.timeline();

    timeline
        .from("header", { 
            duration: 1, 
            opacity: 0, 
            y: -40, 
            ease: "power2.out" 
        })  
        .from(".about", { 
            duration: 0.8, 
            opacity: 0, 
            xPercent: -100, 
            ease: "power2.out" 
        }, "-=0.5")
        .from(".tecnologias .tecnologia", { 
            duration: 0.6, 
            opacity: 0, 
            stagger: 0.2, 
            ease: "power2.out" 
        }, "-=0.5")
        .from(".projects .project", { 
            duration: 0.6, 
            opacity: 0, 
            y: 50, 
            stagger: 0.2, 
            ease: "power2.out" 
        }, "-=0.5")
        .from(".contact", { 
            duration: 0.8, 
            opacity: 0, 
            y: 50, 
            ease: "power2.out" 
        }, "-=0.5")
        .from("footer", { 
            duration: 0.8, 
            opacity: 0, 
            y: 50, 
            ease: "power2.out" 
        }, "-=0.3");
});

document.getElementById('github-button').addEventListener('click', () => {
    window.location.href = 'https://github.com/danoso19';
});

document.getElementById('instagram-button').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/danielfssb.dev/';
});

document.getElementById('linkedin-button').addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com';
});