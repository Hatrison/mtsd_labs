import readLine from "readline";
import solveEquation from "./solve.js";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptValue(name, canBeZero = true) {
  return new Promise((resolve, reject) => {
    rl.question(`${name} = `, (value) => {
      value = Number(value);

      if (isNaN(value) || (!canBeZero && value === 0)) {
        console.log("Wrong value");
        resolve(promptValue(name, canBeZero));
      } else {
        resolve(value);
      }
    });
  });
}

export default async function promptValues() {
  const a = await promptValue("a", false);
  const b = await promptValue("b");
  const c = await promptValue("c");
  rl.close();
  solveEquation(a, b, c);
}
