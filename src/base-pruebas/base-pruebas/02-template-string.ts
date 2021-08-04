export {}


const nombre:string = 'Bryan';
const apellido:string = 'Sánchez';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto:string = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre:string = "Carlos"):string {
    return 'Hola ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );

