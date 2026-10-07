/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your projec

function calcular(){
    let largo = Number(document.getElementById("largo")).value;
    let ancho = Number(document.getElementById("ancho")).value;
    
    let area = largo * ancho;
    let perimetro = 2 * (largo + ancho);

    alert("El área es: " + area + "m²" + "\nEl perímetro es: " + perimetro + "m");
}

function convertir(){
    let dolares = Number(document.getElementById("dolares")).value;
    let tasa = Number(document.getElementById("tasa")).value;

    let resultado = dolares * tasa;
    
    alert("El equivalente en moneda local es: S/." + resultado);
}

function cambiarproducto(){
    document.getElementsByClassName(card-img-top mb-5 mb-md-0)[0].src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0kGSaH9nFGYKf2V409RZ82YDMAhGE5ooVEYZwx0nElHToGTW3V8Fpg&s=10";
    document.getElementsByClassName("small mb-1")[0].textContent="MST - 031";
    document.getElementsByClassName("display-5 fw-bolder")[0].textContent="Silla Ergonomica Blue Link";
    document.getElementsByClassName("lead")[0].textContent="Diseñada para brindar comodidad y soporte durante largas jornadas de trabajo, esta silla ergonómica cuenta con un respaldo amplio y acolchado, soporte lumbar ajustable y reposacabezas para mejorar la postura. Sus apoyabrazos regulables y su mecanismo de ajuste permiten adaptar la silla a diferentes posiciones, ofreciendo mayor comodidad y reduciendo la fatiga durante el trabajo o estudio. Su diseño en color azul combina funcionalidad y un estilo moderno para cualquier oficina o espacio de trabajo.";
    document.getElementsByClassName("text-decoration-line-through")[0].textContent="S/ 1,200.00";
}