const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, stroke) {
  if (stroke === 1) {
    return names[0];
  } else if (stroke <= par - 2) {
    return names[1];
  }
  if (stroke <= par - 1) {
    return names[2];
  }
  if (stroke === par) {
    return names[3];
  }
  if (stroke === par + 1) {
    return names[4];
  }
  if (stroke === par + 2) {
    return names[5];
  }
  return names[6];
}
console.log(golfScore(1, 1));
console.log(golfScore(4, 2));
console.log(golfScore(4, 3));
console.log(golfScore(2, 2));
console.log(golfScore(3, 4));
console.log(golfScore(3, 5));
console.log(golfScore(3, 6));
