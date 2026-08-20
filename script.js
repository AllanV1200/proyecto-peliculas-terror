// Esperar a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CAMBIADOR DE TEMA (MODO OSCURO / MODO CLARO)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', () => {
        // Alterna la clase 'light-theme' en el body
        document.body.classList.toggle('light-theme');

        // Actualizar el texto del botón según el estado
        if (document.body.classList.contains('light-theme')) {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Oscuro';
        }
    });

    /* ==========================================================================
       3. MINI-HERRAMIENTA: QUIZ INTERACTIVO DE CINE DE TERROR
       ========================================================================== */
    document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    let score = 0;
    const totalQuestions = 8;

    // Respuestas seleccionadas
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value;
    const q6 = document.getElementById('q6').value;
    const q7 = document.getElementById('q7').value;
    const q8 = document.getElementById('q8').value;

    // Validación de respuestas correctas
    if (q1 === 'b') score++; // Michael Myers
    if (q2 === 'a') score++; // Veo gente muerta
    if (q3 === 'b') score++; // Pazuzu
    if (q4 === 'a') score++; // Elm Street
    if (q5 === 'a') score++; // ¿Quieres jugar un juego?
    if (q6 === 'b') score++; // Caja rompecabezas
    if (q7 === 'a') score++; // El Conjuro
    if (q8 === 'b') score++; // Darle de comer después de medianoche

    // Cálculo y mensaje personalizado
    const percentage = Math.round((score / totalQuestions) * 100);
    const resultBox = document.getElementById('quiz-result');
    let badge = '';

    if (score === 8) {
        badge = '👑 ¡Maestro Legendario del Terror!';
    } else if (score >= 5) {
        badge = '🔪 Sobreviviente Conocedor';
    } else {
        badge = '💀 Primera Víctima de la Película';
    }

    resultBox.innerHTML = `
        <h3>Resultados de ${username}</h3>
        <p>Puntaje: <strong>${score} / ${totalQuestions}</strong> (${percentage}%)</p>
        <p class="badge">${badge}</p>
    `;

    resultBox.classList.remove('hidden');
});

});