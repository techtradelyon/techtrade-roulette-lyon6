const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const resultDiv = document.getElementById('result');

const options = ['5% de réduction', 'Coque offerte', 'Câble offert', 'Essayez encore'];
let angle = 0;

function drawWheel() {
    const numOptions = options.length;
    const arcSize = (2 * Math.PI) / numOptions;
    for (let i = 0; i < numOptions; i++) {
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 150, i * arcSize, (i + 1) * arcSize);
        ctx.fillStyle = i % 2 === 0 ? '#00bfff' : '#87cefa';
        ctx.fill();
        ctx.stroke();
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(i * arcSize + arcSize / 2);
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.fillText(options[i], 30, 0);
        ctx.restore();
    }
}

drawWheel();

spinBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selected = options[randomIndex];
    resultDiv.textContent = '🎁 Résultat : ' + selected;
});
