// const personas = [
//     { nombre: "Juan", edad: 30 },
//     { nombre: "Maria", edad: 25 },
//     { nombre: "Pedro", edad: 35 }
// ];

// localStorage.setItem('usario1', JSON.stringify(personas[0]));

let usuarioObtenido = JSON.parse(localStorage.getItem('usario1'))
console.log(usuarioObtenido)