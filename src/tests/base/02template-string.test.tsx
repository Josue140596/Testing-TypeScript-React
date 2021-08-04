
export {}

import { getSaludo } from "../../base-pruebas/base-pruebas/02-template-string";


describe('Probando strings', () => {
    
    // test("Debe de retornar hola + nombre", ()=>{

    //     const nombre:string = "Bryan";

    //     const saludo:string = getSaludo(nombre);


    //     expect(saludo).toBe("Hola " + nombre);
    // });

    test('should retorn a saludo with name', () => {
        
        const nombre:string = "Carlos";

        const saludo:string = getSaludo(nombre);

        expect(saludo).toBe("Hola "+ nombre)


    })
        
    
})