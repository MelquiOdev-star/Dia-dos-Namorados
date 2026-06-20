// Função para enviar um beijo
function enviarBeijo() {
    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.className = 'floating-kiss';
    document.body.appendChild(kiss);

    setTimeout(() => {
        document.body.removeChild(kiss);
    }, 3000);
}

// Função para fazer chover rosas
function choverRosas() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const rose = document.createElement('div');
            rose.textContent = '🌹';
            rose.className = 'falling-rose';
            rose.style.left = Math.random() * 100 + 'vw';
            document.body.appendChild(rose);

            setTimeout(() => {
                if (document.body.contains(rose)) {
                    document.body.removeChild(rose);
                }
            }, 5000);
        }, i * 200);
    }
}

// Função para mostrar amor extra
function mostrarAmor() {
    const message = document.createElement('div');
    message.textContent = 'Eu te amo mais do que tudo, Ana Julia! ❤️';
    message.className = 'love-message';
    document.body.appendChild(message);

    setTimeout(() => {
        document.body.removeChild(message);
    }, 4000);
}