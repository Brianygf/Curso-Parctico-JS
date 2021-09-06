

function calcularAltura(lado1,lado2,base){
    
    const input1=document.getElementById("InputLado1");
    const value1=Number(input1.value);

    const input2=document.getElementById("InputLado2");
    const value2=Number(input2.value);

    const input3=document.getElementById("InputBase");
    const value3=Number(input3.value);
if (value1!=value3 && value2!=value3) {
    

if (value1 == value2) {

    Altura=(Math.sqrt(((value1*value1)-((value3*value3)/2))));
    alert("La Altura de este triangulo es" + Altura + (" cm"));

    
}}
else{
    alert("Estas medidas no son las correctas para un triangulo ISOSCELES");
}

}