document.form1.ciudad.selectedIndex=-1;
document.form1.registrar.onclick= procesar;
document.form1.nombre.onblur=function(){
  this.style.backgroundColor="DARKSALMON"
    }    
    onfocus= function(){
        if(this.style!=undefined)
        this.style.backgroundColor="CRIMSON"
    }
document.form1.correo.onfocus= onfocus;
//anonima 
document.form1.limpiar.onclick = function(){
    alert(this.value);
}
function procesar(){
    //en este contexto this es el boton 
    alert(this.value);
    if (validar()){
        alert("se proceso exitosamente...");
    }
}
function validar(){
    if(!esta_vacio(document.form1.nombre,
                "Debe escribir el nombre"))
        if(validarcorreo(document.form1.correo))
            if(validar_select(document.form1.ciudad))
                    if (validar_ckeck(document.form1.acepto))
                        return true;
                    else
                        return false;
}