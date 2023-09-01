const btnRegistrarse = document.querySelector('.sign-in-btn'); 
const btnIniciarSesion = document.querySelector('.sign-up-btn');  
const contenedorSesion = document.querySelector('.sign-up');
const contenedorRegistro  = document.querySelector('.sign-in');


//CAMBIO PANORAMA
document.addEventListener('click', e => {

    if (e.target === btnRegistrarse || e.target === btnIniciarSesion) {
        contenedorRegistro.classList.toggle('active');
        contenedorSesion.classList.toggle('active');
    }
});


// REGISTRO
const formularioRegistro = document.querySelector('.formularioRegistro');
const mensajeDatos = document.querySelector('.mensajeIncorrecto');


formularioRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('.nombreApellido').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.contraseña').value;
    const mensajeError = document.querySelector('.error');
    
    if (!name || !email || !password) {

        mensajeDatos.style.display = 'block';
        return
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuariosRegistrados = usuarios.find(user => user.email === email)

    if (usuariosRegistrados) {

        mensajeError.style.display = 'block';
        return

    }

    usuarios.push({name: name, email: email, password: password})

    /* debugger */
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    const bienvenidoUsuario = (nombre) => {
        formularioRegistro.innerHTML = `
                                        <div class="centradoFormulario">
                                            <h1>Bienvenido Sr/Sra ${nombre}</h1>
                                            <p>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra pedir su TarjetaX y ademas podras acceder a sus beneficios unicos. Le agradecemos su confianza.</p>
                                        </div>`;
                    
                            }
        bienvenidoUsuario(name)
})


// INICIO SESION

const formularioSesion = document.querySelector('.formularioSesion');
const mensajeError = document.querySelector('.mensajeIncorrecto_1');
const contenedorFormulario = document.querySelector('#contenedorFormulario');

formularioSesion.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.querySelector('.email_1').value;
    const password = document.querySelector('.contraseña_1').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const validarUsuario = usuarios.find(user => user.email === email && user.password === password);

    if (!validarUsuario) {
        mensajeError.style.display = 'block';
        return
    }

    localStorage.setItem('loginExitoso', JSON.stringify(validarUsuario));
    
    window.location.href = '../pages/submenu.html';

    
}) 


// LIMPIAR FILTROS

btnRegistrarse.addEventListener('click', () => {
    document.querySelector('.email_1').value = '';
    document.querySelector('.contraseña_1').value = '';
    mensajeError.style.display = 'none';
})

btnIniciarSesion.addEventListener('click', () => {
    document.querySelector('.nombreApellido').value = '';
    document.querySelector('.email').value = '';
    document.querySelector('.contraseña').value = '';
    mensajeDatos.style.display = 'none';
})


