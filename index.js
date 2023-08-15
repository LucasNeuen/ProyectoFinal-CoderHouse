
// --- INDEX ---

const contenedorInfo = document.getElementById('contenedor-Info');
const botonCerrar = document.getElementById('cerrar');
const botonesInfo = document.querySelectorAll('.carousel-caption button');

        botonesInfo.forEach(button => {
            button.addEventListener('click', () => {
                contenedorInfo.style.display = 'flex';
            });
        });

        botonCerrar.addEventListener('click', () => {
            contenedorInfo.style.display = 'none';
        });



// seccion 2
const bbdd = [{
    nombreYApellido: 'Lucas Garay',
    dni: 12345,
    edad: 28,
}]

const usuario = {
    nombreYApellido: '',
    dni: '',
    edad: ''
}

const clienteRegistrado = JSON.parse(localStorage.getItem("cliente")); 

const botonLogin = document.getElementById("botonLogin");
const pedir = document.getElementById("pedir");
const inputs = document.querySelectorAll("input");

const bienvenidoUsuario = nombre => {
    pedir.innerHTML = `<h1 class:'title'>Bienvenido Sr/Sra ${nombre}</h1>
                         <p class:'parrafo'>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra "activar" su TarjetaX para poder acceder a sus beneficios. Le agradecemos su confianza.</p>`;
}

const usuarioNoEncontrado = (nombre) => {
    pedir.innerHTML = `<h1 class:'title'>Lo siento Sr/Sra ${nombre}</h1>
                        <p class:'parrafo'>Usted no se ecuentra registrado en nuestra base de datos.</p>`
}

if(clienteRegistrado != undefined){
    bienvenidoUsuario(clienteRegistrado.nombreYApellido);
}

botonLogin.addEventListener("click", (event) => {

   const buscarUsuario = bbdd.find((registro) => usuario.nombreYApellido == registro.nombreYApellido && usuario.dni == registro.dni && usuario.edad == registro.edad)

   if(buscarUsuario !== undefined) {
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
})



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