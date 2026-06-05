// regular function

// function er majh kicu return na korle ta in directly undefined return kore
function fun() {
  console.log("hello regular function");
  //   return undefined
}
const result = fun();
console.log(result);

// function exprssion
const hello = function () {
  console.log("hello regular function");
};
console.log(hello);

// ecxpression holo kono akta kicu ke akta variable er majhe assing kora
// statement holo kono kaj kora

// named function exprssion

{
  const hello = function say() {
    console.log("hello regular function");
  };
  console.log(hello);
}
// function er akta name dewa valo pactice

// arow function

const nasim = () => {
  console.log("arow fun loget");
};
nasim();

// anonymous function
// je fun er name nai take anonymous fun bole

function hello() {
  return () => {
    console.log("anonymous function return it");
  };
}

// hello fun akta anonymous funtion return korche
