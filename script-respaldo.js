// 1. Coloca aquí tu número de WhatsApp con el código de tu país (sin el signo +)
// Ejemplo: si eres de México 52..., de Colombia 57..., de Argentina 54...
const MI_TELEFONO = "+573234531562";

// Buscamos los botones
const botonesAñadir = document.querySelectorAll('.btn-carrito');

botonesAñadir.forEach(boton => {
    boton.addEventListener('click', (evento) => {
        // Obtenemos la tarjeta del producto donde se hizo clic
        const tarjetaProducto = evento.target.closest('.producto-card');

        // Obtenemos el nombre y el precio de esa prenda específica
        const nombrePrenda = tarjetaProducto.querySelector('h3').textContent;
        const precioPrenda = tarjetaProducto.querySelector('.precio').textContent;

        // Creamos el mensaje automático para WhatsApp
        const mensaje = `Hola Vibe Fresh 💖, me encantó este producto de tu página web y quiero comprarlo:

👗 Prenda: ${nombrePrenda}
💰 Precio: ${precioPrenda}

¿Está disponible?`;

        // Convertimos el mensaje a un formato que entienda internet
        const mensajeEncriptado = encodeURIComponent(mensaje);

        // Creamos el enlace directo a WhatsApp
        const enlaceWhatsApp = `https://wa.me/${MI_TELEFONO}?text=${mensajeEncriptado}`;

        // Abrimos el WhatsApp en una pestaña nueva
        window.open(enlaceWhatsApp, '_blank');
    });
});

const fotosBermudas = [
    "Bermuda-cinza.jpeg",
    "Bermuda-star.jpeg",
    "Bermuda-cargo-clara.jpeg",
    "Bermuda-mechas-y-brillos.jpeg",
    "Bermuda-oasis.jpeg",
    "Bermuda-mechas-mantequilla.jpeg",
    "Bermuda-taches.jpeg",
    "Bermuda-red-urbana.jpeg"
];

const tarjetaBermudas =
    document.querySelector(".categoria-banner");

const imagenBermudas =
    document.getElementById("bermudas-img");

if (tarjetaBermudas && imagenBermudas) {

    let intervaloBermudas;

    tarjetaBermudas.addEventListener("mouseenter", () => {

        intervaloBermudas = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosBermudas.length);

            imagenBermudas.src =
                fotosBermudas[aleatoria];

        }, 1000);

    });

    tarjetaBermudas.addEventListener("mouseleave", () => {

        clearInterval(intervaloBermudas);

        imagenBermudas.src =
            "Bermuda-cinza.jpeg";

    });
    const fotosShorts = [
        "Short-cereza.jpeg",
        "Short.jpeg"
    ];

    const tarjetas =
        document.querySelectorAll(".categoria-banner");

    const tarjetaShorts = tarjetas[1];

    const imagenShorts =
        document.getElementById("shorts-img");

    let intervaloShorts;

    tarjetaShorts.addEventListener("mouseenter", () => {

        intervaloShorts = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosShorts.length);

            imagenShorts.src =
                fotosShorts[aleatoria];

        }, 1000);

    });

    tarjetaShorts.addEventListener("mouseleave", () => {

        clearInterval(intervaloShorts);

        imagenShorts.src =
            "Short-cereza.jpeg";

    });

}

const fotosShorts = [
    "Short-cereza.jpeg",
    "Short.jpeg"
];

const tarjetaShorts =
    document.querySelector(".categoria-imagen-shorts");

const imagenShorts =
    document.getElementById("shorts-img");

if (tarjetaShorts && imagenShorts) {

    let intervaloShorts;

    tarjetaShorts.addEventListener("mouseenter", () => {

        intervaloShorts = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosShorts.length);

            imagenShorts.src =
                fotosShorts[aleatoria];

        }, 1000);

    });

    tarjetaShorts.addEventListener("mouseleave", () => {

        clearInterval(intervaloShorts);

        imagenShorts.src =
            "Short-cereza.jpeg";
    });
}
const fotosJeans = [
    "Jean-anita-frente.jpeg",
    "Jean-wide-leg-glitter-licrado-frente.jpeg",
    "Jean-wide-leg-glitter-azul-licrado-frente.jpeg",
    "Jean-wide-leg-degrade-frente.jpeg",
    "Jean-wide-leg-perla-licrado-frente.jpeg",
    "Jean-olivia-rigido.jpeg",
    "Jean-palazo-licrado.jpeg",
    "Palazzo-cafe.jpeg",
    "Jean-star-rigido.jpeg",
    "Jean-cargo-dominante-rigido-frente.jpeg",
    "Jean-urbano-rigido-frente.jpeg",
    "Jean-clasico-rotos-rigido-frente.jpeg",
    "Jean-corazones-frente.jpeg",
    "Jean-demin-vintage.jpeg",
    "Jean-europeo-rigido-frente.jpeg",
    "Jean-fragmentado1.jpeg",
    "Jean-fragmentado2.jpeg",
    "Jean-fresh-rigido.jpeg",
    "Jean-girl-urbano-frente.jpeg",
    "Jean-mechas-frente.jpeg",
    "Jean-olivia-hielo.jpeg"
];

const tarjetaJeans =
document.querySelectorAll(".categoria-banner")[2];

const imagenJeans =
document.getElementById("jeans-img");

if (tarjetaJeans && imagenJeans) {

    let intervaloJeans;

    tarjetaJeans.addEventListener("mouseenter", () => {

        intervaloJeans = setInterval(() => {

            const aleatoria =
            Math.floor(Math.random() * fotosJeans.length);

            imagenJeans.src =
            fotosJeans[aleatoria];

        }, 1000);

    });

    tarjetaJeans.addEventListener("mouseleave", () => {

        clearInterval(intervaloJeans);

        imagenJeans.src =
        "Jean-anita-frente.jpeg";

    });
}
console.log("JEANS OK");
    const fotosCropTops = [
        "Blusa-picapiedra-asimetrica.jpeg",
        "Crop-top-rose.jpeg"
    ];

    const tarjetasCropTops =
        document.querySelectorAll(".categoria-banner");

const tarjetaCropTops = tarjetasCropTops[3];

const imagenCropTops =
document.getElementById("croptops-img");

let intervaloCropTops;

if (tarjetaCropTops && imagenCropTops) {

tarjetaCropTops.addEventListener("mouseenter", () => {

        intervaloCropTops = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosCropTops.length);

            imagenCropTops.src =
                fotosCropTops[aleatoria];

        }, 1000);

    });

    tarjetaCropTops.addEventListener("mouseleave", () => {

        clearInterval(intervaloCropTops);

        imagenCropTops.src =
            "Blusa-picapiedra-asimetrica.jpeg";

    });
    }

    const fotosBodys = [
        "Body-atraccion.jpeg",
        "Body-aura-frente.jpeg",
        "Body-bandeja-a.jpeg",
        "Body-bandeja-r.jpeg",
        "Body-basico-1.jpeg",
        "Body-basico.jpeg",
        "Body-costillero.jpeg",
        "Body-costillero-con-copa-frente.jpeg",
        "Body-crop.jpeg",
        "Body-fruncido-manga-corta-frente.jpeg",
        "Body-stretch-manga-corta.jpeg",
        "Body-stretch-manga-larga.jpeg",
        "Body-suprema-a.jpeg",
        "Body-suprema-c.jpeg",
        "Body-tentacion.jpeg"
    ];

    const tarjetasBodys =
        document.querySelectorAll(".categoria-banner");

const tarjetaBodys = tarjetasBodys[4];

const imagenBodys =
    document.getElementById("bodys-img");

let intervaloBodys;

if (tarjetaBodys && imagenBodys) {

tarjetaBodys.addEventListener("mouseenter", () => {

        intervaloBodys = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosBodys.length);

            imagenBodys.src =
                fotosBodys[aleatoria];

        }, 1000);

    });

    tarjetaBodys.addEventListener("mouseleave", () => {

        clearInterval(intervaloBodys);

        imagenBodys.src =
            "Body-atraccion.jpeg";

    });
    }

    const fotosConjuntos = [
        "Conjunto-falda.jpeg"
    ];

    const tarjetasConjuntos =
        document.querySelectorAll(".categoria-banner");

    const tarjetaConjuntos = tarjetasConjuntos[5];

    const imagenConjuntos =
        document.getElementById("conjuntos-img");

    let intervaloConjuntos;

    tarjetaConjuntos.addEventListener("mouseenter", () => {

        intervaloConjuntos = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosConjuntos.length);

            imagenConjuntos.src =
                fotosConjuntos[aleatoria];

        }, 1000);

    });

    tarjetaConjuntos.addEventListener("mouseleave", () => {

        clearInterval(intervaloConjuntos);

        imagenConjuntos.src =
            "Conjunto-falda.jpeg";

    });

    const fotosPavas = [
        "Pava.jpeg"
    ];

    const tarjetasPavas =
        document.querySelectorAll(".categoria-banner");

    const tarjetaPavas = tarjetasPavas[6];

    const imagenPavas =
        document.getElementById("pavas-img");

    let intervaloPavas;

    tarjetaPavas.addEventListener("mouseenter", () => {

        intervaloPavas = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosPavas.length);

            imagenPavas.src =
                fotosPavas[aleatoria];

        }, 1000);

    });

    tarjetaPavas.addEventListener("mouseleave", () => {

        clearInterval(intervaloPavas);

        imagenPavas.src =
            "Pava.jpeg";

    });

    const fotosLenceria = [
        "Set-bordado-r.jpeg",
        "Set-varilla-mayatex.jpeg",
        "Set-bordado-ar.jpeg",
        "Set-atrevida.jpeg",
        "Set-bordado-a.jpeg"
    ];

    const tarjetasLenceria =
        document.querySelectorAll(".categoria-banner");

    const tarjetaLenceria = tarjetasLenceria[7];

    const imagenLenceria =
        document.getElementById("lenceria-img");

    let intervaloLenceria;

    tarjetaLenceria.addEventListener("mouseenter", () => {

        intervaloLenceria = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosLenceria.length);

            imagenLenceria.src =
                fotosLenceria[aleatoria];

        }, 1000);

    });

    tarjetaLenceria.addEventListener("mouseleave", () => {

        clearInterval(intervaloLenceria);

        imagenLenceria.src =
            "Set-bordado-r.jpeg";

    });

    const fotosSudadera = [
        "Sudadera-y-buso.jpeg",
        "Sudadera-y-buso-con-capota.jpeg"
    ];

    const tarjetasSudadera =
        document.querySelectorAll(".categoria-banner");

    const tarjetaSudadera = tarjetasSudadera[8];

    const imagenSudadera =
        document.getElementById("sudadera-img");

    let intervaloSudadera;

    tarjetaSudadera.addEventListener("mouseenter", () => {

        intervaloSudadera = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosSudadera.length);

            imagenSudadera.src =
                fotosSudadera[aleatoria];

        }, 1000);

    });

    tarjetaSudadera.addEventListener("mouseleave", () => {

        clearInterval(intervaloSudadera);

        imagenSudadera.src =
            "Sudadera-y-buso.jpeg";

    });

    const fotosEnterizosLargos = [
        "Enterizo-manga-corta.jpeg",
        "Enterizo-moscu-largo-frente.jpeg",
        "Enterizo-picapiedra-largo-frente.jpeg"
    ];

    const tarjetasEnterizosLargos =
        document.querySelectorAll(".categoria-banner");

    const tarjetaEnterizosLargos = tarjetasEnterizosLargos[8];

    const imagenEnterizosLargos =
        document.getElementById("enterizoslargos-img");

    let intervaloEnterizosLargos;

    tarjetaEnterizosLargos.addEventListener("mouseenter", () => {

        intervaloEnterizosLargos = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosEnterizosLargos.length);

            imagenEnterizosLargos.src =
                fotosEnterizosLargos[aleatoria];

        }, 1000);

    });

    tarjetaEnterizosLargos.addEventListener("mouseleave", () => {

        clearInterval(intervaloEnterizosLargos);

        imagenEnterizosLargos.src =
            "Enterizo-manga-corta.jpeg";

    });

    const fotosEnterizosCortos = [
        "Enterizo-cafe-frente.jpeg",
        "Enterizo-con-push-up-leve-frente.jpeg",
        "Enterizo-g-frente.jpeg",
        "Enterizo-gris-frente.jpeg",
        "Enterizo-negro-frente.jpeg",
        "Enterizo-con-escote-frente.jpeg",
        "Enterizo-con-cierre-frente.jpeg",
        "Enterizo-basico-frente.jpeg",
        "Enterizo-tie-dye-con-mangas-frente.jpeg",
        "Enterizo-c-frente.jpeg",
        "Enterizo-bombon-frente.jpeg",
        "Enterizo-glam-a-frente.jpeg",
        "Enterizo-glam-n-frente.jpeg",
        "Enterizo-r-frente.jpeg",
        "Enterizo-sin-push-up.jpeg",
        "Enterizo-pink-frente.jpeg",
        "Enterizo-roma-corto-frente.jpeg",
        "Enterizo-picapiedra-corto-frente.jpeg"
    ];

    const tarjetasEnterizosCortos =
        document.querySelectorAll(".categoria-banner");

    const tarjetaEnterizosCortos = tarjetasEnterizosCortos[10];

    const imagenEnterizosCortos =
        document.getElementById("enterizoscortos-img");

    let intervaloEnterizosCortos;

    tarjetaEnterizosCortos.addEventListener("mouseenter", () => {

        intervaloEnterizosCortos = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosEnterizosCortos.length);

            imagenEnterizosCortos.src =
                fotosEnterizosCortos[aleatoria];

        }, 1000);

    });

    tarjetaEnterizosCortos.addEventListener("mouseleave", () => {

        clearInterval(intervaloEnterizosCortos);

        imagenEnterizosCortos.src =
            "Enterizo-cafe-frente.jpeg";

    });

    const fotosEnterizosFaldaShort = [
        "Falda-short-n-frente.jpeg",
        "Falda-short-r-frente.jpeg"
    ];

    const tarjetasEnterizosFaldaShort =
        document.querySelectorAll(".categoria-banner");

    const tarjetaEnterizosFaldaShort = tarjetasEnterizosFaldaShort[11];

    const imagenEnterizosFaldaShort =
        document.getElementById("enterizosfaldashort-img");

    let intervaloEnterizosFaldaShort;

    tarjetaEnterizosFaldaShort.addEventListener("mouseenter", () => {

        intervaloEnterizosFaldaShort = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosEnterizosFaldaShort.length);

            imagenEnterizosFaldaShort.src =
                fotosEnterizosFaldaShort[aleatoria];

        }, 1000);

    });

    tarjetaEnterizosFaldaShort.addEventListener("mouseleave", () => {

        clearInterval(intervaloEnterizosFaldaShort);

        imagenEnterizosFaldaShort.src =
            "Falda-short-n-frente.jpeg";

    });

    const fotosDeportivosCortos = [
        "Conjunto-short-y-top-frente.jpeg",
        "Conjunto-impacto-pink-sin-push-up.jpeg",
        "Conjunto-tie-dye-a.jpeg",
        "Conjunto-tie-dye-v.jpeg",
        "Conjunto-tie-dye-r.jpeg",
        "Conjunto-frente.jpeg"
    ];

    const tarjetasDeportivosCortos =
        document.querySelectorAll(".categoria-banner");

    const tarjetaDeportivosCortos = tarjetasDeportivosCortos[12];

    const imagenDeportivosCortos =
        document.getElementById("deportivoscortos-img");

    let intervaloDeportivosCortos;

    tarjetaDeportivosCortos.addEventListener("mouseenter", () => {

        intervaloDeportivosCortos = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosDeportivosCortos.length);

            imagenDeportivosCortos.src =
                fotosDeportivosCortos[aleatoria];

        }, 1000);

    });

    tarjetaDeportivosCortos.addEventListener("mouseleave", () => {

        clearInterval(intervaloDeportivosCortos);

        imagenDeportivosCortos.src =
            "Conjunto-short-y-top-frente.jpeg";

    });

    const fotosDeportivosLargos = [
        "Conjunto-poder-real.jpeg"
    ];

    const tarjetasDeportivosLargos =
        document.querySelectorAll(".categoria-banner");

    const tarjetaDeportivosLargos = tarjetasDeportivosLargos[13];

    const imagenDeportivosLargos =
        document.getElementById("deportivoslargos-img");

    let intervaloDeportivosLargos;

    tarjetaDeportivosLargos.addEventListener("mouseenter", () => {

        intervaloDeportivosLargos = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosDeportivosLargos.length);

            imagenDeportivosLargos.src =
                fotosDeportivosLargos[aleatoria];

        }, 1000);

    });

    tarjetaDeportivosLargos.addEventListener("mouseleave", () => {

        clearInterval(intervaloDeportivosLargos);

        imagenDeportivosLargos.src =
            "Conjunto-poder-real.jpeg";

    });

    const fotosTopsDeportivos = [
        "Top-frente.jpeg",
        "Crop-top-con-escote-frente.jpeg",
        "Crop-top-un-solo-hombro-frente.jpeg",
        "Top-r.jpeg",
        "Top-n.jpeg",
        "Top-nike.jpeg"
    ];

    const tarjetasTopsDeportivos =
        document.querySelectorAll(".categoria-banner");

    const tarjetaTopsDeportivos = tarjetasTopsDeportivos[14];

    const imagenTopsDeportivos =
        document.getElementById("topsdeportivos-img");

    let intervaloTopsDeportivos;

    tarjetaTopsDeportivos.addEventListener("mouseenter", () => {

        intervaloTopsDeportivos = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosTopsDeportivos.length);

            imagenTopsDeportivos.src =
                fotosTopsDeportivos[aleatoria];

        }, 1000);

    });

    tarjetaTopsDeportivos.addEventListener("mouseleave", () => {

        clearInterval(intervaloTopsDeportivos);

        imagenTopsDeportivos.src =
            "Top-frente.jpeg";

    });

    const fotosLeggings = [
        "Leggings-sin-push-up-n.jpeg",
        "Leggings-sin-push-up-c.jpeg",
        "Leggings-sin-push-up.jpeg",
        "Leggings-tie-dye-n.jpeg",
        "Leggings.jpeg",
        "Leggings-tie-dye-a.jpeg"
    ];

    const tarjetasLeggings =
        document.querySelectorAll(".categoria-banner");

    const tarjetaLeggings = tarjetasLeggings[19];

    const imagenLeggings =
        document.getElementById("leggings-img");

    let intervaloLeggings;

    tarjetaLeggings.addEventListener("mouseenter", () => {

        intervaloLeggings = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosLeggings.length);

            imagenLeggings.src =
                fotosLeggings[aleatoria];

        }, 1000);

    });

    tarjetaLeggings.addEventListener("mouseleave", () => {

        clearInterval(intervaloLeggings);

        imagenLeggings.src =
            "Leggings-sin-push-up-n.jpeg";

    });

    const fotosCamisetas = [
        "Camiseta-oversize-n.jpeg",
        "Camiseta-oversize.jpeg",
        "Camiseta-oversize-a.jpeg",
        "Camiseta-oversize-g.jpeg",
        "Camiseta-oversize-b.jpeg",
        "Camiseta-oversize-v.jpeg",
        "Camiseta-oversize-urbana.jpeg",
        "Camiseta-corta.jpeg",
        "Camiseta-alo-oversize.jpeg"
    ];

    const tarjetasCamisetas =
        document.querySelectorAll(".categoria-banner");

    const tarjetaCamisetas = tarjetasCamisetas[20];

    const imagenCamisetas =
        document.getElementById("camisetas-img");

    let intervaloCamisetas;

    tarjetaCamisetas.addEventListener("mouseenter", () => {

        intervaloCamisetas = setInterval(() => {

            const aleatoria =
                Math.floor(Math.random() * fotosCamisetas.length);

            imagenCamisetas.src =
                fotosCamisetas[aleatoria];

        }, 1000);

    });

    tarjetaCamisetas.addEventListener("mouseleave", () => {

        clearInterval(intervaloCamisetas);

        imagenCamisetas.src =
            "Camiseta-oversize-n.jpeg";

    });

    window.addEventListener("load", () => {

        let cantidadCarrito = 0;

        const contadorCarrito =
            document.getElementById("contador-carrito");

        const botonesCarrito =
            document.querySelectorAll(".btn-carrito");

        console.log("Botones encontrados:", botonesCarrito.length);

        botonesCarrito.forEach(boton => {

            boton.addEventListener("click", () => {

                cantidadCarrito++;

                contadorCarrito.textContent =
                    cantidadCarrito;

                alert("Producto agregado al carrito 💖");

            });
        });
    });
