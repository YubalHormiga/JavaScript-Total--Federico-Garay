function recomendar(genero) {
    let edad = Number(document.querySelector("#edad").value);
    let mostrar = document.querySelector("#pelicula");

    switch (genero) {
        case "comedia":
            if (edad < 12) {
                mostrar.textContent = "Back to the Future ";
            } else {
                if (edad >= 12 && edad < 18) {
                    mostrar.textContent = "The Truman Sho ";
                } else {
                    mostrar.textContent = "The Wolf of Wall Street";
                }
            }
            break;

        case "crimen":
            if (edad < 12) {
                mostrar.textContent = " No hay peliculas ";
            } else {
                if (edad >= 12 && edad < 18) {
                    mostrar.textContent = "El secreto de sus ojos ";
                } else {
                    mostrar.textContent = "The Godfather";
                }
            }
            break;

        case "drama":
            if (edad < 12) {
                mostrar.textContent = " Casablanca  ";
            } else {
                if (edad >= 12 && edad < 18) {
                    mostrar.textContent = "The Shawshank Redemption ";
                } else {
                    mostrar.textContent = "Taxi Drive";
                }
            }
            break;

        case "musical":
            if (edad < 12) {
                mostrar.textContent = " La La Land  ";
            } else {
                if (edad >= 12 && edad < 18) {
                    mostrar.textContent = "Les Miserables ";
                } else {
                    mostrar.textContent = "The Rocky Horror Picture Show ";
                }
            }
            break;

        default:
            break;
    }
}