// Spread operator, concatenate multiple arrays, array max
const ages = [11, 14, 13, 16, 17];
const ages2 = [12, 15, 20, 19];
const cousin = [25, 22, 30];
console.log(spread);
// merge all array to a single array
const allAges = ages.concat(ages2).concat([3]).concat(cousin);
console.log(allAges);
// merge all array to a single array by using ...(3dots)
const allAges2 = [...ages, ...ages2, 5,10,...cousin];
console.log(allAges2);
const business = 650;
const shachib = 200;
const minister = 350;
const poisha = [650, 200, 350];
const maximum = Math.max(...poisha);
const max = Math.max(business, shachib, minister);
console.log(max);
console.log(maximum);