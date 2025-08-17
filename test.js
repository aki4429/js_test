// ---------------- utils ----------------
const ops = {
  add:   (a, b) => a + b,
  sub:   (a, b) => a - b,
  mul:   (a, b) => a * b,
  div:   (a, b) => b === 0 ? '÷0!?' : a / b
};

console.log(ops['add'](2,3));
console.log(ops['sub'](2,3));
console.log(ops['mul'](2,3));