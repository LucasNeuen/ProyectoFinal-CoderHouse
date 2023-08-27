
// --- INDEX ---

/* const contenedorInfo = document.getElementById('contenedor-Info');
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
        contenedorFormulario.style.display = 'block';
    });

    botonCerrar.addEventListener('click', () => {
        contenedorInfo.style.display = 'none';
        contenedorFormulario.style.display = 'none';
    });

    botonCerrarUno.addEventListener('click', () => {
        contenedorFormulario.style.display = 'none'
    })


const afirmacion = () => {
    confirmacion.innerHTML = `<div class="onetitle">
                            <h4>Bienvenido Sr/Sra</h4>
                            <p>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra "activar" su TarjetaX para poder acceder a sus beneficios. Le agradecemos su confianza.</p>
                            </div>`;
                            
}

confirmacion.addEventListener('click', () => {
    
    afirmacion()
    
})
 */

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
        bienvenida.innerHTML = `<h1 class='title'>Bienvenido Sr/Sra ${nombre}</h1>
        
                             <p class='parrafo'>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra pedir su TarjetaX y ademas podras acceder a sus beneficios a traves de la activacion de la misma. Le agradecemos su confianza.</p>`;
                    
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
                                                
                                                    <h1 class='title'>Bienvenido Sr/Sra ${nombre}</h1>
                                                    <p class='parrafo'>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra pedir su TarjetaX y ademas podras acceder a sus beneficios a traves de la activacion de la misma. Le agradecemos su confianza.</p>
                                                
                                            </div>`;
                    
                            }
        felicitacionesUsuario(validarUsuario.name)
    
})







// seccion 2
/* const bbdd = [{
    nombreYApellido: 'Lucas Garay',
    dni: 12345,
    edad: 28,
}]

const usuario = {
    nombreYApellido: '',
    dni: '',
    edad: ''
}

function generarNumeroCliente() {

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return `${numeroAleatorio}`;
}

const clienteRegistrado = JSON.parse(localStorage.getItem("cliente")); 

const botonLogin = document.getElementById("botonLogin");
const pedir = document.getElementById("pedir");
const inputs = document.querySelectorAll("input");


const bienvenidoUsuario = (nombre, numeroCliente) => {
    pedir.innerHTML = `<h1 class:'title'>Bienvenido Sr/Sra ${nombre}</h1>
                         <p class:'parrafo'>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra "activar" su TarjetaX para poder acceder a sus beneficios a traves de este numero de cliente ${numeroCliente}. Le agradecemos su confianza.</p>`;
    
                         
}

const usuarioNoEncontrado = (nombre) => {
    pedir.innerHTML = `<h1 class:'title'>Lo siento Sr/Sra ${nombre}</h1>
                        <p class:'parrafo'>Usted no se ecuentra registrado en nuestra base de datos.</p>`
}

if(clienteRegistrado != undefined){
    bienvenidoUsuario(clienteRegistrado.nombreYApellido);
}

botonLogin.addEventListener("click", (event) => {

    
   const buscarUsuario = bbdd.find((registro) => usuario.nombreYApellido == registro.nombreYApellido && usuario.dni == registro.dni && usuario.edad == registro.edad);

   
   if(buscarUsuario !== undefined) {
    const numeroCliente = generarNumeroCliente();
    buscarUsuario.numeroCliente = numeroCliente;
    bienvenidoUsuario(buscarUsuario.nombreYApellido)
    localStorage.setItem("cliente", JSON.stringify(buscarUsuario))
    
    
   }else {
    usuarioNoEncontrado(usuario.nombreYApellido);
   }
    
});

inputs.forEach( (elemento) =>{
    elemento.addEventListener("input", (event) => {
        if (event.target.name === 'nombreApellido') {
            usuario.nombreYApellido = event.target.value;
        }if (event.target.name === 'documento') {
            usuario.dni = event.target.value;
        }if (event.target.name === 'años') {
            usuario.edad = event.target.value;
        }
    })
}) */


// --- ACTIVACION TARJETA ---

/* const baseDeDatosUsuarios = [];

const registro = document.getElementById("registro");
const nombreCompleto = document.getElementById("nombreCompleto");
const nombreUsuario = document.getElementById("nombreUsuario");
const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const app = document.getElementById("app");

registro.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe

    const nuevoUsuario = {
        usuario: nombreCompleto.value,
        apodo: nombreUsuario.value,
        email: email.value,
        password: contraseña.value
    };

    baseDeDatosUsuarios.push(nuevoUsuario);
    mostrarMensaje(`Usted se ha registrado correctamente. Ya puede acceder a los promociones y descuentos de TarjetaX`);
});

function mostrarMensaje(mensaje) {
    app.innerHTML = `<p>${mensaje}</p>`;
}


console.log(baseDeDatosUsuarios)
 */