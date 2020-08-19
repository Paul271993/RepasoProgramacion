export function sumaCaracteres(nombres:string[]) {
    let totalStrings: number = 0;
         for (let i=0; i<nombres.length; i++){
             totalStrings += nombres[i].length;
         
         }
         return totalStrings;
         
}





console.log(sumaCaracteres(["Mar","Jose","Manolo","Marta"]));