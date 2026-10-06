/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function calcular(){
    let largo = document.getElementById("largo").value;
    let ancho = document.getElementById("ancho").value;
    
    let area = largo * ancho;
    let perimetro = 2 * (largo + ancho);

    alert("El área es: " + area + "m²" + "\nEl perímetro es: " + perimetro + "m");
}

function convertir(){
    let dolares = document.getElementById("dolares").value;
    let tasa = document.getElementById("tasa").value;

    let resultado = dolares * tasa;
    
    alert("El equivalente en moneda local es: S/." + resultado);
}