import colors from "colors";
// import { pausa, showMenu } from "./helpers/messages.js";
import { inquirerMenu, pause, readInput } from "./helpers/inquirer.js";
import Tasks from "./models/tasks.js";
import { saveDB } from "./helpers/saveFile.js";

const main = async () => {
  console.clear();
  let opt;
  const tasks = new Tasks();
  try {
    do {
      opt = await inquirerMenu();
      switch (opt) {
        case 1:
          //crear opcion
          const desc = await readInput('Description:');
          tasks.createTask(desc);
          break;
        case 2:
          console.log(tasks.arrayList)
          break;
      }

      // saveDB(tasks.arrayList);

      await pause();
    } while (opt !== 0);
  } catch (error) {
    console.log(error);
  }
};

main();
