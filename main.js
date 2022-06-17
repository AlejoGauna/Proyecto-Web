

								//CARRUSEL DE IMAGENES DE VERSION DE CELULAR.
const fila = document.querySelector('.contenedor-carousel');
const comidas = document.querySelectorAll('.platillo');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//flecha derecha
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//para la flecha izquierda
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//Paginacion
const numeroPaginas = Math.ceil(comidas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

//Hover
comidas.forEach((platillo) => {
	platillo.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			comidas.forEach(platillo => platillo.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	comidas.forEach(platillo => platillo.classList.remove('hover'));
});