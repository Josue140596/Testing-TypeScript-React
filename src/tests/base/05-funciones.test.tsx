
export {}

import { getUser, getUsuarioActivo } from "../../base-pruebas/base-pruebas/05-funciones"



describe('Pruebas en funciones 5', () => {
    test('getuser debe de retornar un Object ', () => {
        

        const userTest:Object = {
            uid: "ABC123",
            username: "El_Papi1502",
            
        }
        
        const user:Object = getUser();
        
        
        expect(user).toEqual(userTest);
        
    })
    
    
    test('getUser Retornar un objeto pero con argumentos', () => {
        
        
        const nombre:string = "alberto"

        const userTest2:Object = {
            
            uid: "ABC567",
            username: nombre,
        }


        const userActivo = getUsuarioActivo(nombre);

        
        

        expect(userActivo).toEqual(userTest2);

    })
    
    
})
