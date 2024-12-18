const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Configurar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Limpiar el canvas con un fondo blanco
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Funciones para dibujar partes de Snoopy
function drawHead() {
    ctx.beginPath();
    ctx.arc(200, 200, 80, 0, Math.PI * 2); // Cabeza (círculo)
    ctx.stroke();
}

function drawEar() {
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(180, 100); // Oreja
    ctx.lineTo(220, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill(); // Rellenar la oreja
}

function drawFace() {
    // Ojo
    ctx.beginPath();
    ctx.arc(190, 190, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();

    // Boca
    ctx.beginPath();
    ctx.moveTo(180, 220);
    ctx.quadraticCurveTo(200, 240, 220, 220); // Línea curva
    ctx.stroke();
}

function drawBody() {
    ctx.beginPath();
    ctx.moveTo(200, 280); // Inicio del cuerpo
    ctx.lineTo(220, 400);
    ctx.lineTo(180, 400);
    ctx.closePath();
    ctx.stroke();
}

// Control del flujo de dibujo
let step = 0;
function drawSnoopy() {
    if (step === 0) drawHead();
    if (step === 1) drawEar();
    if (step === 2) drawFace();
    if (step === 3) drawBody();

    step++;
    if (step < 4) setTimeout(drawSnoopy, 500); // Llamar recursivamente
}

// Iniciar el dibujo
drawSnoopy();
