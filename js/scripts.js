document.addEventListener("DOMContentLoaded", function () {
    const listaPeliculas = document.getElementById("lista-peliculas");
    const listaSeries = document.getElementById("lista-series");
    const filtroGenero = document.getElementById("filtro-genero");
    const inputBusqueda = document.getElementById("busqueda");

    const peliculas = [
        { titulo: "Xtremo", genero: "accion", trailer: "https://www.youtube.com/watch?v=KadFgRuUn74", imagen: "img/pelicula1.jpg" },
        { titulo: "Culpa Tuya", genero: "drama", trailer: "https://www.youtube.com/watch?v=f97f1jEqdgE", imagen: "../img/pelicula2.jpg" },
        { titulo: "El Mejor venaro de mi vida", genero: "comedia", trailer: "https://www.youtube.com/watch?v=IZn--VYwhR0", imagen: "../img/pelicula3.jpg" },
        { titulo: "Lo dejo cuando quiera", genero: "comedia", trailer: "https://www.youtube.com/watch?v=Py3JDqMl-84", imagen: "../img/pelicula4.jpg" },
        { titulo: "Salve Maria", genero: "drama", trailer: "https://www.youtube.com/watch?v=6Fu-aAfZvwE", imagen: "../img/pelicula5.jpg" },
        { titulo: "Dos tontos muy tontos", genero: "comedia", trailer: "https://www.youtube.com/watch?v=l13yPhimE3o", imagen: "../img/pelicula6.jpg" }
    ];

    const series = [
        { titulo: "La casa de Papel", genero: "accion", trailer: "https://www.youtube.com/watch?v=3y-6iaveY6c", imagen: "../img/serie1.jpg" },
        { titulo: "Machos Alfa", genero: "drama", trailer: "https://www.youtube.com/watch?v=seSA6OzeNpA", imagen: "../img/serie2.jpg" },
        { titulo: "La que se avecina", genero: "comedia", trailer: "https://www.youtube.com/watch?v=_RoauX_3_is&t=1s", imagen: "../img/serie3.jpg" }, 
        { titulo: "Lupin", genero: "accion", trailer: "https://www.youtube.com/watch?v=yX5Py7lL5dw", imagen: "../img/serie4.jpg"},
        { titulo: "1992", genero: "drama", trailer: "https://www.youtube.com/watch?v=CyrVTcTi7aE", imagen: "../img/serie5.jpg"},
        { titulo: "Yo nunca", genero: "comedia", trailer: "https://www.youtube.com/watch?v=Z4d0DxHmn8E", imagen: "../img/serie6.jpg" }
    ];
    

    function mostrarContenido(lista, datos) {
        lista.innerHTML = datos.map(item => `
            <div class="col-md-4 item ${item.genero}">
                <div class="card" onclick="window.open('${item.trailer}', '_blank')">
                    <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${item.titulo}</h5>
                    </div>
                </div>
            </div>
        `).join("");
    }

    if (listaPeliculas) mostrarContenido(listaPeliculas, peliculas);
    if (listaSeries) mostrarContenido(listaSeries, series);

    function filtrarContenido() {
        const genero = filtroGenero.value;
        const busqueda = inputBusqueda.value.toLowerCase();

        document.querySelectorAll(".item").forEach(el => {
            const titulo = el.querySelector(".card-title").textContent.toLowerCase();
            const coincideGenero = genero === "todas" || el.classList.contains(genero);
            const coincideBusqueda = titulo.includes(busqueda);
            el.style.display = coincideGenero && coincideBusqueda ? "block" : "none";
        });
    }

    filtroGenero?.addEventListener("change", filtrarContenido);
    inputBusqueda?.addEventListener("input", filtrarContenido);
});
