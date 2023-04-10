import colors from "colors";
// import { pausa, showMenu } from "./helpers/messages.js";
import { inquirerMenu, pause } from "./helpers/inquirer.js";

const main = async () => {
  console.clear();
  let opt;
  try {
    do {
      opt = await inquirerMenu();    
      console.log({opt})
      await pause();
    } while (opt !== 0);
  } catch (error) {
    console.log(error);
  }
};

main();
