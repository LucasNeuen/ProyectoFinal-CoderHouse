
// --- INDEX "Pedir Tarjeta" ---

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
const app = document.getElementById("app");
const inputs = document.querySelectorAll("input");

const bienvenidoUsuario = nombre => {
    app.innerHTML = `<h1 class:'title'>Bienvenido Sr/Sra ${nombre}</h1>`
}

if(clienteRegistrado != undefined){
    bienvenidoUsuario(clienteRegistrado.nombreYApellido)
}

botonLogin.addEventListener("click", (event) => {

   const buscarUsuario = bbdd.find((registro) => usuario.nombreYApellido == registro.nombreYApellido && usuario.dni == registro.dni && usuario.edad == registro.edad)

   if(buscarUsuario !== undefined) {
    bienvenidoUsuario(buscarUsuario.nombreYApellido)
    localStorage.setItem("cliente", JSON.stringify(buscarUsuario))
   }else {
    console.log("Usuario no encontrado")
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