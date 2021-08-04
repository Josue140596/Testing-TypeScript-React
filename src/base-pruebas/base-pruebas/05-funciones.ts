
export {}

const saludar2 = ( nombre:string ):string => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre:string ) => `Hola, ${ nombre }`;
const saludar4 = ():string => `Hola Mundo`;






export const getUser = ():Object  => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});



// Tarea
export const getUsuarioActivo = ( nombre:string ):Object =>({
    uid: 'ABC567',
    username: nombre
})




