// RETOS DE REPASO 1: RETO 2 
// DADO UN PAIS IMPRIMIR EL CONTINENTE AL QUE PERTENECE

function saberContinente(pais:string) {
    
    
    if ((pais == "España")||(pais == "Italia")||(pais == "Rumania")||
    (pais == "Francia")||(pais == "Alemania"))
    {
        console.log("Europa");
    }

    if ((pais == "China")||(pais == "Japon")||(pais == "Corea")||
    (pais == "Hong Kong")||(pais == "Nepal"))
    {
        console.log("Asia");
    }

    if ((pais == "Australia")||(pais == "Nueva Zelanda")||(pais == "Samoa")||
    (pais == "Islas Solomon")||(pais == "Palaos"))
    {
        console.log("Oceania");
    }

    if ((pais == "Argelia")||(pais == "Angola")||(pais == "Burundi")||
    (pais == "Egipto")||(pais == "Etiopia"))
    {
        console.log("Africa");
    }

    if ((pais == "Estados Unidos")||(pais == "Canada")||(pais == "Argentina")||
    (pais == "Mexico")||(pais == "Chile"))
    {
        console.log("America");
    }

}
saberContinente("Mexico");