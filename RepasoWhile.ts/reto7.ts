function getMNames(arrNames:string[]) {

    let x: boolean = true;
         let i = 0;
    while (i < arrNames.length && x == true){
        if (arrNames[i][0] == "M"){


        }     else {
            x = false;
        }  
        
        i++
    }
    return x;

    
}
console.log(getMNames(["Maria","Jose", "Manolo","Marta","Mario"]));