(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        var map = L.map('mapa').setView([-34.668961, -58.347847], 20);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-34.668961, -58.347847]).addTo(map)

        .openPopup();

    })

    // CAMPOS DATOS USUARIO

    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // CAMPOS PASES POR DIA

    var pase_dia = document.getElementById('pase_dia');
    var pase_completo = document.getElementById('pase_completo');
    var pase_dosdias = document.getElementById('pase_dosdias');


    // BOTONES Y CALCULAR

    var calcular = document.getElementById('calcular');
    var botonRegistro = document.getElementById('btnRegistro');
    var errorDiv = document.getElementById('error');
    var listaProductos = document.getElementById('lista-productos');
    var sumaTotal = document.getElementById('suma-total');

    pase_dia.addEventListener('blur', ocultarDias);
    pase_completo.addEventListener('blur', ocultarDias);
    pase_dosdias.addEventListener('blur', ocultarDias);



    // MERCHANDISING
    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');


    /** CAMPOS OBLIGATORIOS EN REGISTRO DE PERSONAS */

    nombre.addEventListener('blur', function() {
        if (this.value == '') {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Este campo es obligatorio';
            this.style.border = '1px solid red';
        } else {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid black';
        }
    })

    apellido.addEventListener('blur', function() {
        if (this.value == '') {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Este campo es obligatorio';
            this.style.border = '1px solid red';
        } else {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid black';
        }
    })

    email.addEventListener('blur', function() {
        if (this.value == '') {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Este campo es obligatorio';
            this.style.border = '1px solid red';
        } else {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid black';
        }
    })

    /**VALIDAR EMAIL */

    email.addEventListener('blur', function() {
        if (this.value.indexOf("@") > -1) {
            errorDiv.style.display = 'none';
            this.style.border = '1px solid black';
        } else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'Este campo es obligatorio';
            this.style.border = '1px solid red';
        }
    })

    // FUNCION CALCULADOR DE PRECIOS


    calcular.addEventListener('click', function(event) {
        event.onclick

        if (regalo.value == "") {
            alert('Debes elegir un regalo');
        } else {
            var paseDia = parseInt(pase_dia.value, 10) || 0,
                paseCompleto = parseInt(pase_completo.value, 10) || 0,
                paseDosDias = parseInt(pase_dosdias.value, 10) || 0,
                cantCamisas = parseInt(camisas.value, 10) || 0,
                cantEtiquetas = parseInt(etiquetas.value, 10) || 0;


            var totalPagar = paseDia * 800 + paseCompleto * 2000 + paseDosDias * 1500 + (cantCamisas * 10) * .93 + (cantEtiquetas * 2) * .93;

            var listadoDeProductos = []

            if (paseDia >= 1) {
                listadoDeProductos.push(paseDia + ' Pases por dia')
            }
            if (paseCompleto >= 1) {
                listadoDeProductos.push(paseCompleto + ' Pases completos')
            }
            if (paseDosDias >= 1) {
                listadoDeProductos.push(paseDosDias + ' Pases por dos dias')
            }

            if (cantCamisas >= 1) {
                listadoDeProductos.push(cantCamisas + ' camisas')
            }

            if (cantEtiquetas >= 1) {
                listadoDeProductos.push(cantEtiquetas + ' etiquetas')
            }

        }
        listaProductos.style.display = 'block'; //MOSTRADO CON JAVASCRIPT OCULTADO CON CSS
        listaProductos.innerHTML = '';
        for (var i = 0; i < listadoDeProductos.length; i++) {
            listaProductos.innerHTML += listadoDeProductos[i] + '<br>';
        }

        sumaTotal.innerHTML = '$ ' + totalPagar.toFixed(2);



    })

    /**OCULTAR DIAS NO SELECCIONADOS EN BOLETOS */


    function ocultarDias() {
        var paseDia = parseInt(pase_dia.value, 10) || 0,
            paseCompleto = parseInt(pase_completo.value, 10) || 0,
            paseDosDias = parseInt(pase_dosdias.value, 10) || 0;

        var diasElegidos = [];


        if (paseDia >= 1) {
            diasElegidos.push('viernes');
        } else {
            document.getElementById('viernes').style.display = 'none';
        }


        if (paseDosDias >= 1) {
            diasElegidos.push('viernes', 'sabado');
        } else {
            document.getElementById('viernes', 'sabado').style.display = 'none';
        }


        if (paseCompleto >= 1) {
            diasElegidos.push('viernes', 'sabado', 'domingo');
        } else {
            document.getElementById('viernes' && 'sabado').style.display = 'none';
        }
        if (paseCompleto == 0) {
            document.getElementById('domingo').style.display = 'none';
        }


        for (var i = 0; i < diasElegidos.length; i++) {
            document.getElementById(diasElegidos[i]).style.display = 'block';
        }





    }






















})();