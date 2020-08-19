// function revertirArray1(arr:number[]){
//     console.log(arr.reverse());
// }
// revertirArray1([1,2,3,4,5,6,7,8,9,10]);

function revertirArray2(arr:number[]) {
    var resultado = [];
   for (let i=arr.length-1; i>=0; i--) {
       resultado.push(arr[i]);
   }
   return resultado;
    
}

console.log(revertirArray2([1,2,3,4,5,6,7,8,9,10]));