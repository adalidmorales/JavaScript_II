
function abrirVentana(x,y,w,h){
    window.moveTo(x,y);
    window.resizeTo(w,h);
}

function derecha(){
    abrirVentana(screen.availWidth/2,0,
                 screen.availWidth/2,screen.availHeight/2);
}