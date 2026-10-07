/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function calcular(){
    let largo = number(document.getElementById("largo")).value;
    let ancho = number(document.getElementById("ancho")).value;
    
    let area = largo * ancho;
    let perimetro = 2 * (largo + ancho);

    alert("El área es: " + area + "m²" + "\nEl perímetro es: " + perimetro + "m");
}

function convertir(){
    let dolares = number(document.getElementById("dolares")).value;
    let tasa = number(document.getElementById("tasa")).value;

    let resultado = dolares * tasa;
    
    alert("El equivalente en moneda local es: S/." + resultado);
}

function cambiarproducto(){
    document.getElementByClassName(card-img-top mb-5 mb-md-0).src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0kGSaH9nFGYKf2V409RZ82YDMAhGE5ooVEYZwx0nElHToGTW3V8Fpg&s=10";
}