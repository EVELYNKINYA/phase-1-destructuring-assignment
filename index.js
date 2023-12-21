const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const  animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};
const { moo, neigh, baa, oink, cluck } = animalSounds;

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const traditionalAnimalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};
const { bessie, dolly, babe, little} = traditionalAnimalNames;
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const traditionalAnimalColors ={
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
}
const {blackAndWhite, black, pink} = traditionalAnimalColors;

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const traditionalRainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; 

const [red, orange, yellow, green, blue, indigo, violet] = traditionalRainbowColors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const sixTraditionalRainbowColors = [
  { initial: "r", name: "red" },
  { initial: "o", name: "orange" },
  { initial: "y", name: "yellow" },
  { initial: "g", name: "green" },
  { initial: "b", name: "blue" },
  { initial: "v", name: "violet" }
];

const colorNames = {};
sixTraditionalRainbowColors.forEach(color => {
  colorNames[color.initial] = color.name;
});
const { r, o, y, g, b, v } = colorNames;

 // 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

 const oneTraditionalRainbowColor = [
  { initial: "indg", name: "indigo" },
];
const [{ name: indg = "indigo" }] = oneTraditionalRainbowColor;

// 7. Use destructuring to assign all variables using the keys as the variable names
const muppets = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

// Destructuring assignment to assign variables based on the keys
const { muppetName, color, song, job, partner } = muppet;
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const kermit = {
  songs: {
    song1: "Rainbow Connection",
    song2: "Moving Right Along",
    song3: "Bein' Green",
    song4: "I Hope That Something Better Comes Along"
  },
  details: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};
const { songs: { song2, song4 }, details: { job: nestedJob, partner: nestedPartner } } = kermit;

