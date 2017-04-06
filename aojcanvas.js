window.onload = function() {
	var aojcanvas = document.getElementById('canvas1');
	var ctx = aojcanvas.getContext('2d');
	ctx.beginPath();
	ctx.fillStyle = 'blue';
	ctx.strokeStyle = 'red';
	ctx.rect(10,10,200,100);
	ctx.rect(220,10,50,50);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.rect(50,50,100,100);
	ctx.stroke();
}