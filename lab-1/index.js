import promptValues from "./interactive.js";
import readFile from "./non-interactive.js";

const checkPath = () => !!process.argv[2];

function main() {
  if (checkPath()) readFile();
  else promptValues();
}

main();
