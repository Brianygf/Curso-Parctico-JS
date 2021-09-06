// codigo cuadrado
console.group("Cuadrados");
/*const ladosCuadrado =5;*/
function areaCuadrado(lado){
return lado*lado;
}


function perimetroCuadrado(lado){
    return lado*4;
}

console.groupEnd ();
// codigo cuadrado

// codigo Triangulo
console.group("Triangulo");
function perimetroTriangulo(lado1,lado2,base){
return lado1+lado2+base; 

}
function areaTriangulo (base,altura){
return (base*altura)/2;

}


 console.groupEnd ();
// codigo Triangulo

// codigo Codigo Circulo
console.group("Circulo");
function diametroCirculo(radio) {
    return radio*2;
}
// radio  
 function perimetroCirculo(radio){
     const diametro = diametroCirculo(radio);
     return PI * diametro;
 }
 

 function areaCirculo(radio) {
     return radio*radio*PI;
 }

const PI = Math.PI;




console.groupEnd ();
// codigo circulo


// Interacciones html
function calcularPerimetroCuadrado() {
const input=document.getElementById("InputCuadrado");

const value=input.value;
const perimetro = perimetroCuadrado(value);
alert("El perimetro del cuadrado es: " + perimetro + " metros");
}

function calcularAreaCuadrado() {
    const input=document.getElementById("InputCuadrado");
const value=input.value;
const area=areaCuadrado(value);
alert("El area del cuadrado es: " + area + "metros cuadrados");
}




function calcularPerimetroTriangulo (){
const input1=document.getElementById("lado1");
const input2=document.getElementById("lado2");
const input3=document.getElementById("base");
const value1=Number(input1.value);
const value2=Number(input2.value);
const value3=Number(input3.value);


const perimetro=perimetroTriangulo(value1,value2,value3);
alert("El perimetro del triangulo es: " + perimetro + "metros");
}

function calcularAreaTriangulo (){
    const input4=document.getElementById("Area");
    const input3=document.getElementById("base");
    const value3=Number(input3.value);
    const value4=Number(input4.value);
    const Area=areaTriangulo(value3,value4);
    alert("El Area del triangulo es: " + Area +" mentros cuadrados");

}

function calcularPerimetroCirculo(){
    const input5=document.getElementById("Radio");
    const value5=Number(input5.value);
    const diametro=diametroCirculo(value5);
    const perimetro=perimetroCirculo(value5);
    const area=areaCirculo(value5);
    alert("El diametro del triangulo es: " + diametro +" mentros ");
    alert("El Perimetro del triangulo es: " + perimetro +" mentros ");
   

}
function calcularAreaCirculo(){
    const input5=document.getElementById("Radio");
    const value5=Number(input5.value);
    const area=areaCirculo(value5);
    alert("El Area del triangulo es: " + area +" mentros cuadrados");
}





