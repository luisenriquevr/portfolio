let menuVisible = false;

//Oculta o muestra el menú
function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Oculta el menú una vez seleccionada una opción
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("ccpp");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("selapptoolium");
        habilidades[5].classList.add("docker");
        habilidades[6].classList.add("bash");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("adaptabilidad");
        habilidades[10].classList.add("aprendizaje");
        habilidades[11].classList.add("resiliencia");
        habilidades[12].classList.add("liderazgo");
        habilidades[13].classList.add("agilidad");
    }
}

//Detección del scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}
