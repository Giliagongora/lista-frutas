/* Verificando que el enlace funciona mediante un alert */
alert("¡Hello World!")




function frutas(){

	var elementos = ["Manzana","Pera","Piña","Cereza","Naranja"];

/* LLamdo el input de texto y lo inserto en la variable a */
	var a = document.getElementById("textoIngresado").value;
/* Creo el elemento li de la lista y la inserto en variable b,
con createElement para que se imprima en el navegador */
	var b = document.createElement("compra");

/**/
	if(a == ""){
		alert("Debes ingresar un producto");
	}else if(a != "Manzana" && a != "Pera" && a != "Piña" && a != "Cereza" && a != "Naranja"){
		alert("Esa fruta no está en catálogo");
	}else{




/* Mi variable a la insert en la variable b mediante inner que genera la impresion del
elemento escrito en el input en el navegador */
	b.innerHTML = a + "<br>";
/* En catalogo de frutas inserto la variable b, es decir, b sera hijo de compras */
	document.getElementById("compra").appendChild(b);
/* Finalmente al texto una vez ingresado le inserto vacio despues que se le hace click */
	document.getElementById("textoIngresado").value =  "";
}

}

