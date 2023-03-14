import fs from "fs";
import solveEquation from "./solve.js";

export default function readFile() {
  let file;
  try {
    file = fs.readFileSync(process.argv[2]).toString();
  } catch {
    console.log(`File ${process.argv[2]} does not exist`);
  }

  const firstLine = file.split(/\r?\n/)[0];
  if (!firstLine) return new Error("Invalid file format");

  const values = firstLine.split(/\s+/).map((item) => Number(item));
  const length = values.length;
  if (values.some((value) => isNaN(value)) || values[0] === 0 || length !== 3) {
    return new Error("Invalid incoming values");
  }

  solveEquation(...values);
  process.exit();
}
