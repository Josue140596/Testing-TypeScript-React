export {}



const personajes:Array<string> = ['Goku','Vegeta','Trunks'];

const [ , , p3 ]:Array<string> = personajes;


export const retornaArreglo = ():Array<any> =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 


const usState = ( valor:number ):Array<any> => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}






