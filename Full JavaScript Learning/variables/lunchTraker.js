const lunches = [];
function addLunchToEnd(menuArr, lunchStr) {
  menuArr.push(lunchStr);
  console.log(`${lunchStr} added to the end of the lunch menu.`);
  return menuArr;
}
function addLunchToStart(menuArr, lunchStr) {
  menuArr.unshift(lunchStr);
  console.log(`${lunchStr} added to the start of the lunch menu.`);
  return menuArr;
}
function removeFirstLunch(menuArr) {
  if (menuArr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removedItem = menuArr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return menuArr;
}
function removeLastLunch(menuArr) {
  if (menuArr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let RemoveItem = menuArr.pop();
    console.log(`${RemoveItem} removed from the end of the lunch menu.`);
  }
  return menuArr;
}
function getRandomLunch(menuArr) {
  if (menuArr.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomItem = menuArr[Math.floor(Math.random() * menuArr.length)];
    console.log("Randomly selected lunch: " + randomItem);
  }
}
function showLunchMenu(menuArr) {
  if (menuArr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + menuArr.join(", "));
  }
}

showLunchMenu(lunches);

addLunchToEnd(lunches, "Burger");
addLunchToEnd(lunches, "Pizza");
addLunchToStart(lunches, "Salad");

showLunchMenu(lunches);
getRandomLunch(lunches);

removeFirstLunch(lunches);
removeLastLunch(lunches);
showLunchMenu(lunches);
