const allRulers = ['Maria', 'Maurice', 'Swantje', 'Florian', 'Vladi'];
const times = [5000, 3000, 2000, 1000, 1000, 1000];
let index = 0;

const changeRuler = (rulerName, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rulerName);
    }, time)
  });
}
changeRuler(allRulers[index], times[index])
  .then(name => {
    currentRuler = name;
    console.log(currentRuler);
    index++;
    return changeRuler(allRulers[index], times[index])
  })
