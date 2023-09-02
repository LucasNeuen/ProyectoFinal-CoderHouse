
// --------- INDEX ----------


// --- SECTION 2 ---
const bienvenida = document.getElementById('bienvenida');
const registro = document.getElementById('registro');
const botonRegistro = document.getElementById('botonRegistro');

botonRegistro.addEventListener('click', (e) => {
    window.location.href = './pages/ingresar.html';
})

// --- SECTION 1 ---

const contenedorInfo = document.getElementById('contenedor-Info');
const botonCerrar = document.getElementById('cerrar');
const botonSolicitar = document.getElementById('solicitar');
const contenedorFormulario = document.getElementById('contenedor-Formulario');
const botonesInfo = document.querySelectorAll('.carousel-caption button');
const botonCerrarUno = document.getElementById("cerrar-1");
const confirmacion = document.getElementById("confirmar");


    botonesInfo.forEach(button => {
        button.addEventListener('click', () => {
                contenedorInfo.style.display = 'flex';
            });
    });

    botonSolicitar.addEventListener('click', () => {
        contenedorInfo.style.display = 'none';
        contenedorFormulario.style.display = 'flex';
    });

    botonCerrar.addEventListener('click', () => {
        contenedorInfo.style.display = 'none';
        contenedorFormulario.style.display = 'none';
    });

    botonCerrarUno.addEventListener('click', () => {
        contenedorFormulario.style.display = 'none'

        document.querySelector('.email_1').value = '';
        document.querySelector('.contraseña_1').value = '';
        mensajeError.style.display = 'none';

    
    })


confirmacion.addEventListener('click', () => {
    
    const email = document.querySelector('.email_1').value;
    const password = document.querySelector('.contraseña_1').value;
    const mensajeError = document.querySelector('.mensajeIncorrecto_1');

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const validarUsuario = usuarios.find(user => user.email === email && user.password === password);

    if (!validarUsuario) {
        
        mensajeError.style.display = 'block';
        return
    }
    
    const felicitacionesUsuario = (nombre) => {
        contenedorFormulario.innerHTML = `
                                            <div class="contenedorParrafo-1">
                                                
                                                <h1>Felicitaciones Sr/Sra ${nombre}</h1>
                                                <p class='parrafo'>Usted es un cliente que ahora ha pedido su tarjeta de DEBITO de TarjetaX. De esta manera podra acceder ahora a los beneficios de TarjetaX a traves de la activacion de la misma. Le agradecemos su confianza.</p>
    
                                            </div>`;
                    
                            }
        felicitacionesUsuario(validarUsuario.name)
    
})
