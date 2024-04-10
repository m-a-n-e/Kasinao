function changeColor(btn) {
    var originalColor = btn.style.backgroundColor;
    var originalBorderColor = btn.style.borderColor;

    btn.style.backgroundColor = 'var(--kasino-5)';
    btn.style.borderColor = 'var(--kasino-5)'; // Adicione a cor da borda desejada aqui

    var interval = setInterval(function () {
        btn.style.backgroundColor = (btn.style.backgroundColor === originalColor) ? 'var(--kasino-5)' : originalColor;
        btn.style.borderColor = (btn.style.borderColor === originalBorderColor) ? 'var(--kasino-1)' : originalBorderColor;
    }, 500);

    setTimeout(function () {
        clearInterval(interval);
        btn.style.backgroundColor = originalColor;
        btn.style.borderColor = originalBorderColor;
    }, 1000);
}
