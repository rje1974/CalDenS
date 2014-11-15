//Este es el archivo donde estan todas las scripts correspondientes a los archivos incluidos en la carpeta calculadoradedesnsidad. No se encuentra el scritp de la página de spash porque no puede individualizar el mismo solamente para esa pagina y se me efecutaba en todas las carpetas

// SECCION MATRICES (IMPORTANTE)
//Configura la matriz (conjunto de valores) para las densidades de siembra expresadas en miles de semillas por hectarea.

var densidad_seleccionada = [];
densidad_seleccionada.None = 1;
densidad_seleccionada['600000'] = 600000;
densidad_seleccionada['590000'] = 590000;
densidad_seleccionada['580000'] = 580000;
densidad_seleccionada['570000'] = 570000;
densidad_seleccionada['560000'] = 560000;
densidad_seleccionada['550000'] = 550000;
densidad_seleccionada['540000'] = 540000;
densidad_seleccionada['530000'] = 530000;
densidad_seleccionada['520000'] = 520000;
densidad_seleccionada['510000'] = 510000;
densidad_seleccionada['500000'] = 500000;
densidad_seleccionada['490000'] = 490000;
densidad_seleccionada['480000'] = 480000;
densidad_seleccionada['470000'] = 470000;
densidad_seleccionada['460000'] = 460000;
densidad_seleccionada['450000'] = 450000;
densidad_seleccionada['440000'] = 440000;
densidad_seleccionada['430000'] = 430000;
densidad_seleccionada['420000'] = 420000;
densidad_seleccionada['410000'] = 410000;
densidad_seleccionada['400000'] = 400000;
densidad_seleccionada['390000'] = 390000;
densidad_seleccionada['380000'] = 380000;
densidad_seleccionada['370000'] = 370000;
densidad_seleccionada['360000'] = 360000;
densidad_seleccionada['350000'] = 350000;
densidad_seleccionada['340000'] = 340000;
densidad_seleccionada['330000'] = 330000;
densidad_seleccionada['320000'] = 320000;
densidad_seleccionada['310000'] = 310000;
densidad_seleccionada['300000'] = 300000;
densidad_seleccionada['290000'] = 290000;
densidad_seleccionada['280000'] = 280000;
densidad_seleccionada['270000'] = 270000;
densidad_seleccionada['260000'] = 260000;
densidad_seleccionada['250000'] = 250000;
densidad_seleccionada['240000'] = 240000;
densidad_seleccionada['230000'] = 230000;
densidad_seleccionada['220000'] = 220000;
densidad_seleccionada['210000'] = 210000;
densidad_seleccionada['200000'] = 200000;
densidad_seleccionada['190000'] = 190000;
densidad_seleccionada['180000'] = 180000;
densidad_seleccionada['170000'] = 170000;
densidad_seleccionada['160000'] = 160000;
densidad_seleccionada['150000'] = 150000;
densidad_seleccionada['140000'] = 140000;
densidad_seleccionada['130000'] = 130000;
densidad_seleccionada['120000'] = 120000;
densidad_seleccionada['110000'] = 110000;
densidad_seleccionada['100000'] = 100000;
densidad_seleccionada['98000'] = 98000;
densidad_seleccionada['96000'] = 96000;
densidad_seleccionada['94000'] = 94000;
densidad_seleccionada['92000'] = 92000;
densidad_seleccionada['90000'] = 90000;
densidad_seleccionada['88000'] = 88000;
densidad_seleccionada['86000'] = 86000;
densidad_seleccionada['84000'] = 84000;
densidad_seleccionada['82000'] = 82000;
densidad_seleccionada['80000'] = 80000;
densidad_seleccionada['78000'] = 78000;
densidad_seleccionada['76000'] = 76000;
densidad_seleccionada['74000'] = 74000;
densidad_seleccionada['72000'] = 72000;
densidad_seleccionada['70000'] = 70000;
densidad_seleccionada['68000'] = 68000;
densidad_seleccionada['66000'] = 66000;
densidad_seleccionada['64000'] = 64000;
densidad_seleccionada['62000'] = 62000;
densidad_seleccionada['60000'] = 60000;
densidad_seleccionada['58000'] = 58000;
densidad_seleccionada['56000'] = 56000;
densidad_seleccionada['54000'] = 54000;
densidad_seleccionada['52000'] = 52000;
densidad_seleccionada['50000'] = 50000;
densidad_seleccionada['48000'] = 48000;
densidad_seleccionada['46000'] = 46000;
densidad_seleccionada['44000'] = 44000;
densidad_seleccionada['42000'] = 42000;
densidad_seleccionada['40000'] = 40000;
densidad_seleccionada['38000'] = 38000;
densidad_seleccionada['36000'] = 36000;
densidad_seleccionada['34000'] = 34000;
densidad_seleccionada['32000'] = 32000;
densidad_seleccionada['30000'] = 30000;
densidad_seleccionada['28000'] = 28000;
densidad_seleccionada['26000'] = 26000;
densidad_seleccionada['24000'] = 24000;
densidad_seleccionada['22000'] = 22000;
densidad_seleccionada['20000'] = 20000;
densidad_seleccionada['18000'] = 18000;
densidad_seleccionada['16000'] = 16000;
densidad_seleccionada['15000'] = 15000;
densidad_seleccionada['14000'] = 14000;
densidad_seleccionada['12000'] = 12000;
densidad_seleccionada['10000'] = 10000;


//Configura la matrix para la separacion entre lineas de siembra
var espaciamiento_seleccionado = [];
espaciamiento_seleccionado.None = 1;
espaciamiento_seleccionado['103.00'] = 103.00;
espaciamiento_seleccionado['102.00'] = 102.00;
espaciamiento_seleccionado['101.00'] = 101.00;
espaciamiento_seleccionado['100.00'] = 100.00;
espaciamiento_seleccionado['97.00'] = 97.00;
espaciamiento_seleccionado['91.00'] = 91.00;
espaciamiento_seleccionado['90.00'] = 90.00;
espaciamiento_seleccionado['80.00'] = 80.00;
espaciamiento_seleccionado['76.00'] = 76.00;
espaciamiento_seleccionado['70.00'] = 70.00;
espaciamiento_seleccionado['60.00'] = 60.00;
espaciamiento_seleccionado['56.00'] = 56.00;
espaciamiento_seleccionado['51.00'] = 51.00;
espaciamiento_seleccionado['52.50'] = 52.50;
espaciamiento_seleccionado['50.00'] = 50.00;
espaciamiento_seleccionado['48.00'] = 48.00;
espaciamiento_seleccionado['46.00'] = 46.00;
espaciamiento_seleccionado['42.00'] = 42.00;
espaciamiento_seleccionado['40.00'] = 40.00;
espaciamiento_seleccionado['38.00'] = 38.00;
espaciamiento_seleccionado['35.00'] = 35.00;
espaciamiento_seleccionado['30.00'] = 30.00;
espaciamiento_seleccionado['29.00'] = 29.00;
espaciamiento_seleccionado['28.00'] = 28.00;
espaciamiento_seleccionado['27.00'] = 27.00;
espaciamiento_seleccionado['26.00'] = 26.00;
espaciamiento_seleccionado['25.00'] = 25.00;
espaciamiento_seleccionado['24.00'] = 24.00;
espaciamiento_seleccionado['23.00'] = 23.00;
espaciamiento_seleccionado['22.00'] = 22.00;
espaciamiento_seleccionado['21.00'] = 21.00;
espaciamiento_seleccionado['20.00'] = 20.00;
espaciamiento_seleccionado['19.00'] = 19.00;
espaciamiento_seleccionado['18.00'] = 18.00;
espaciamiento_seleccionado['17.50'] = 17.50;
espaciamiento_seleccionado['17.00'] = 17.00;
	
//Configura la matriz para el indice de logro con con menu desplegable
var porcen_indice_logro = [];
porcen_indice_logro.None = 1;
porcen_indice_logro['1.00'] = 1;
porcen_indice_logro['0.98'] = 0.98;
porcen_indice_logro['0.97'] = 0.97;
porcen_indice_logro['0.96'] = 0.96;
porcen_indice_logro['0.94'] = 0.94;
porcen_indice_logro['0.92'] = 0.92;
porcen_indice_logro['0.91'] = 0.91;
porcen_indice_logro['0.90'] = 0.90;
porcen_indice_logro['0.88'] = 0.88;
porcen_indice_logro['0.86'] = 0.86;
porcen_indice_logro['0.84'] = 0.84;
porcen_indice_logro['0.82'] = 0.82;
porcen_indice_logro['0.80'] = 0.80;
porcen_indice_logro['0.78'] = 0.78;
porcen_indice_logro['0.76'] = 0.76;
porcen_indice_logro['0.74'] = 0.74;
porcen_indice_logro['0.72'] = 0.72;
porcen_indice_logro['0.70'] = 0.70;
porcen_indice_logro['0.68'] = 0.68;
porcen_indice_logro['0.66'] = 0.66;
porcen_indice_logro['0.64'] = 0.64;
porcen_indice_logro['0.62'] = 0.62;
porcen_indice_logro['0.60'] = 0.60;
porcen_indice_logro['0.58'] = 0.58;
porcen_indice_logro['0.56'] = 0.56;
porcen_indice_logro['0.54'] = 0.54;
porcen_indice_logro['0.52'] = 0.52;
porcen_indice_logro['0.50'] = 0.50;
porcen_indice_logro['0.48'] = 0.48;
porcen_indice_logro['0.46'] = 0.46;
porcen_indice_logro['0.44'] = 0.44;
porcen_indice_logro['0.42'] = 0.42;
porcen_indice_logro['0.40'] = 0.40;
porcen_indice_logro['0.38'] = 0.38;
porcen_indice_logro['0.36'] = 0.36;
porcen_indice_logro['0.34'] = 0.34;
porcen_indice_logro['0.32'] = 0.32;
porcen_indice_logro['0.30'] = 0.30;
	
//Configura la matriz del peso de mil
var peso_de_mil = [];
peso_de_mil.None = 1;
peso_de_mil['600.00'] = 600.00;
peso_de_mil['590.00'] = 590.00;
peso_de_mil['580.00'] = 580.00;
peso_de_mil['570.00'] = 570.00;
peso_de_mil['560.00'] = 560.00;
peso_de_mil['550.00'] = 550.00;
peso_de_mil['540.00'] = 540.00;
peso_de_mil['530.00'] = 530.00;
peso_de_mil['520.00'] = 520.00;
peso_de_mil['510.00'] = 510.00;
peso_de_mil['500.00'] = 500.00;
peso_de_mil['490.00'] = 490.00;
peso_de_mil['480.00'] = 480.00;
peso_de_mil['470.00'] = 470.00;
peso_de_mil['460.00'] = 460.00;
peso_de_mil['450.00'] = 450.00;
peso_de_mil['440.00'] = 440.00;
peso_de_mil['430.00'] = 430.00;
peso_de_mil['420.00'] = 420.00;
peso_de_mil['410.00'] = 410.00;
peso_de_mil['400.00'] = 400.00;
peso_de_mil['390.00'] = 390.00;
peso_de_mil['380.00'] = 380.00;
peso_de_mil['370.00'] = 370.00;
peso_de_mil['360.00'] = 360.00;
peso_de_mil['350.00'] = 350.00;
peso_de_mil['340.00'] = 340.00;
peso_de_mil['330.00'] = 330.00;
peso_de_mil['320.00'] = 320.00;
peso_de_mil['310.00'] = 310.00;
peso_de_mil['300.00'] = 300.00;
peso_de_mil['290.00'] = 290.00;
peso_de_mil['280.00'] = 280.00;
peso_de_mil['270.00'] = 270.00;
peso_de_mil['260.00'] = 260.00;
peso_de_mil['250.00'] = 250.00;
peso_de_mil['240.00'] = 240.00;
peso_de_mil['230.00'] = 230.00;
peso_de_mil['220.00'] = 220.00;
peso_de_mil['210.00'] = 210.00;
peso_de_mil['200.00'] = 200.00;
peso_de_mil['190.00'] = 190.00;
peso_de_mil['180.00'] = 180.00;
peso_de_mil['170.00'] = 170.00;
peso_de_mil['160.00'] = 160.00;
peso_de_mil['150.00'] = 150.00;
peso_de_mil['140.00'] = 140.00;
peso_de_mil['130.00'] = 130.00;
peso_de_mil['120.00'] = 120.00;
peso_de_mil['110.00'] = 110.00;
peso_de_mil['100.00'] = 100.00;
peso_de_mil['90.00'] = 90.00;
peso_de_mil['80.00'] = 80.00;
peso_de_mil['70.00'] = 70.00;
peso_de_mil['60.00'] = 60.00;
peso_de_mil['50.00'] = 50.00;

//Funcion traer densidad seleccionada

function traerDensidadSeleccionada() {
    'use strict';
    var cakeFillingPrice = 1, theForm = document.forms.cakeform, selectedFilling = theForm.elements.filling;
    
    //set cakeFilling Price equal to value user chose
    //For example densidad_seleccionada['Lemon'.value] would be equal to 5
    cakeFillingPrice = densidad_seleccionada[selectedFilling.value];
    
    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}

function traerDensidadSeleccionada2() {
    'use strict';
    var cakeFillingPrice2 = 1, theForm = document.forms.cakeform, selectedFilling2 = theForm.elements.filling2;
    cakeFillingPrice2 = espaciamiento_seleccionado[selectedFilling2.value];
    return cakeFillingPrice2;
}


//Funcion Traer Indice de Logro.
function getIndiceDeLogro() {
    'use strict';
    var indicelogro = 1, theForm = document.forms.cakeform, densidadSelec = theForm.elements.indicelogro;
    indicelogro = porcen_indice_logro[densidadSelec.value];
    return indicelogro;
}


//Funcion Traer Peso de mil.
function getPesoDeMil() {
    'use strict';
    var pesodemil = 1, theForm = document.forms.cakeform, pesomilSelec = theForm.elements.pesoMil;
    pesodemil = peso_de_mil[pesomilSelec.value];
    return pesodemil;
}


// Calculos Español
// Español - Español - Español - Español - Español - Español - Español - Español - Español - Español
function calculateTotal() {
    //Aqui obtenemos el precio total llamando a nuestra funcion
    //Each function returns a number so by calling them we add the values they return together
	'use strict';
    var cakePrice = traerDensidadSeleccionada() * traerDensidadSeleccionada2() / getIndiceDeLogro() / 1000000.00, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro(), densidadobjetivo = traerDensidadSeleccionada(),
        //Aqui configuramos los decimales que queremos que aparezcan en el resultado
        resultadodosdecimales1 = cakePrice.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed(2), resultadodosdecimales3 = densidadobjetivo.toFixed(2);
	
    //Aqui exponemos el calculo
	var divobj = document.getElementById('totalPrice');
	divobj.style.display = 'block';
	divobj.innerHTML = 'Se sembraran ' + resultadodosdecimales2 + ' plantas por Ha. que son ' + resultadodosdecimales1 + ' semillas en el metro lineal de siembra para lograr la densidad objetivo de ' + resultadodosdecimales3;
}

function calculateTotal2() {
    //Aqui obtenemos los kilogramos de semilla por hectarea
    'use strict';
    var pesoMil = traerDensidadSeleccionada() * [getPesoDeMil() / 1000] / 1000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro();
    
    //Aqui configuramos los decimales que queremos que aparezcan en el resultado
    var resultadodosdecimales4 = pesoMil.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed();
    
    //Aqui exponemos el calculo
    var divobj2 = document.getElementById('totalPrice2');
    divobj2.style.display = 'block';
    divobj2.innerHTML = 'Las ' + resultadodosdecimales2 + ' plantas son equivalentes a ' + resultadodosdecimales4 + ' Kg. por hectarea';
}

function calculateTotal_mx() {
    //Aqui obtenemos el precio total llamando a nuestra funcion
	//Each function returns a number so by calling them we add the values they return together
    'use strict';
    var cakePrice = traerDensidadSeleccionada() * traerDensidadSeleccionada2() / getIndiceDeLogro() / 1000000.00 * 0.9144, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro(), densidadobjetivo = traerDensidadSeleccionada();
	
    //Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales1 = cakePrice.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed(2), resultadodosdecimales3 = densidadobjetivo.toFixed(2);
			
	//Aqui exponemos el calculo
	var divobj = document.getElementById('totalPrice_mx');
	divobj.style.display = 'block';
	divobj.innerHTML = 'Se sembraran ' + resultadodosdecimales2 + ' plantas por acre que son ' + resultadodosdecimales1 + ' semillas en la yarda de siembra para lograr la densidad objetivo de ' + resultadodosdecimales3;
}

function calculateTotal2_mx() {
    //Aqui obtenemos los kilogramos de semilla por hectarea
    'use strict';
	var pesoMil = traerDensidadSeleccionada() * [getPesoDeMil() / 1000] / 1000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro();
    
    //Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales4 = pesoMil.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed();
    
    //Aqui exponemos el calculo	
	var divobj2 = document.getElementById('totalPrice2_mx');
	divobj2.style.display = 'block';
	divobj2.innerHTML = 'Las ' + resultadodosdecimales2 + ' plantas son equivalentes a ' + resultadodosdecimales4 + ' Kg. por hectarea';
}


// Calculos USA
// Ingles - Ingles - Ingles - Ingles - Ingles - Ingles - Ingles - Ingles - Ingles - Ingles -

function calculateTotal_usa_cm() {
    //Aqui obtenemos el precio total llamando a nuestra funcion
	//Each function returns a number so by calling them we add the values they return together
	'use strict';
    var cakePrice = traerDensidadSeleccionada() * traerDensidadSeleccionada2() / getIndiceDeLogro() / 1000000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro(), densidadobjetivo = traerDensidadSeleccionada();
    
    //Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales1 = cakePrice.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed(2), resultadodosdecimales3 = densidadobjetivo.toFixed(2);
	
	//Aqui exponemos el calculo
	var divobj = document.getElementById('totalPrice');
	divobj.style.display = 'block';
	divobj.innerHTML = 'You will need to plant ' + resultadodosdecimales2 + ' seeds per hectare wich represents ' + resultadodosdecimales1 + ' seeds in a lineal meter for achieving your population target of ' + resultadodosdecimales3;
}

function calculateTotal2_usa_cm() {
    //Aqui obtenemos los kilogramos de semilla por hectarea
    'use strict';
    var pesoMil = traerDensidadSeleccionada() * [getPesoDeMil() / 1000] / 1000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro();
						
	//Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales4 = pesoMil.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed();

	//Aqui exponemos el calculo	
	var divobj2 = document.getElementById('totalPrice2');
	divobj2.style.display = 'block';
	divobj2.innerHTML = 'The ' + resultadodosdecimales2 + ' seeds are equal to ' + resultadodosdecimales4 + ' Kg. of Soy Seeds per hectare. ';
}

function calculateTotal_usa_pul() {
    //Aqui obtenemos el precio total llamando a nuestra funcion
	//Each function returns a number so by calling them we add the values they return together
	'use strict';
    var cakePrice = traerDensidadSeleccionada() * traerDensidadSeleccionada2() / getIndiceDeLogro() / 1000000.00 * 0.9144, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro(), densidadobjetivo = traerDensidadSeleccionada();
		
	//Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales1 = cakePrice.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed(2), resultadodosdecimales3 = densidadobjetivo.toFixed(2);
			
	//Aqui exponemos el calculo
	var divobj = document.getElementById('totalPrice_usa_pul');
	divobj.style.display = 'block';
	divobj.innerHTML = 'You need to plant ' + resultadodosdecimales2 + ' seed in an accre, that represents ' + resultadodosdecimales1 + ' seed in one yard of the planting line to achive the target density of ' + resultadodosdecimales3;
}


function calculateTotal2_usa_pul() {
    //Aqui obtenemos los kilogramos de semilla por hectarea
    'use strict';
    var pesoMil = traerDensidadSeleccionada() * [getPesoDeMil() / 1000] / 1000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro();
    
	//Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales4 = pesoMil.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed();

	//Aqui exponemos el calculo	
	var divobj2 = document.getElementById('totalPrice2_usa_pul');
	divobj2.style.display = 'block';
	divobj2.innerHTML = 'The ' + resultadodosdecimales2 + ' plants are iqual to ' + resultadodosdecimales4 + ' Kg. of seeds per acre';
}


// Calculos Brasil
// Portugues - Portugues - Portugues - Portugues - Portugues - Portugues - Portugues - Portugues - Portugues

function calculateTotal_pr_cm() {
    //Aqui obtenemos el precio total llamando a nuestra funcion
	//Each function returns a number so by calling them we add the values they return together
	'use strict';
    var cakePrice = traerDensidadSeleccionada() * traerDensidadSeleccionada2() / getIndiceDeLogro() / 1000000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro(), densidadobjetivo = traerDensidadSeleccionada();
				
	//Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales1 = cakePrice.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed(2), resultadodosdecimales3 = densidadobjetivo.toFixed(2);
    
	//Aqui exponemos el calculo
	var divobj = document.getElementById('totalPrice_pr_cm');
	divobj.style.display = 'block';
	divobj.innerHTML = 'Você vai precisar plantar ' + resultadodosdecimales2 + ' sementes por hectare, que representa ' + resultadodosdecimales1 + ' sementes em um metro linear para atingir o seu alvo população de ' + resultadodosdecimales3;
}

function calculateTotal2_pr_cm() {
    //Aqui obtenemos los kilogramos de semilla por hectarea
    'use strict';
    var pesoMil = traerDensidadSeleccionada() * [getPesoDeMil() / 1000] / 1000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro();
						
	//Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales4 = pesoMil.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed();
    
    //Aqui exponemos el calculo	
	var divobj2 = document.getElementById('totalPrice2_pr_cm');
	divobj2.style.display = 'block';
	divobj2.innerHTML = 'Os ' + resultadodosdecimales2 + ' sementes são equivalentes a ' + resultadodosdecimales4 + ' Kg. de sementes de Soja por hectare. ';
}

function calculateTotal_pr_pul() {
    //Aqui obtenemos el precio total llamando a nuestra funcion
	//Each function returns a number so by calling them we add the values they return together
	'use strict';
    var cakePrice = traerDensidadSeleccionada() * traerDensidadSeleccionada2() / getIndiceDeLogro() / 1000000.00 * 0.9144, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro(), densidadobjetivo = traerDensidadSeleccionada();
			
	//Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales1 = cakePrice.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed(2), resultadodosdecimales3 = densidadobjetivo.toFixed(2), divobj = document.getElementById('totalPrice_pr_pul'); //Aqui exponemos el calculo
	divobj.style.display = 'block';
	divobj.innerHTML = 'Você vai precisar plantar ' + resultadodosdecimales2 + ' sementes por accre, que representa ' + resultadodosdecimales1 + ' sementes en umn jarda da linha de plantio para alcançar a densidade alvo de ' + resultadodosdecimales3;
}

function calculateTotal2_pr_pul() {
    //Aqui obtenemos los kilogramos de semilla por hectarea
    'use strict';
	var pesoMil = traerDensidadSeleccionada() * [getPesoDeMil() / 1000] / 1000, densidadimplantada = traerDensidadSeleccionada() / getIndiceDeLogro();
	
    //Aqui configuramos los decimales que queremos que aparezcan en el resultado
	var resultadodosdecimales4 = pesoMil.toFixed(2), resultadodosdecimales2 = densidadimplantada.toFixed(), divobj2 = document.getElementById('totalPrice2_pr_pul'); //Aqui exponemos el calculo
	divobj2.style.display = 'block';
	divobj2.innerHTML = ' As ' + resultadodosdecimales2 + ' plantas representam ' + resultadodosdecimales4 + ' Kg. de sementes por acre';
}

// Seccion Función Ocultamiento de Resultado para español en sistema metrico
// Español - Español - Español - Español - Español - Español - Español - Español - Español - Español 

function hideTotal() {
    'use strict';
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}

function hideTotal2() {
    'use strict';
    var divobj2 = document.getElementById('totalPrice2');
    divobj2.style.display = 'none';
}


// Seccion Función Ocultamiento de Resultado para español en sistema real
function hideTotal_mx() {
    'use strict';
    var divobj2 = document.getElementById('totalPrice_mx');
    divobj2.style.display = 'none';
}

function hideTotal2_mx() {
    'use strict';
    var divobj2 = document.getElementById('totalPrice2_mx');
    divobj2.style.display = 'none';
}


// Seccion Función Ocultamiento de Resultado para ingles en sistema metrico
// INGLES - INGLES - INGLES - INGLES - INGLES - INGLES - INGLES - INGLES - INGLES - INGLES - INGLES - INGLES

function hideTotal_usa_cm() {
    'use strict';
    var divobj3 = document.getElementById('totalPrice_usa_cm');
    divobj3.style.display = 'none';
}

function hideTotal2_usa_cm() {
    'use strict';
    var divobj3 = document.getElementById('totalPrice2_usa_cm');
    divobj3.style.display = 'none';
}


// Seccion Función Ocultamiento de Resultado para ingles en sistema real

function hideTotal_usa_pul() {
    'use strict';
    var divobj4 = document.getElementById('totalPrice_usa_pul');
	divobj4.style.display = 'none';
}

function hideTotal2_usa_pul() {
    'use strict';
    var divobj4 = document.getElementById('totalPrice2_usa_pul');
    divobj4.style.display = 'none';
}


// Seccion Función Ocultamiento de Resultado para portugues en sistema metrico
// PORTUGUES - PORTUGUES - PORTUGUES - PORTUGUES - PORTUGUES - PORTUGUES - PORTUGUES - PORTUGUES - PORTUGUES - PORTUGUES

function hideTotal_pr_cm() {
    'use strict';
    var divobj3 = document.getElementById('totalPrice_pr_cm');
    divobj3.style.display = 'none';
}

function hideTotal2_pr_cm() {
    'use strict';
    var divobj3 = document.getElementById('totalPrice2_pr_cm');
    divobj3.style.display = 'none';
}


// Seccion Función Ocultamiento de Resultado para ingles en sistema real

function hideTotal_pr_pul() {
    'use strict';
    var divobj4 = document.getElementById('totalPrice_pr_pul');
    divobj4.style.display = 'none';
}

function hideTotal2_pr_pul() {
    'use strict';
    var divobj4 = document.getElementById('totalPrice2_pr_pul');
	divobj4.style.display = 'none';
}