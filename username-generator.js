const adjectives = [
  'Cool',
  'Crazy',
  'Handsome',
  'Amazing',
  'Majestic',
  'Spectacular',
  'Magnificent',
  'Awesome',
  'Gorgeous',
  'Happy',
  'Ecstatic',
  'Silly',
  'Legit',
  'Superb',
  'Interesting',
  'Quick',
  'Strong',
  'Smart',
  'Mischievous',
  'Little',
  'Tiny',
  'Cute',
  'Funny',
  'Furious',
  'Angry'
]

const colors = [
  'White',
  'Gray',
  'Black',
  'Red',
  'Maroon',
  'Yellow',
  'Olive',
  'Lime',
  'Green',
  'Aqua',
  'Teal',
  'Blue',
  'Navy',
  'Fuchsia',
  'Purple',
  'Pink',
  'Gold',
  'Silver',
  'Indigo',
  'Brown',
  'Orange'
]

const animals = [
  'Monkey',
  'Donkey',
  'Fawn',
  'Penguin',
  'Sheep',
  'Lion',
  'Seal',
  'Parrot',
  'Falcon',
  'Pig',
  'Goat',
  'Cow',
  'Tiger',
  'Kangaroo',
  'Beaver',
  'Unicorn',
  'Dragon',
  'Elf',
  'Bear',
  'Otter',
  'Racoon',
  'Cat',
  'Dog',
  'Hamster',
  'Shark',
  'Fish',
  'Chicken',
  'Mouse',
  'Peacock',
  'Fox',
  'Pug',
  'Bird'
]
module.exports = function generate () {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return  `${adjective} ${color} ${animal}`
}
