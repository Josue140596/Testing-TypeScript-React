
export {}

import { retornaArreglo } from "../../base-pruebas/base-pruebas/07-deses-arr"


describe('Pruebas en desestructuración', () => {

    test('debe de retornar un string y un número', () => {
        
        const [letras, numeros] = retornaArreglo();



        expect(letras).toBe("ABC");
        expect(numeros).toBe(123);



    })
    
})
