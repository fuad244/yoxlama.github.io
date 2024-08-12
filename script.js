function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    animateDisplay();
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    animateDisplay();
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
    animateDisplay();
}

// Klavye kısayolları için olay dinleyici
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const display = document.getElementById('display');

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

// Giriş alanı animasyonu
function animateDisplay() {
    const display = document.getElementById('display');
    display.classList.remove('fade');
    void display.offsetWidth; // Yeniden akış için
    display.classList.add('fade');
}

// Buton tıklama animasyonu için olay dinleyici
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.remove('click');
        void button.offsetWidth; // Yeniden akış için
        button.classList.add('click');
    });
});
