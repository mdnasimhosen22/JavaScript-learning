const user = {
  id: 123,
  name: "nasim",
  age: 20,
  education: {
    degree: "Diploma",
    school: {
        name: "bogura school",?
    },
  },
};

// optional cening holo property er pore akta ? mark dewa  mane jodi oi ta na thake taw code cholbe 
console.log(user?.education?.school?.name);
