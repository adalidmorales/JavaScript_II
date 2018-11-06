
setInterval("mostrarNav()",1000);

function mostrarNav(){
    let nav=document.getElementById("nav");
    if (nav==undefined){
        console.log("Error. No se encuentra el id nav")
    }else{
        if (nav.style.display=="none")
            nav.style.display="block";
        else
            nav.style.display="none";
    }
}

function modificarBanner(){
    mostrarNav();
    let banner=document.getElementById("banner");
    if (banner==undefined){
        console.log("Error. No se encuentra el id banner")
    }else{
        banner.innerHTML+="<br><br><br><h1>Esto es nuevo</h1>";
        banner.style.backgroundColor="red"

    }
}



/*
if (banner.style.display=="none")
            banner.style.display="block";
        else
            banner.style.display="none"
*/