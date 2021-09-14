const canvas = document.getElementById('sandbox');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


function Circulo (x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    
    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.dy = Math.floor(Math.random() * 4) + 1;
    this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
    }
 
    this.animate = function () {
        this.x += this.dx;
        this.y += this.dy;
  
        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        } 
            this.draw();
            
    }
}

function Retangulo (x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.dy = Math.floor(Math.random() * 4) + 1;
    this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.r, 90);
        ctx.fill();
    }
 
    this.animate = function () {
        this.x += this.dx;
        this.y += this.dy;
  
        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        } 
            this.draw();
            
    }
}

function Triangulo (x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;

    this.dx = Math.floor(Math.random() * 4) + 1;
    this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.dy = Math.floor(Math.random() * 4) + 1;
    this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

    this.draw = function () {
        ctx.clearRect(this.x, this.y, this.r, Math.PI / 1);
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.moveTo(x,y);
        ctx.lineTo(x + 50, y + (-80));
        ctx.lineTo(x + 100, y);
        ctx.scale(1,1);
        ctx.fill();
    }
 //acho q o problea dos triangulos está aqui, pq só fui copiando dos que deram certo
 
    this.animate = function () {
        this.x += this.dx;
        this.y += this.dy;
  
        if (this.x + this.r > canvas.width || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.r > canvas.height || this.y - this.r < 0) {
            this.dy = -this.dy;
        } 
            this.draw();
            
    }
}



const gerar = [];
    for (let i = 0; i < 20; i++) {
        let r = Math.floor(Math.random() * 30) + 15;
        let x = Math.random() * (canvas.width - r * 2) + r;
        let y = Math.random() * (canvas.height - r * 2) + r;
        let c = 'red';
        gerar.push(new Circulo(x, y, r, c));
        gerar.push(new Retangulo(x, y, r, c));
        gerar.push(new Triangulo(x, y, r, c));
    }

canvas.addEventListener('click', function (e) {
    let r = Math.floor(Math.random() * 30) + 15;
    gerar.push(new Circulo(e.clientX, e.clientY, r, 'blue'));
    gerar.push(new Retangulo(e.clientX, e.clientY, r, 'yellow'));
    gerar.push(new Triangulo(e.clientX, e.clientY, r, 'green'));
});
  
function Update () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
for (let i = 0; i < gerar.length; i++) {
    let gera = gerar[i];
    gera.animate();
}
    

    requestAnimationFrame(Update);
    
}
Update();
