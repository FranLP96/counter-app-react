const personajes = ['Asta','Noelle','Yami'];
const [ , , p3 ] = personajes;

export const retornaArreglo = () =>{
    return ['ABC', 123];
}

// const [letras, numeros] = retornaArreglo();

// Tarea
// 1. El primer valor del arr se llamarĂ¡ nombre
// 2. Se llamarĂ¡ setNombre
const usState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}