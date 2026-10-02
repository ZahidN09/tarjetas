function crearTarjeta() {
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");

    let desde = recuperarNumero("txtDesde");
    let hasta = recuperarNumero("txtHasta");

    for (let i = desde; i <= hasta; i++) {
        contenido = contenido + "<div class='item'>" + i + "</div>";
        console.log(contenido);
        divTarjetas.innerHTML = contenido;
    }
}

function recuperarNumero(id) {
    let cmp = document.getElementById(id);
    let num = parseInt(cmp.value);
    return num;
}