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
const amigoC5 = new Amigo("amigoC5",0,5);
const amigoC6 = new Amigo("amigoC6",0,6);
const amigoC7 = new Amigo("amigoC7",0,7);
const amigoC8 = new Amigo("amigoC8",0,8);
const amigoC9 = new Amigo("amigoC9",0,9);
const amigoC10 = new Amigo("amigoC10",0,10);
const amigoC11 = new Amigo("amigoC11",0,11);
const amigoC12 = new Amigo("amigoC12",0,12);


let cantidadDeAmigos = document.getElementById("cantidadDeAmigos")

let nuevoAmigo = document.getElementById("amigo");

let ingresarAmigo = document.getElementById("aceptar");

const amigo1 = document.getElementById("amigo1");
const amigo2 = document.getElementById("amigo2");
const amigo3 = document.getElementById("amigo3");
const amigo4 = document.getElementById("amigo4");
const amigo5 = document.getElementById("amigo5");
const amigo6 = document.getElementById("amigo6");
const amigo7 = document.getElementById("amigo7");
const amigo8 = document.getElementById("amigo8");
const amigo9 = document.getElementById("amigo9");
const amigo10 = document.getElementById("amigo10");
const amigo11 = document.getElementById("amigo11");
const amigo12 = document.getElementById("amigo12");

const amigo1Div = document.getElementById("amigo1Div");
const amigo2Div = document.getElementById("amigo2Div");
const amigo3Div = document.getElementById("amigo3Div");
const amigo4Div = document.getElementById("amigo4Div");
const amigo5Div = document.getElementById("amigo5Div");
const amigo6Div = document.getElementById("amigo6Div");
const amigo7Div = document.getElementById("amigo7Div");
const amigo8Div = document.getElementById("amigo8Div");
const amigo9Div = document.getElementById("amigo9Div");
const amigo10Div = document.getElementById("amigo10Div");
const amigo11Div = document.getElementById("amigo11Div");
const amigo12Div = document.getElementById("amigo12Div");

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");
const input7 = document.getElementById("input7");
const input8 = document.getElementById("input8");
const input9 = document.getElementById("input9");
const input10 = document.getElementById("input10");
const input11 = document.getElementById("input11");
const input12 = document.getElementById("input12");

const acepta1 = document.getElementById("acepta1");
const acepta2 = document.getElementById("acepta2");
const acepta3 = document.getElementById("acepta3");
const acepta4 = document.getElementById("acepta4");
const acepta5 = document.getElementById("acepta5");
const acepta6 = document.getElementById("acepta6");
const acepta7 = document.getElementById("acepta7");
const acepta8 = document.getElementById("acepta8");
const acepta9 = document.getElementById("acepta9");
const acepta10 = document.getElementById("acepta10");
const acepta11 = document.getElementById("acepta11");
const acepta12 = document.getElementById("acepta12");

const saldo1 = document.getElementById("saldo1");
const saldo2 = document.getElementById("saldo2");
const saldo3 = document.getElementById("saldo3");
const saldo4 = document.getElementById("saldo4");
const saldo5 = document.getElementById("saldo5");
const saldo6 = document.getElementById("saldo6");
const saldo7 = document.getElementById("saldo7");
const saldo8 = document.getElementById("saldo8");
const saldo9 = document.getElementById("saldo9");
const saldo10 = document.getElementById("saldo10");
const saldo11 = document.getElementById("saldo11");
const saldo12 = document.getElementById("saldo12");

const carga1 = document.getElementById("carga1");
const carga2 = document.getElementById("carga2");
const carga3 = document.getElementById("carga3");
const carga4 = document.getElementById("carga4");
const carga5 = document.getElementById("carga5");
const carga6 = document.getElementById("carga6");
const carga7 = document.getElementById("carga7");
const carga8 = document.getElementById("carga8");
const carga9 = document.getElementById("carga9");
const carga10 = document.getElementById("carga10");
const carga11 = document.getElementById("carga11");
const carga12 = document.getElementById("carga12");

function agregarAmigo() {
    amigos.push(nuevoAmigo.value.trim());
    amigoC1.nombre = amigos[0];
    amigoC2.nombre = amigos[1];
    amigoC3.nombre = amigos[2];
    amigoC4.nombre = amigos[3];
    amigoC5.nombre = amigos[4];
    amigoC6.nombre = amigos[5];
    amigoC7.nombre = amigos[6];
    amigoC8.nombre = amigos[7];
    amigoC9.nombre = amigos[8];
    amigoC10.nombre = amigos[9];
    amigoC11.nombre = amigos[10];
    amigoC12.nombre = amigos[11];
    amigo1.innerHTML = amigoC1.nombre;
    amigo2.innerHTML = amigoC2.nombre;
    amigo3.innerHTML = amigoC3.nombre;
    amigo4.innerHTML = amigoC4.nombre;
    amigo5.innerHTML = amigoC5.nombre;
    amigo6.innerHTML = amigoC6.nombre;
    amigo7.innerHTML = amigoC7.nombre;
    amigo8.innerHTML = amigoC8.nombre;
    amigo9.innerHTML = amigoC9.nombre;
    amigo10.innerHTML = amigoC10.nombre;
    amigo11.innerHTML = amigoC11.nombre;
    amigo12.innerHTML = amigoC12.nombre;
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
    if (amigos.length === 5) {
        amigo5Div.style.display = "block";
        input5.style.display = "none";
        acepta5.style.display = "none";
    };
    if (amigos.length === 6) {
        amigo6Div.style.display = "block";
        input6.style.display = "none";
        acepta6.style.display = "none";
    };
    if (amigos.length === 7) {
        amigo7Div.style.display = "block";
        input7.style.display = "none";
        acepta7.style.display = "none";
    }; 
    if (amigos.length === 8) {
        amigo8Div.style.display = "block";
        input8.style.display = "none";
        acepta8.style.display = "none";
    };
    if (amigos.length === 9) {
        amigo9Div.style.display = "block";
        input9.style.display = "none";
        acepta9.style.display = "none";
    };
    if (amigos.length === 10) {
        amigo10Div.style.display = "block";
        input10.style.display = "none";
        acepta10.style.display = "none";
    };
    if (amigos.length === 11) {
        amigo11Div.style.display = "block";
        input11.style.display = "none";
        acepta11.style.display = "none";
    }; 
    if (amigos.length === 12) {
        amigo12Div.style.display = "block";
        input12.style.display = "none";
        acepta12.style.display = "none";
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

function cargaGasto5() {
    input5.style.display = "inline-block";
    acepta5.style.display = "inline-block";
    saldo5.style.display = "none";
    carga5.style.display = "none";
    };

function cargaGasto6() {
    input6.style.display = "inline-block";
    acepta6.style.display = "inline-block";
    saldo6.style.display = "none";
    carga6.style.display = "none";
    };

function cargaGasto7() {
    input7.style.display = "inline-block";
    acepta7.style.display = "inline-block";
    saldo7.style.display = "none";
    carga7.style.display = "none";
    };

function cargaGasto8() {
    input8.style.display = "inline-block";
    acepta8.style.display = "inline-block";
    saldo8.style.display = "none";
    carga8.style.display = "none";
    };

function cargaGasto9() {
    input9.style.display = "inline-block";
    acepta9.style.display = "inline-block";
    saldo9.style.display = "none";
    carga9.style.display = "none";
    };

function cargaGasto10() {
    input10.style.display = "inline-block";
    acepta10.style.display = "inline-block";
    saldo10.style.display = "none";
    carga10.style.display = "none";
    };

function cargaGasto11() {
    input11.style.display = "inline-block";
    acepta11.style.display = "inline-block";
    saldo11.style.display = "none";
    carga11.style.display = "none";
    };

function cargaGasto12() {
    input12.style.display = "inline-block";
    acepta12.style.display = "inline-block";
    saldo12.style.display = "none";
    carga12.style.display = "none";
    };

function aceptaGasto1() {
    amigoC1.aporte = Number(input1.value);
    saldo1.innerHTML = amigoC1.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
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
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
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
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
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
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input4.style.display = "none";
    acepta4.style.display = "none";
    saldo4.style.display = "inline-block";
    carga4.style.display = "inline-block";
    carga4.value = "Modificar";
    };

function aceptaGasto5() {
    amigoC5.aporte = Number(input5.value);
    saldo5.innerHTML = amigoC5.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input5.style.display = "none";
    acepta5.style.display = "none";
    saldo5.style.display = "inline-block";
    carga5.style.display = "inline-block";
    carga5.value = "Modificar";
    };

function aceptaGasto6() {
    amigoC6.aporte = Number(input6.value);
    saldo6.innerHTML = amigoC6.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input6.style.display = "none";
    acepta6.style.display = "none";
    saldo6.style.display = "inline-block";
    carga6.style.display = "inline-block";
    carga6.value = "Modificar";
    };

function aceptaGasto7() {
    amigoC7.aporte = Number(input7.value);
    saldo7.innerHTML = amigoC7.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input7.style.display = "none";
    acepta7.style.display = "none";
    saldo7.style.display = "inline-block";
    carga7.style.display = "inline-block";
    carga7.value = "Modificar";
    };

function aceptaGasto8() {
    amigoC8.aporte = Number(input8.value);
    saldo8.innerHTML = amigoC8.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input8.style.display = "none";
    acepta8.style.display = "none";
    saldo8.style.display = "inline-block";
    carga8.style.display = "inline-block";
    carga8.value = "Modificar";
    };

function aceptaGasto9() {
    amigoC9.aporte = Number(input9.value);
    saldo9.innerHTML = amigoC9.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input9.style.display = "none";
    acepta9.style.display = "none";
    saldo9.style.display = "inline-block";
    carga9.style.display = "inline-block";
    carga9.value = "Modificar";
    };

function aceptaGasto10() {
    amigoC10.aporte = Number(input10.value);
    saldo10.innerHTML = amigoC10.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input10.style.display = "none";
    acepta10.style.display = "none";
    saldo10.style.display = "inline-block";
    carga10.style.display = "inline-block";
    carga10.value = "Modificar";
    };

function aceptaGasto11() {
    amigoC11.aporte = Number(input11.value);
    saldo11.innerHTML = amigoC11.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input11.style.display = "none";
    acepta11.style.display = "none";
    saldo11.style.display = "inline-block";
    carga11.style.display = "inline-block";
    carga11.value = "Modificar";
    };

function aceptaGasto12() {
    amigoC12.aporte = Number(input12.value);
    saldo12.innerHTML = amigoC12.aporte;
    const aporteTotal = amigoC1.aporte + amigoC2.aporte + amigoC3.aporte + amigoC4.aporte + amigoC5.aporte + amigoC6.aporte + amigoC7.aporte + amigoC8.aporte + amigoC9.aporte + amigoC10.aporte + amigoC11.aporte + amigoC12.aporte;
    const total = document.getElementById("total");
    total.innerHTML = aporteTotal;
    input12.style.display = "none";
    acepta12.style.display = "none";
    saldo12.style.display = "inline-block";
    carga12.style.display = "inline-block";
    carga12.value = "Modificar";
    };



ingresarAmigo.onclick = agregarAmigo;

carga1.onclick = cargaGasto1;
carga2.onclick = cargaGasto2;
carga3.onclick = cargaGasto3;
carga4.onclick = cargaGasto4;
carga5.onclick = cargaGasto5;
carga6.onclick = cargaGasto6;
carga7.onclick = cargaGasto7;
carga8.onclick = cargaGasto8;
carga9.onclick = cargaGasto9;
carga10.onclick = cargaGasto10;
carga11.onclick = cargaGasto11;
carga12.onclick = cargaGasto12;

acepta1.onclick = aceptaGasto1;
acepta2.onclick = aceptaGasto2;
acepta3.onclick = aceptaGasto3;
acepta4.onclick = aceptaGasto4;
acepta5.onclick = aceptaGasto5;
acepta6.onclick = aceptaGasto6;
acepta7.onclick = aceptaGasto7;
acepta8.onclick = aceptaGasto8;
acepta9.onclick = aceptaGasto9;
acepta10.onclick = aceptaGasto10;
acepta11.onclick = aceptaGasto11;
acepta12.onclick = aceptaGasto12;
