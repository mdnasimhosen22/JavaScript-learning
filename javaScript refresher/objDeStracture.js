const user = {
  id: 123,
  name: "nasim",
  age: 20,
  education: {
    degree: "Diploma",
    school: {
      name: "bogura school",
    },
  },
};
// const { id, name } = user;
const { education: { school: { name } = {} } = {} } = user;
console.log(name);
