	
function calcular_nota_final()
{
	var desafio1=parseFloat(document.procesamiento.desafio1.value);
	var desafio2=parseFloat(document.procesamiento.desafio2.value);
	var desafio3=parseFloat(document.procesamiento.desafio3.value);
	var examen=parseFloat(document.procesamiento.examen.value);

	var sumatoria=desafio1+desafio2+desafio3+examen
	return(sumatoria/4);
}
var n=0;
var acumulador_pro=0;
var contador_apro=0;

function aprobacion()
{

    n++;
	var sumatoria=parseFloat(document.procesamiento.desafio1.value)+
	parseFloat(document.procesamiento.desafio2.value)+parseFloat(document.procesamiento.desafio3.value);
	var examen=parseFloat(document.procesamiento.examen.value);
	var mensaje;

	if (examen>0)
		acumulador_pro+=examen;
	
	if ((examen>80 && examen<100) && (sumatoria>80)){
		 mensaje=" Aprobado :D";
		 contador_apro++;
	}else mensaje=" Reprobado :C ";

	agregar=(mensaje=calcular_nota_final()+mensaje);
	document.procesamiento.Promedio.value=agregar;
}

function agrega()
{

	var alumnos=document.getElementById("Alumnos")
	alumnos.innerHTML+=n+"  "+"Alumno: "+document.procesamiento.nombre.value+"<br>"+
	"Nota desafio1 = "+document.procesamiento.desafio1.value+"<br>"+
	"Nota desafio2 = "+document.procesamiento.desafio2.value+"<br>"+
	"Nota desafio3 = "+document.procesamiento.desafio3.value+"<br>"+
	"Nota examen = "+document.procesamiento.examen.value+"<br>"+
	" Promedio de la nota final = "+document.procesamiento.Promedio.value+"<br>"+"<br>"+"<br>";
	
	document.procesamiento.reset();
	promediar()

}
function promediar(){
var Promedio1=acumulador_pro/n;
var cantidad_aprobados=contador_apro;
var porcentaje=cantidad_aprobados/n*100
  
  final=("Promedio de la Seccion en la nota de los examenes= "+Promedio1+"<br>"+
	"La cantidad de alumos aprobados es= "+contador_apro+"<br>"+
	"El porcentaje que reprecentan es de= "+porcentaje+"%"+"<br>"+"<br>");
  var alumnos=document.getElementById("Alumnos")
  alumnos.innerHTML+=final;
  }




