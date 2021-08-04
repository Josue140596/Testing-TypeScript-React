export {}

test("deben ser iguales los strings", ()=>{

    
    const mensaje1:string = "Hola Mundo";

    const mensaje2:string = `Hola Mundo`;

    expect(mensaje1).toBe(mensaje2)
    

});