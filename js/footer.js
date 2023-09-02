const contacto = document.querySelector('#btnConsulta');


contacto.addEventListener('click', (e) => {
    e.preventDefault()
    
    const emailConsulta = document.querySelector('#emailConsulta').value;
    const textoConsulta = document.querySelector('#textoConsulta').value;
    const error = document.querySelector('.error');
    const consultaEnviada = document.querySelector('#consultaEnviada');

    if (!emailConsulta || !textoConsulta) {
        error.style.display = 'block';
        consultaEnviada.style.display= 'none';
        return
    }

    const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

    consultas.push({email: emailConsulta, consulta: textoConsulta});

    localStorage.setItem('consultas', JSON.stringify(consultas))

    consultaEnviada.style.display = 'block';
    error.style.display = 'none';
    
    document.querySelector('#emailConsulta').value = '';
    document.querySelector('#textoConsulta').value = '';
    
})