// import readline from "readline";

// const showMenu = () => {
//   return new Promise((resolve) => {
//     console.clear();
//     console.log("=====================".rainbow);
//     console.log("Seleccione una opción".green);
//     console.log("=====================\n".rainbow);

//     console.log(`${"1.".green} Crear tarea`);
//     console.log(`${"2.".green} Listar tarea`);
//     console.log(`${"3.".green} Listar tareas completadas`);
//     console.log(`${"4.".green} Listar tareas pendientes`);
//     console.log(`${"5.".green} Completar tarea(s)`);
//     console.log(`${"6.".green} Borrar tarea`);
//     console.log(`${"0.".green} Salir\n`);

//     const interF = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     interF.question("Seleccione una opción: \n", (opt) => {
//       if(isNaN(opt)){
//         console.log("\nNo se aceptan letras, por favor introduce valores numéricos".red)
//       }
//       interF.close();
//       resolve(+opt);
//     });
//   });
// };
// const pausa = () => {
//   return new Promise((resolve, reject) => {
//     const interF = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     interF.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
//       interF.close();
//       resolve();
//     });
//   });
// };

// export { showMenu, pausa };
