const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function evaluateExpression(expression) {
  let numbers = [];
  let ops = [];

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "**": 3,
  };

  function applyOp() {
    let b = numbers.pop();
    let a = numbers.pop();
    let op = ops.pop();

    switch (op) {
      case "+":
        numbers.push(a + b);
        break;
      case "-":
        numbers.push(a - b);
        break;
      case "*":
        numbers.push(a * b);
        break;
      case "/":
        numbers.push(a / b);
        break;
      case "**":
        numbers.push(a ** b);
        break;
    }
  }

  let i = 0;

  while (i < expression.length) {
    let char = expression[i];
    // number build (multi-digit support)
    if (!isNaN(char) || char === ".") {
      let num = "";
      while (
        i < expression.length &&
        (!isNaN(expression[i]) || expression[i] === ".")
      ) {
        num += expression[i];
        i++;
      }
      numbers.push(parseFloat(num));
      continue;
    }
    if (expression[i] === "*" && expression[i + 1] === "*") {
      while (
        ops.length &&
        precedence[ops[ops.length - 1]] >= precedence["**"]
      ) {
        applyOp();
      }
      ops.push("**");
      i += 2; // ✅ দুইটা character একসাথে skip
      continue;
    }
    // operator handling
    if (["+", "-", "*", "/"].includes(char)) {
      while (
        ops.length &&
        precedence[ops[ops.length - 1]] >= precedence[char]
      ) {
        applyOp();
      }
      ops.push(char);
    }

    i++;
  }

  while (ops.length) {
    applyOp();
  }

  return numbers[0];
}
function calculate() {
  try {
    display.value = evaluateExpression(display.value);
  } catch {
    display.value = "Error";
  }
}

//   function calculate() {
//     try {
//       if (display.value.includes("/0")) {
//         display.value = "Error";
//       } else {
//         display.value = eval(display.value);
//       }
//     } catch {
//       display.value = "Error";
//     }
//   }
