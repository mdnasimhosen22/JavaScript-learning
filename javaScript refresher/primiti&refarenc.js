// primite value
// je khane variable gulor value change hote pare refarence change hoi na
let a = 7;
let b = 5;
console.log(b);
b = a;
console.log(a);
console.log(b);

// refarence value er khtre r parar ta same na
let language = ["js", "python"];
let markup = ["html", "css"];
language = markup;

console.log(language);
console.log(markup);
language.push("java");
console.log(language);
console.log(markup);

// refarence value khetre refarece copy hoi tai jokhon akta change hoi sathe joto refarence thake sob gulo change hoi
