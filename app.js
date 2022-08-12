capital=prompt("Introduzca el capital solicitado");
let cuotas = parseInt(prompt("Eliga la cantidad de cuotas entre 3, 6, 9, 12 y 24:"));
if (cuotas == 3){
	mostrar3();
}
else if (cuotas == 6){
	mostrar6();
}
else if (cuotas == 9){
	mostrar9();
}
else if (cuotas == 12){
	mostrar12();
}
else if (cuotas == 24){
	mostrar24();
}

function mostrar3() {
	alert('Elegiste 3 cuotas con un interes del 10%');
	let i3 = 10/100*capital;
	let valorCuota3 = (capital + i3) / 3
	alert("El monto de "+capital+" en 3 cuotas y con un interes del 10% tendra un valor de "+valorCuota3+" cada cuota");
}
function mostrar6() {
	alert('Elegiste 6 cuotas con un interes del 20%');
	let i6 = 20/100*capital;
	let valorCuota6 = (capital + i6) / 6
	alert("El monto de "+capital+ " en 6 cuotas y con un interes del 20% tendra un valor de "+valorCuota6+" cada cuota");
}
function mostrar9() {
	alert('Elegiste 9 cuotas con un interes del 30%');
	let i9 = 30/100*capital;
	let valorCuota9 = (capital + i9) / 9
	alert("El monto de "+capital+ " en 9 cuotas y con un interes del 30% tendra un valor de "+valorCuota9+" cada cuota");
}
function mostrar12() {
	alert('Elegiste 12 cuotas con un interes del 40%');
	let i12 = 40/100*capital;
	let valorCuota12 = (capital + i12) / 12
	alert("El monto de "+capital+ " en 12 cuotas y con un interes del 40% tendra un valor de "+valorCuota12+" cada cuota");
}
function mostrar24() {
	alert('Elegiste 24 cuotas con un interes del 50%');
	let i24 = 50/100*capital;
	let valorCuota24 = (capital + i24) / 24
	alert("El monto de "+capital+ " en 24 cuotas y con un interes del 50% tendra un valor de "+valorCuota24+" cada cuota");
}