const amigos = [];
const aportes = [];

class Amigo {
    constructor(nombre, aporte, numero) {
        this.nombre = nombre;
        this.aporte = aporte;
        this.numero = numero;
    }
};

const amigoC1 = new Amigo("amigoC1",0,1);
const amigoC2 = new Amigo("amigoC2",0,2);
const amigoC3 = new Amigo("amigoC3",0,3);
const amigoC4 = new Amigo("amigoC4",0,4);

let cantidadDeAmigos = document.getElementById("cantidadDeAmigos")

let nuevoAmigo = document.getElementById("amigo");

let ingresarAmigo = document.getElementById("aceptar");

const amigo1 = document.getElementById("amigo1");
const amigo2 = document.getElementById("amigo2");
const amigo3 = document.getElementById("amigo3");
const amigo4 = document.getElementById("amigo4");

const amigo1Div = document.getElementById("amigo1Div");
const amigo2Div = document.getElementById("amigo2Div");
const amigo3Div = document.getElementById("amigo3Div");
const amigo4Div = document.getElementById("amigo4Div");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

const acepta1 = document.getElementById("acepta1");
const acepta2 = document.getElementById("acepta2");
const acepta3 = document.getElementById("acepta3");
const acepta4 = document.getElementById("acepta4");

const saldo1 = document.getElementById("saldo1");
const saldo2 = document.getElementById("saldo2");
const saldo3 = document.getElementById("saldo3");
const saldo4 = document.getElementById("saldo4");

const carga1 = document.getElementById("carga1");
const carga2 = document.getElementById("carga2");
const carga3 = document.getElementById("carga3");
const carga4 = document.getElementById("carga4");

function agregarAmigo() {
    amigos.push(nuevoAmigo.value.trim());
    amigoC1.nombre = amigos[0];
    amigoC2.nombre = amigos[1];
    amigoC3.nombre = amigos[2];
    amigoC4.nombre = amigos[3];
    amigo1.innerHTML = amigoC1.nombre;
    amigo2.innerHTML = amigoC2.nombre;
    amigo3.innerHTML = amigoC3.nombre;
    amigo4.innerHTML = amigoC4.nombre;
    if (amigos.length === 1) {
        amigo1Div.style.display = "block";
        input1.style.display = "none";
        acepta1.style.display = "none";
    };
    if (amigos.length === 2) {
        amigo2Div.style.display = "block";
        input2.style.display = "none";
        acepta2.style.display = "none";
    };
    if (amigos.length === 3) {
        amigo3Div.style.display = "block";
        input3.style.display = "none";
        acepta3.style.display = "none";
    }; 
    if (amigos.length === 4) {
        amigo4Div.style.display = "block";
        input4.style.display = "none";
        acepta4.style.display = "none";
    };   
    cantidadDeAmigos.innerHTML = amigos.length;
    };

function cargaGasto1() {
    input1.style.display = "inline-block";
    acepta1.style.display = "inline-block";
    saldo1.style.display = "none";
    carga1.style.display = "none";
    };

function cargaGasto2() {
    input2.style.display = "inline-block";
    acepta2.style.display = "inline-block";
    saldo2.style.display = "none";
    carga2.style.display = "none";
    };

function cargaGasto3() {
    input3.style.display = "inline-block";
    acepta3.style.display = "inline-block";
    saldo3.style.display = "none";
    carga3.style.display = "none";
    };

function cargaGasto4() {
    input4.style.display = "inline-block";
    acepta4.style.display = "inline-block";
    saldo4.style.display = "none";
    carga4.style.display = "none";
    };

function aceptaGasto1() {
    amigoC1.aporte = Number(input1.value);
    saldo1.innerHTML = amigoC1.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input1.style.display = "none";
    acepta1.style.display = "none";
    saldo1.style.display = "inline-block";
    carga1.style.display = "inline-block";
    carga1.value = "Modificar";
    };

function aceptaGasto2() {
    amigoC2.aporte = Number(input2.value);
    saldo2.innerHTML = amigoC2.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input2.style.display = "none";
    acepta2.style.display = "none";
    saldo2.style.display = "inline-block";
    carga2.style.display = "inline-block";
    carga2.value = "Modificar";
    };

function aceptaGasto3() {
    amigoC3.aporte = Number(input3.value);
    saldo3.innerHTML = amigoC3.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input3.style.display = "none";
    acepta3.style.display = "none";
    saldo3.style.display = "inline-block";
    carga3.style.display = "inline-block";
    carga3.value = "Modificar";
    };

function aceptaGasto4() {
    amigoC4.aporte = Number(input4.value);
    saldo4.innerHTML = amigoC4.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input4.style.display = "none";
    acepta4.style.display = "none";
    saldo4.style.display = "inline-block";
    carga4.style.display = "inline-block";
    carga4.value = "Modificar";
    };

ingresarAmigo.onclick = agregarAmigo;

carga1.onclick = cargaGasto1;
carga2.onclick = cargaGasto2;
carga3.onclick = cargaGasto3;
carga4.onclick = cargaGasto4;

acepta1.onclick = aceptaGasto1;
acepta2.onclick = aceptaGasto2;
acepta3.onclick = aceptaGasto3;
acepta4.onclick = aceptaGasto4;
