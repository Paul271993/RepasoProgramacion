// function existePar(arr:number[]) {
    
//     let i = 0;
//     while (i <= arr.length){
//     if (arr[i] % 2 == 0) 
//     i++
//     }
//     return true
// }
// console.log(existePar([3,3,1,7,1]));


function existePar(arr:number[]) {
    
    let i = 0;
    while (i < arr.length){
    if (arr[i] % 2 == 0) 
    {
        return "Existe numero par";
    }
    i++
    }
     return "No existe numero par";
}
console.log(existePar([3,7,7,2]));
