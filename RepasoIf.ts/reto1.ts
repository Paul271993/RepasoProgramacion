function signoZodiacal(dia:number, mes:string) {
    

    if((dia>=21&&mes=="Marzo")||(dia<=20&&mes=="Abril"))
    {
        console.log('Aries');
    }

    if((dia>=24&&mes=="Septiembre")||(dia<=23&&mes=="Octubre"))
    {
        console.log('Libra');
    }

    if((dia>=21&&mes=="Abril")||(dia<=21&&mes=="Mayo"))
    {
        console.log('Tauro');
    }

    if((dia>=24&&mes=="Octubre")||(dia<=22&&mes=="Noviembre"))
    {
        console.log('Escorpio');
    }

    if((dia>=22&&mes=="Mayo")||(dia<=21&&mes=="Junio"))
    {
        console.log('Géminis');
    }

    if((dia>=23&&mes=="Noviembre")||(dia<=21&&mes=="Diciembre"))
    {
        console.log('Sagitario');
    }

    if((dia>=21&&mes=="Junio")||(dia<=23&&mes=="Julio"))
    {
        console.log('Cáncer');
    }

    if((dia>=22&&mes=="Diciembre")||(dia<=20&&mes=="Enero"))
    {
        console.log('Capricornio');
    }

    if((dia>=24&&mes=="Julio")||(dia<=23&&mes=="Agosto"))
    {
        console.log('Leo');
    }

    if((dia>=21&&mes=="Enero")||(dia<=19&&mes=="Febrero"))
    {
        console.log('Acuario');
    }

    if((dia>=24&&mes=="Agosto")||(dia<=23&&mes=="Septiembre"))
    {
        console.log('Virgo');
    }

    if((dia>=20&&mes=="Febrero")||(dia<=20&&mes=="Marzo"))
    {
        console.log('Piscis');
    }
}
signoZodiacal(27,"Julio");