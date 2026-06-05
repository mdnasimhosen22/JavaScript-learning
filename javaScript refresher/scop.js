var lang = "Bangla";
function learning(topic) {
  lang = topic;
  console.log(`I am learnig ${lang}`);
}
learning("Javascript");

console.log(`I know ${lang}`);

// scop holo kon variable kothai theke access korte parbo take bujhai
// js 3 ta scop ache global scop, function scop, block scop
// amader uporer example global scop dewa ache
// global scop er kherte amara fuction er vitor theke birer variable access korte parbo karon javascript sompurjon code dori akta function er undare thake .var k akta function scop bola hoi tai amar oi fun er vitote je kono jaiga theke ta ke access korte parben but function er baire theke access kora possibale noi

// block scop
function block(topic) {
  var lang = topic;
  if (true) {
    let a = 6;
    // let a = 6  that error
    a = 9;
    console.log("a = " + a);
  }
  //   console.log("a = " + a);  that error
  console.log(lang);
}
block("javaScript");

// let akti block scop mane {} jekono block er majhe create kora variable block er bire access kora vabe na.let ke re declear kora jai na but reassign kora jai. but var redeclear o kora jai

// cost o block scop
// const akti constant variabe
// e ke kono vabei pori borton kora ja na
// redeclear ba reassing kora jai na
// but refarence varibl er man poribor ton kora jabe mane const variabl jodi array ba object hoi tobe tar value change kora jabe
if (true) {
  const a = 8;
  //   const a = 8; error redecler not possible
  //   a = 3;  that error
  const obj = {
    a: 9,
  };
  obj.a = 67;
  console.log("obj = " + obj.a);
  console.log("a == " + a);
}
