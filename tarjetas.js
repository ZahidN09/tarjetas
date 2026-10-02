function crearTarjeta(){
    let contenido = "";
    let divTarjetas = document.getElementById("divTarjetas");
    for(let i = 1;i<=5;i++){
        contenido = contenido + "<div class='item'>" + i + "</div>";
        console.log(contenido);
        divTarjetas.innerHTML = contenido;
    }
}