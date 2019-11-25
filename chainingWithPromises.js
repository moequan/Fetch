const allRuler = ['Cersei Lannister', 'Maria', 'Maurice', 'Swantje', 'Florian', 'Vladi'];
const times = [5000, 3000, 2000, 1000, 1000, 1000]; //wartet 5 Sek, dann 3, dann 2, denn chain
let index = 0;
let currentRuler;
const changeRuler = (rulerName, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rulerName);
    }, time)
  });
};
/*
Here main difference is that first operation has 5000 so it means this operation will wait 5 sek and then execute and after that next (then) operation (3000) will execute and so on. So it is defference then previous example chainingWithoutPromise.
*/
changeRuler(allRuler[index], times[index]) //index = 0, changeRuler('Cersei Lannister', 5000)
  .then((result, error) => { //resolve(rulerName);
    //resolve(rulerName);
    //then's first parameter (result) is always for the resolve/success
    //then's second parameter (error) is always for the reject/failure
    currentRuler = result; //braucht man nicht, soll nur analog zu chainingWithoutPromises.js sein
    console.log(currentRuler); //'Cersei Lannister'; hier wäre dann console.log(result);
    index++;
    return changeRuler(allRuler[index], times[index]); //index = 1, changeRuler (Maria, 3000)
  })
  .then((result, error) => { //resolve(rulerName);
    currentRuler = result;
    console.log(currentRuler); //'Maria'
    index++;
    return changeRuler(allRuler[index], times[index]); //index = 2, changeRuler (Maurice, 2000)
  })
  .then((result, error) => { //resolve(rulerName);
    currentRuler = result;
    console.log(currentRuler); //'Maurice'
    index++;
    return changeRuler(allRuler[index], times[index]); //index = 3, changeRuler (Swantje, 1000)
  })
  .then((result, error) => { //resolve(rulerName);
    currentRuler = result;
    console.log(currentRuler); //'Cersei Lannister'
    index++;
    return changeRuler(allRuler[index], times[index]); //index = 4, changeRuler (Florian, 1000)
  })
  .then((result, error) => { //resolve(rulerName);
    currentRuler = result;
    console.log(currentRuler); //'Cersei Lannister'
    index++;
    return changeRuler(allRuler[index], times[index]); //index = 5, changeRuler (Vladi, 1000)
  })
