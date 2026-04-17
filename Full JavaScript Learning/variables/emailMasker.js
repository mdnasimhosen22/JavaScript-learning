function emailMaker(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const fristName = username[0];
  const lastName = username[username.length - 1];
  const midCharecter = username.length - 2;
  const maskEmail = fristName + "*".repeat(midCharecter) + lastName + domain;
  return maskEmail;
}
const email = "username@gmail.com";
console.log(emailMaker(email));
