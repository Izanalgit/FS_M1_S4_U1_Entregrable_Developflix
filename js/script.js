import peliculas from './peliculas.js'

const linkmgs = "https://image.tmdb.org/t/p/w200";
const linkmgsgrande = "https://image.tmdb.org/t/p/w500";

/* ID GENEROS
    accion      28
    thriller    53
    aventura    12
*/


const peliculasaccion =peliculas.filter((peliculas) => peliculas.genre_ids.some((id)=>id === 28) === true);
const peliculthriller =peliculas.filter((peliculas) => peliculas.genre_ids.some((id)=>id === 53) === true);
const peliculaventura =peliculas.filter((peliculas) => peliculas.genre_ids.some((id)=>id === 12) === true);

const divdeaccion =   document.getElementById("genero-28");
const divthriller = document.getElementById("genero-53");
const divaventura = document.getElementById("genero-12");

function addPelis (genero,lista){
    lista.forEach(lista => {
        let addlist = document.createElement("div");
           addlist.innerHTML=(
                '<img src="'+linkmgs+lista.backdrop_path+' "/>'
                + '<strong>'+lista.title+'</strong>'
            );
           genero.appendChild(addlist);
           addlist.classList.add("pelicula");
    })
}

addPelis (divdeaccion,peliculasaccion);
addPelis (divthriller,peliculthriller);
addPelis (divaventura,peliculaventura);





