import {Mobile} from "./reto1"

let mobile1 = new Mobile("Nokia3210", "45AJ", "TM", "5GB", "Black",
                                 false, 1, 500);

let mobile2 = new Mobile("iPhone3G", "La Polla", "XS", "50GB", "Blue",
                                false, 1, 700);

let mobile3 = new Mobile("Samsung Galaxy 10", "X69", "LA", "69GB", "Green",
                                true, 3, 666);

// CREANDO ARRAY DE OBJETOS DE LA CLASE MOBILE
let mobiles = [mobile1, mobile2, mobile3];                            

// MOSTRAR LOS ATRIBUTOS DE CADA UNO
console.log(mobile1);
console.log(mobile2);
console.log(mobile3);

// MOSTRAR LOS ATRIBUTOS DE TODOS 
console.log(mobiles);

// MOSTRAR ATRIBUTOS DE UN OBJETO DEL ARRAY
mobile1.mostrarCaracteristicas();

// MOSTRAR CADA UNO DE LOS ATRIBUTOS DE CADA UNO DE LOS OBJETOS DEL ARRAY
console.log(mobiles.toString());

// MODIFICANDO ATRIBUTOS DE "Nokia3210"
mobile1.setIs5G(true);
mobile1.setCameraNumber(4);

// MOSTRANDO LOS ATRIBUTOS DE "Nokia3210" MODIFICADOS
mobile1.mostrarCaracteristicas();
