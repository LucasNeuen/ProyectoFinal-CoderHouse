const btn = document.querySelector('#btnConsulta');

document.getElementById('form')
 .addEventListener('submit', function(event) {

    const emailConsulta = document.querySelector('#emailConsulta').value;
    const textoConsulta = document.querySelector('#textoConsulta').value;
    const consultaEnviada = document.querySelector('#consultaEnviada');

   event.preventDefault();

   btn.textContent = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_f727q8p';

   const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

   consultas.push({email: emailConsulta, consulta: textoConsulta});

   localStorage.setItem('consultas', JSON.stringify(consultas))

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        consultaEnviada.style.display = 'block';
        btn.textContent = 'Enviar';
        document.querySelector('#emailConsulta').value = '';
        document.querySelector('#textoConsulta').value = '';
        return
    });
});