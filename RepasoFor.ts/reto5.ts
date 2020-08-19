function arcoiris(colores:string[]) {
    // arcoiris = ["rojo", "naranja","amarillo", "verde", "cian",
    //  "azul", "violeta"]
    for (let i=0; i<colores.length; i++) {
        if ((colores[i]=="Rojo") || (colores[i]=="Naranja") || (colores[i]=="Amarillo") || 
            (colores[i]=="Verde") || (colores[i]=="Cian") || (colores[i]=="Azul") || (colores[i]=="Violeta"))
             {
                console.log(colores[i] + "-" + "Es un color del arcoiris");
            }
        else {
            console.log(colores[i] + "-" + "No es un color del arcoiris");
        }
    }
}
arcoiris(["Verde", "Azul", "Negro", "Marron", "Rosa"]);