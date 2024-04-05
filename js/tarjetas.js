const contenedorTarjetas = document.querySelector('.main-0');

const tarjetas = [
    {
        id: 1,
        tipo: "Tarjeta de Debito",
        img: "https://cdn.pixabay.com/photo/2022/10/18/02/09/credit-card-7529025_1280.png",
        descripcion: "Para solicitar esta tarjeta debera presentar: \n Documento \n CUIL",
    },
    {
        id: 2,
        tipo: "Tarjeta de Credito",
        img: "https://us.123rf.com/450wm/mousemd/mousemd1404/mousemd140400035/27669842-tarjeta-vip-plata-en-negro-modelo-del-vector.jpg?ver=6",
        descripcion: "Para solicitar esta Tarjeta deberá presentar la siguiente documentación: \n Documento \n CUIL \n Fecha del último recibo de sueldo'",
    },
    {
        id: 3,
        tipo: "Tarjeta VISA",
        img: "https://media.istockphoto.com/id/920681308/es/foto/maqueta-del-negro-tarjetas-de-cr%C3%A9dito-en-blanco-sobre-fondo-negro-mesa-de-madera.jpg?s=612x612&w=0&k=20&c=TSopcCvlzDEJP0sh3jzBe68Q48i3tbmWjDGu_6fYUOs=",
        descripcion: "Para solicitar esta Tarjeta deberá presentar la siguiente documentación: \n Documento \n CUIL \n Nombre y apellido de un garante \n Fecha del último recibo de sueldo",
    },
]

let tarjetasPedidas = [];

tarjetas.forEach((tipos) => {

    let contenido = document.createElement("div");
    contenido.className = "seccionUsuarioTarjetas"
    contenido.innerHTML = `
        <img src="${tipos.img}">
        <h3>${tipos.tipo}</h3>
        <p>${tipos.descripcion}</p>
        
        
    `;
    contenedorTarjetas.append(contenido);

    let obtener = document.createElement('button');
    obtener.className = "grid-boton";
    obtener.innerText = 'Pedir';
    contenido.append(obtener);

    obtener.addEventListener('click', () => {
        tarjetasPedidas.push({
            id: tipos.id,
            img: tipos.img,
            tipo: tipos.tipo,
            descripcion: tipos.descripcion,
        })
        console.log(tarjetasPedidas)
    })

})