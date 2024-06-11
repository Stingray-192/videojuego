const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Configuración del canvas
ctx.canvas.width = 800;
ctx.canvas.height = 600;

// Dibujar suelo
ctx.fillStyle = '#666';
ctx.fillRect(0, 450, 800, 150);

// Dibujar edificios
const buildings = [];
for (let i = 0; i < 10; i++) {
  const building = {
    x: Math.random() * 700 + 50,
    y: 450,
    width: Math.random() * 100 + 50,
    height: Math.random() * 200 + 50,
    color: `hsl(${Math.random() * 360}, 50%, 50%)`
  };
  buildings.push(building);
  ctx.fillStyle = building.color;
  ctx.fillRect(building.x, building.y, building.width, building.height);
}

// Dibujar nubes
const clouds = [];
for (let i = 0; i < 20; i++) {
  const cloud = {
    x: Math.random() * 700 + 50,
    y: Math.random() * 200 + 50,
    width: Math.random() * 100 + 50,
    height: Math.random() * 50 + 20,
    radius: Math.random() * 20 + 10
  };
  clouds.push(cloud);
  ctx.beginPath();
  ctx.arc(cloud.x, cloud.y, cloud.radius, 0, 2 * Math.PI);
  ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cloud.x - cloud.width / 2, cloud.y - cloud.height / 2);
  ctx.bezierCurveTo(cloud.x - cloud.width / 2, cloud.y - cloud.height / 2, cloud.x + cloud.width / 2, cloud.y - cloud.height / 2, cloud.x + cloud.width / 2, cloud.y - cloud.height / 2);
  ctx.bezierCurveTo(cloud.x + cloud.width / 2, cloud.y - cloud.height / 2, cloud.x + cloud.width / 2, cloud.y + cloud.height / 2, cloud.x + cloud.width / 2, cloud.y + cloud.height / 2);
  ctx.bezierCurveTo(cloud.x + cloud.width / 2, cloud.y + cloud.height / 2, cloud.x - cloud.width / 2, cloud.y + cloud.height / 2, cloud.x - cloud.width / 2, cloud.y + cloud.height / 2);
  ctx.bezierCurveTo(cloud.x - cloud.width / 2, cloud.y + cloud.height / 2, cloud.x - cloud.width / 2, cloud.y - cloud.height / 2, cloud.x - cloud.width / 2, cloud.y - cloud.height / 2);
  ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
  ctx.fill();
}

// Dibujar sol
ctx.beginPath();
ctx.arc(400, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = `#F2C464`;
ctx.fill();
ctx.beginPath();
for (let i = 0; i < 10; i++) {
  const angle = i * Math.PI / 5;
  const x = 400 + Math.cos(angle) * 50;
  const y = 100 + Math.sin(angle) * 50;
  ctx.moveTo(400, 100);
  ctx.lineTo(x, y);
  ctx.strokeStyle = `#F2C464`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Agregar imagen en el centro del canvas
const image = new Image();
image.src = 'imagen_central.jpg';
image.onload = function() {
  ctx.drawImage(image, 350, 250, 100, 100);
};