export default function solveEquation(a, b, c) {
  const D = (-b) ** 2 - 4 * a * c;

  const equation = `(${a})*x^2 + (${b})*x + (${c}) = 0`;
  console.log(equation);

  if (D < 0) {
    console.log("There are 0 roots");
  } else if (D === 0) {
    const x = -b / (2 * a);
    console.log(`There are 1 root x = ${x.toFixed(2)}`);
  } else {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log(
      `There are 2 roots\nx1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`
    );
  }
}
