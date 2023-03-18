//forEach() method
const fruits = ['apple', 'orange', 'guava', 'grape'];
const allFruits = fruits.forEach((fruit) => {
  console.log(fruit);
});

//reverse() method
const employees = ['Davis', 'Zappa', 'Mary', 'Adams', 'Bright'];
employees.reverse();
console.log(employees);

 // sort() method
/* const students = [
  {name: 'John', grade: 75},
  {name: 'Jane', grade: 93},
  {name: 'Samantha', grade: 90},
  {name: 'Michael', grade: 94},
];
const copiedArray = [... students];
const sortedGrades = copiedArray.sort((a, b) => b.grade - a.grade);
console.log(copiedArray);
console.log(copiedArray.reverse());
console.log(copiedArray.find((grades) => grades.grade > 90));
*/

//includes() method
/* const careers = ['teacher', 'doctor', 'engineer', 'nurse', 'scientist'];
const farmerIncluded = careers.includes('farmer');
const nurseIncluded =  careers.includes('nurse');
console.log(farmerIncluded);
console.log(nurseIncluded);
*/

/* const bowlingScores = [154, 204, 300, 184, 286];

const includes300 = bowlingScores.some((score) => score == 300);
const include300 = bowlingScores.includes(300);
console.log(include300);
console.log(includes300);

const below150 = bowlingScores.some((score) => score < 150);
console.log(below150);

const evenNumber = bowlingScores.every((score) => (score % 2) == 0);
console.log(evenNumber);
*/

// Stack: push()and pop()
/*const drinks = ['coffee', 'tea', 'soda', 'water'];
drinks.push('wine');
console.log('Wine included; ',drinks);

const seasons = ['spring', 'summer', 'fall', 'winter'];
const removedSeason = seasons.pop();
console.log('popped value: ',removedSeason);
console.log('Seasons: ',seasons);
*/

// Queue: unshift()and shift()
/*const ages = [18, 33, 71,29, 65, 62];
const addAge = ages.unshift(36)
console.log('addAge: ', addAge);
console.log('ages: ', ages);

const holidays = ['Labor Day', 'Hanakkuh', 'Independence Day'];
const removeHoliday = holidays.shift();
console.log('removeHoliday: ',removeHoliday);
console.log('holidays: ', holidays);
*/

//Stacks and Queues Excercises
/*const foods = [
  {food: 'raspberries', type: 'fruit'},
  {food: 'orange', type: 'fruit'},
  {food: 'brocoli', type: 'vegetable'},
  {food: 'quinoa', type: 'grain'},
];
const blackbeans = {food: 'blackbeans', type: 'legume'};
const chiaSeeds = {food: 'chia seeds', type: 'seed'};

const removeLastElementInFoodsArray = foods.pop();

//const removeLastElementInFoodsArray = foods.pop((popFood) => popFood.food);
console.log(removeLastElementInFoodsArray);
console.log('Remove last element in the array: ',foods);

const firstItem = foods.shift();
console.log('Remove first element in the array: ',foods);

const addBeans = foods.unshift(blackbeans);
console.log('addBeans to beggining of Array: ',foods);

const addChiaSeeds = foods.push(chiaSeeds);
console.log('Add Chia-seed to the end of the array: ',foods);
*/

//map() method
/*const bioName = [
  {firstname: 'Jane', lastname: 'Doe'},
  {firstname: 'John', lastname: 'Smith'},
  {firstname: 'Maria', lastname: 'Mongo'}
];
const fullName = bioName.map((bio) => `${bio.firstname} ${bio.lastname}`);
console.log(fullName);
*/

//filter() method
/*const pets = [
  {name:"Alfie", type: "dog"},
  {name:"Sally", type: "cat"},
  {name:"Hunter", type: "dog"},
  {name:"Garfield", type: "cat"},
  {name:"Karen", type: "cat"},
  {name:"Fido", type: "dog"},
];
const onlyCats = pets.filter((pet)=> pet.type ==='cat');
console.log(onlyCats);

const groceries = [
  {item:"apples", type: "fruit"},
  {item:"cereal", type: "pantry"},
  {item:"pork chips", type: "meat"},
  {item:"bananas", type: "fruit"},
  {item:"brocoli", type: "vegetable"},
  {item:"5Alive", type: "juice"},
];
/*const fruits = groceries.filter((grocery)=> { 
return grocery.type === 'fruit'});
console.log(fruits);


const fruits = groceries.filter((grocery) => grocery.type === 'fruit');
console.log(fruits);
*/

//reduce() method
/*const bills = [1200, 29.99, 65.93, 17.32, 44.76];
const totalBill = bills.reduce((total, bill) => total + bill);
console.log(totalBill);
*/

//flatMap() method
/*const wordJumble = ['shampoo', 'conditioner', 'soap'];
const splitWords = wordJumble.flatMap((element) => element.split(''));
console.log(splitWords);
*/

//excercises
/*const movies = [
  {title: 'Avatar',
   year: '2009',
   rating: 'pG-13'
  },
  {
    title: 'I Am Legend',
    year: '2007',
    rating: 'pG-13'
  },
  {title: 'The Avengers',
   year: '2012',
   rating: 'pG-13'
  },
  {title: 'The Wolf of Wall Street',
   year: '2013',
   rating: 'R'
  }
];

const movieTitle = movies.map((movie) => movie.title);
console.log('Movie Titles: ',movieTitle);

const rated13 = movies.filter((movie) =>movie.rating ==='pG-13');
console.log('Movies rated pG-13', rated13);

const noOfRMovie = movies.reduce((total, movie) => {
  if(movie.rating === 'R'){
    total++;
  }
  return total;
}, 0);
console.log(noOfRMovie);
*/







