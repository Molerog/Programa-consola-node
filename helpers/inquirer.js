import inquirer from "inquirer";

const menuOpts = [
  {
    type: "list",
    name: "option",
    message: "¿Qué desa hacer?",
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Crear lista`,
      },
      {
        value: 2,
        name: `${'2.'.green} Listar tareas`,
      },
      {
        value: 3,
        name: `${'3.'.green} Listar tareas completadas`,
      },
      {
        value: 4,
        name: `${'4.'.green} Listar tareas pendientes`,
      },
      {
        value: 5,
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: 6,
        name: `${'6.'.green} Borrar tarea`,
      },
      {
        value: 0,
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

const pauseOpts = [
  {
    type: "input",
    name: "pause",
    message: `Presione ${"ENTER".green} para continuar\n`,
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=====================".rainbow);
  console.log("Seleccione una opción".white);
  console.log("=====================\n".rainbow);

  const { option } = await inquirer.prompt(menuOpts);

  return option;
};

const pause = async () => {
  console.log("\n");
  const input = await inquirer.prompt(pauseOpts);
  return input;
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const {desc} = await inquirer.prompt(question);
  return desc;
};

export { inquirerMenu, pause, readInput };
