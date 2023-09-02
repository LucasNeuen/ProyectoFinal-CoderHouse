// ELECIONES DE PARTICIPACION

const promociones = document.querySelectorAll('.grid-promocion');
const descuentos = document.querySelectorAll('.descuentos');

function participar(promocionesId) {

    let promocionesParticipadas = JSON.parse(localStorage.getItem('promocionesParticipadas')) || [];
        promocionesParticipadas.push(promocionesId);
        localStorage.setItem('promocionesParticipadas', JSON.stringify(promocionesParticipadas));
        
}

function obtener(descuentosId) {

    let descuentosParticipados = JSON.parse(localStorage.getItem('descuentosParticipados')) || [];
        descuentosParticipados.push(descuentosId);
        localStorage.setItem('descuentosParticipados', JSON.stringify(descuentosParticipados));

}

promociones.forEach(promos => {

    const promocionesId = promos.getAttribute('data-promo-id');
    const btnParticipar = promos.querySelector('.grid-boton');

    btnParticipar.addEventListener('click', () => {
        
        participar(promocionesId);

    })

})

descuentos.forEach(desc => {

    const descuentosId = desc.getAttribute('data-descuentos-id');
    const btnDescuentos = desc.querySelector('.descuento-boton');

    btnDescuentos.addEventListener('click', () => {

        obtener(descuentosId);
    })
})



//MENSAJE DE PARTICIPACION

const btnParticipar1 = document.querySelector('#boton1');
const cambio1 = document.querySelector('.grid-promocion1')

    btnParticipar1.addEventListener('click', () => {
        cambio1.innerHTML = `
                            <h2> Felicitaciones </h2>
                            <h3> Ya estas registrado para participando del sorteo por un viaje a Mexico</h3>`
    })

const btnParticipar2 = document.querySelector('#boton2');
const cambio2 = document.querySelector('.grid-promocion2')

    btnParticipar2.addEventListener('click', () => {
        cambio2.innerHTML = `
                            <h2> Felicitaciones </h2>
                            <h3> Ya estas registrado para participando del sorteo por un auto 0KM</h3>`
    })

const btnParticipar3 = document.querySelector('#boton3');
const cambio3 = document.querySelector('.grid-promocion3')
    
    btnParticipar3.addEventListener('click', () => {
        cambio3.innerHTML = `
                            <h2> Felicitaciones </h2>
                            <h3> Ya estas registrado para participando del sorteo por viaje a las Cataratas</h3>`
    })

const btnDescuento1 = document.querySelector('#descuentoBtn1');
const btnDescuento2 = document.querySelector('#descuentoBtn2');
const btnDescuento3 = document.querySelector('#descuentoBtn3');
const btnDescuento4 = document.querySelector('#descuentoBtn4');
const cambioDescuentos1 = document.querySelector('.descuento-descripcion-1');
const cambioDescuentos2 = document.querySelector('.descuento-descripcion-2');
const cambioDescuentos3 = document.querySelector('.descuento-descripcion-3');
const cambioDescuentos4 = document.querySelector('.descuento-descripcion-4');


    btnDescuento1.addEventListener('click', () => {
        cambioDescuentos1.innerHTML = `
                            <h2>Felicitaciones</h2>
                            <p>Ya podes disfrutar de los descuentos en todos los supermercados.</p>`
    })

    btnDescuento2.addEventListener('click', () => {
        cambioDescuentos2.innerHTML = `
                            <h2>Felicitaciones</h2>
                            <p>Ya podes disfrutar de los descuentos en todos los hoteles.</p>`
    })

    btnDescuento3.addEventListener('click', () => {
        cambioDescuentos3.innerHTML = `
                            <h2>Felicitaciones</h2>
                            <p>Ya podes disfrutar de los descuentos en todas las tiendas deportivas.</p>`
    })

    btnDescuento4.addEventListener('click', () => {
        cambioDescuentos4.innerHTML = `
                            <h2>Felicitaciones</h2>
                            <p>Ya podes disfrutar de los descuentos en los shopping.</p>`
    })

