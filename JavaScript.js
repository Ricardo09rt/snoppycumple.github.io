const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Configurar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cargar imagen de fondo para referencia
const snoopyImage = new Image();
snoopyImage.src = 'https://i.imgur.com/kX0M9fH.png'; // URL de Snoopy como fondo
snoopyImage.onload = () => {
    ctx.drawImage(snoopyImage, 0, 0, canvas.width, canvas.height);
    startDrawing(); // Iniciar dibujo automático después de cargar la imagen
};

// Coordenadas predefinidas para dibujar a Snoopy
const snoopyPath = [
    [100, 200], [110, 190], [120, 180], [130, 170], [140, 160], [150, 150],
    [160, 140], [170, 135], [180, 130], [190, 135], [200, 140], [210, 150],
    [220, 160], [230, 170], [240, 180], [250, 190], [260, 200]
];

let index = 0;

// Función para iniciar el dibujo automático
function startDrawing() {
    if (index >= snoopyPath.length - 1) return;

    // Configuración del estilo del trazo
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Trazar línea entre dos puntos
    const [x1, y1] = snoopyPath[index];
    const [x2, y2] = snoopyPath[index + 1];

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    index++;
    setTimeout(startDrawing, 100); // Llamar recursivamente con un retraso
}
