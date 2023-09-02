// --- BARRA LATERAL --- //
$('.btnX').click(function(){
    $(this).toggleClass("click");
    $('.barraLateral').toggleClass("show");
});

$('.barraLateral ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

// -- CERRAR SESION -- //
const usuario = JSON.parse(localStorage.getItem('loginExitoso')) || false


if(!usuario) {
    window.location.href = '../pages/ingresar.html'
}

const cerrarSesion = document.querySelector('#cerrarSesion');

cerrarSesion.addEventListener('click',() => {

    localStorage.setItem('loginExitoso', JSON.stringify(false));
    window.location.href = '../index.html'


})

// -- BOTON PROMOCIONES -- // // -- BOTON DESCUENTO -- // 

const btnPromocion = document.querySelector('#btnPromocion');
const btnDescuento = document.querySelector('#btnDescuento');
const mostrarPromocion = document.querySelector('#promociones');
const mostrarDescuentos = document.querySelector('#descuentos');
const btnBeneficio = document.querySelector('#btnBeneficio');
const verBeneficios = document.querySelector('#beneficios');


document.addEventListener('click', e => {

    if (e.target === btnPromocion) {
        mostrarPromocion.style.display = 'block';
        mostrarDescuentos.style.display = 'none';

    }
    if (e.target === btnDescuento) {
        mostrarPromocion.style.display = 'none';
        mostrarDescuentos.style.display = 'block';

    }


});

// -- SECCION USUARIO --//

const seccionUsuario = document.querySelector('.main-0');

const usuarios = JSON.parse(localStorage.getItem('usuarios'))

/* debugger */
localStorage.setItem('usuarios', JSON.stringify(usuarios))

const bienvenidoUsuario = () => {
    seccionUsuario.innerHTML = `<section class="seccionUsuario">
                                    <h1>Bienvenido Sr/Sra ${usuario.name}</h1>

                                <p>Usted es un cliente que ahora se encuentra registrado en nuestro sistema. De esta manera podra pedir su TarjetaX y ademas podras acceder a sus beneficios unicos. Le agradecemos su confianza.</p>
                                
                                </section>`;
                
                        }
    bienvenidoUsuario()



