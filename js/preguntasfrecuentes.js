const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach(pregunta => {
  pregunta.addEventListener('click', (e) => {
    e.currentTaret.classList.toggle('activa');

    const respuesta = pregunta.querySelector('.respuesta');
    const alturaRealRespuesta = respuesta.scrollHeight;
    
    if(!respuesta.style.maxHeight){
        respuesta.style.maxHeight = alturaRealRespuesta + 'px';
    } else {
      
    }
  })
}