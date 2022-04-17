////////////////////////////////////////////
// Coding Challenge 1
const dolphins = [85, 54, 41];
const koalas = [23, 34, 27];

// Helper function to calculate average of array
const calcAverage = (x) => {
  sum = 0;
  x.forEach((i) => {
    sum += i;
  });
  return sum / x.length;
};

// TODO: Calculate result of each team
resultDolphins = calcAverage(dolphins);
resultKoalas = calcAverage(koalas);

// TODO: check the winner
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas)
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  else if (2 * avgDolphins <= avgKoalas)
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  else console.log("There is no winner");
};

// TODO: End result
checkWinner(resultDolphins, resultKoalas);

//////////////////////////////////////////
// Coding Challenge 2
// calcTip to calculate tip from cost
const calcTip = (cost) => {
  if (cost > 0) {
    let tip = 0;
    if (50 <= cost <= 300) tip = cost * 0.15;
    else tip = cost * 0.2;
    return tip;
  }
};

const bills = [125, 555, 44];

let paids = [];

bills.forEach((bill) => {
  paids.push(calcTip(bill));
});

console.log(paids);

let total = 0;
paids.forEach((paid) => {
  total += paid;
});

console.log(total);

///////////////////////////////////////////////
//
