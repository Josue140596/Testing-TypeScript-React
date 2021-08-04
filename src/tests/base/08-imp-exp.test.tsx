
export {}


import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/base-pruebas/08-imp-exp";
import { heroes } from "../../data/heroes";

describe('Prubas en funciones de heroes', () => {


    test('debe de retornar un heroe por ID', () => {
        
        const id:number= 1;

        const heroe = getHeroeById(id)

        const heroeData = heroes.find(h=>h.id === id);

        expect(heroe).toEqual(heroeData);


    });


    test('debe de retornar UDEFINE si un heroe no existe', () => {
        
        const id:number= 100;

        const heroe = getHeroeById(id)

    

        expect(heroe).toBe(undefined);


    });

    test('debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner:string= "DC";

        const heroe = getHeroesByOwner(owner)

        const heroesDC = heroe.filter(h=> h.owner)



        
        expect(heroe).toEqual(heroesDC);


    });
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner:string= "MARVEL";

        const heroe = getHeroesByOwner(owner)

        const heroesDC = heroe.filter(h=> h.owner)



        
        expect(heroe.length).toBe(heroesDC.length);


    });
    
    
});





