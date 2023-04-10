import colors from "colors";
import { pausa, showMenu } from "./helpers/messages.js";

const main = async () => {
  console.clear();
  let opt;
  try {
    do {
      opt = await showMenu();
      if(isNaN(opt)){
        console.log(`\nNo se aceptan letras, por favor introduce valores numéricos`)
      }
      await pausa();
    } while (opt !== 0);
  } catch (error) {
    console.log(error);
  }
};

main()
