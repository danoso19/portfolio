    const swipeBar = document.querySelector('.swipe-bar-block');
    const header = document.querySelector('header');
    let isDragging = false;
    let startY;
    let startHeight;

    // Função para começar o arraste (para mouse e toque)
    const startDrag = (e) => {
        isDragging = true;
        // Para toque, usamos e.touches[0].clientY, para mouse, usamos e.clientY
        startY = e.touches ? e.touches[0].clientY : e.clientY;
        startHeight = header.offsetHeight;

        // Desativa o comportamento de rolagem enquanto arrasta
        document.body.style.overflow = 'hidden'; // Desativa a rolagem da página
        document.body.style.userSelect = 'none'; // Desativa a seleção de texto enquanto arrasta
    };

    // Função para arrastar (para mouse e toque)
    const doDrag = (e) => {
        if (isDragging) {
            // Para toque, usamos e.touches[0].clientY, para mouse, usamos e.clientY
            const deltaY = (e.touches ? e.touches[0].clientY : e.clientY) - startY;
            const newHeight = startHeight + deltaY;

            // Define a nova altura, com um limite máximo
            if (newHeight >= 165 && newHeight <= 250) {
                header.style.height = newHeight + 'px';
            }
        }
    };

    // Função para terminar o arraste (para mouse e toque)
    const stopDrag = () => {
        isDragging = false;
        document.body.style.overflow = ''; // Restaura a rolagem da página
        document.body.style.userSelect = ''; // Restaura a seleção de texto
    };

    // Adiciona eventos para mouse
    swipeBar.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);

    // Adiciona eventos para toque
    swipeBar.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', (e) => {
        // Previne a rolagem da página enquanto arrasta
        e.preventDefault();
        doDrag(e);
    });
    document.addEventListener('touchend', stopDrag);

    // Impede que o usuário arraste de forma indesejada ao clicar na swipe-bar
    swipeBar.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });









    //script para expadir a descrição automaticamente

    function autoResize(textarea) {
        // Reseta a altura para recalcular corretamente
        textarea.style.height = 'auto';
        // Ajusta a altura conforme o conteúdo, com limite máximo de altura
        textarea.style.height = Math.min(textarea.scrollHeight, 300) + 'px';
    }