
// --------- INDEX ----------

// --- SECTION 2 ---
const bienvenida = document.getElementById('bienvenida');
const registro = document.getElementById('registro');
const botonRegistro = document.getElementById('botonRegistro');

botonRegistro.addEventListener('click', (e) => {

    const name = document.querySelector('.nombreApellido').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.contraseña').value;

    if (!name || !email || !password) {
        const completarDatos = document.createElement('p');
        completarDatos.textContent = 'Debes completar todos los datos.';

        registro.appendChild(completarDatos);
        return
    }

    const usuarios = JSON.parse(localStorage.getItem('users')) || [];

    const usuariosRegistrados = usuarios.find(user => user.email === email)
    if (usuariosRegistrados) {
        const emailencontrado = document.createElement('p');
        emailencontrado.textContent = 'Lo siento, el email que ingresaste ya esta en uso. Prueba con otro.';

        registro.appendChild(emailencontrado);
        return

    }

    usuarios.push({name: name, email: email, password: password})

    localStorage.setItem('users', JSON.stringify(usuarios))
    const bienvenidoUsuario = (nombre) => {
        bienvenida.innerHTML = `
        <div class='title'>
                                <h1>Bienvenido Sr/Sra ${nombre}</h1>
        
                             <p class='parrafo'>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra pedir su TarjetaX y ademas podras acceder a sus beneficios a traves de la activacion de la misma. Le agradecemos su confianza.</p>
                             </div>`;
                    
                            }
        bienvenidoUsuario(name)
  
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

    })


confirmacion.addEventListener('click', (e) => {
    
    const email = document.querySelector('.email_1').value;
    const password = document.querySelector('.contraseña_1').value;

    const usuarios = JSON.parse(localStorage.getItem('users')) || [];
    const validarUsuario = usuarios.find(user => user.email === email && user.password === password);

    if (!validarUsuario) {
        alert('Usuario y/o contraseña incorrecto')
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