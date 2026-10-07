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