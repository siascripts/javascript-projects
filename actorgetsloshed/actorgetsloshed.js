const cardVal = [
  {
    cardTitle: "Chicken Dance",
    image: "./assets/chicken-dance.gif",
  },
  {
    cardTitle: "Sleepwalking",
    image: "./assets/sleepwalking.gif",
  },
  {
    cardTitle: "Fishing for Compliments",
    image: "./assets/fishing-for-compliments.gif",
  },
  {
    cardTitle: "Lost in a Mall",
    image: "./assets/lost-in-a-mall.gif",
  },
  {
    cardTitle: "Winning a Lottery",
    image: "./assets/winning-a-lottery.gif",
  },
  {
    cardTitle: "Talking to a Plant",
    image: "./assets/talking-to-a-plant.gif",
  },
  {
    cardTitle: "Trapped in a Box",
    image: "./assets/trapped-in-a-box.gif",
  },
  {
    cardTitle: "Taming a Dragon",
    image: "./assets/taming-a-dragon.gif",
  },
  {
    cardTitle: "Caught in a Tornado",
    image: "./assets/caught-in-a-tornado.gif",
  },
  {
    cardTitle: "Eating Spicy Food",
    image: "./assets/eating-spicy-food.gif",
  },
  {
    cardTitle: "Juggling Flamingos",
    image: "./assets/juggling-flamingos.gif",
  },
  {
    cardTitle: "Lost in the Jungle",
    image: "./assets/lost-in-the-jungle.gif",
  },
  {
    cardTitle: "Riding an Invisible Horse",
    image: "./assets/riding-an-invisible-horse.gif",
  },
  {
    cardTitle: "In a Food Fight",
    image: "./assets/in-a-food-fight.gif",
  },
  {
    cardTitle: "Interviewing for a Job",
    image: "./assets/interviewing-for-a-job.gif",
  },
  {
    cardTitle: "Reading a Horror Story",
    image: "./assets/reading-a-horror-story.gif",
  },
  {
    cardTitle: "Running from Bees",
    image: "./assets/running-from-bees.gif",
  },
  {
    cardTitle: "Arguing with a Mirror",
    image: "./assets/arguing-with-a-mirror.gif",
  },
  {
    cardTitle: "Stuck in Quicksand",
    image: "./assets/stuck-in-quicksand.gif",
  },
  {
    cardTitle: "Walking on Hot Coals",
    image: "./assets/walking-on-hot-coals.gif",
  },
  {
    cardTitle: "Being a Mime",
    image: "./assets/being-a-mime.gif",
  },
  {
    cardTitle: "Caught in a Rainstorm",
    image: "./assets/caught-in-a-rainstorm.gif",
  },
  {
    cardTitle: "Winning a Beauty Pageant",
    image: "./assets/winning-a-beauty-pageant.gif",
  },
  {
    cardTitle: "Lost at Sea",
    image: "./assets/lost-at-sea.gif",
  },
  {
    cardTitle: "Stuck in Traffic",
    image: "./assets/stuck-in-traffic.gif",
  },
  {
    cardTitle: "Breaking a Piñata",
    image: "./assets/breaking-a-pinata.gif",
  },
  {
    cardTitle: "In a Pie-Eating Contest",
    image: "./assets/in-a-pie-eating-contest.gif",
  },
  {
    cardTitle: "Getting a Haircut",
    image: "./assets/getting-a-haircut.gif",
  },
  {
    cardTitle: "Running from a Ghost",
    image: "./assets/running-from-a-ghost.gif",
  },
  {
    cardTitle: "Caught in a Spider Web",
    image: "./assets/caught-in-a-spider-web.gif",
  },
  {
    cardTitle: "Seeing a UFO",
    image: "./assets/seeing-a-ufo.gif",
  },
  {
    cardTitle: "On a Roller Coaster",
    image: "./assets/on-a-roller-coaster.gif",
  },
  {
    cardTitle: "Winning a Race",
    image: "./assets/winning-a-race.gif",
  },
  {
    cardTitle: "Lost in a Maze",
    image: "./assets/lost-in-a-maze.gif",
  },
  {
    cardTitle: "Catching Butterflies",
    image: "./assets/catching-butterflies.gif",
  },
  {
    cardTitle: "At a Fashion Show",
    image: "./assets/at-a-fashion-show.gif",
  },
  {
    cardTitle: "In a Magic Show",
    image: "./assets/in-a-magic-show.gif",
  },
  {
    cardTitle: "Playing the Air Guitar",
    image: "./assets/playing-the-air-guitar.gif",
  },
  {
    cardTitle: "Riding a Mechanical Bull",
    image: "./assets/riding-a-mechanical-bull.gif",
  },
  {
    cardTitle: "Caught in a Snowstorm",
    image: "./assets/caught-in-a-snowstorm.gif",
  },
  {
    cardTitle: "Opening a Present",
    image: "./assets/opening-a-present.gif",
  },
  {
    cardTitle: "Being Tickled",
    image: "./assets/being-tickled.gif",
  },
  {
    cardTitle: "Climbing a Mountain",
    image: "./assets/climbing-a-mountain.gif",
  },
  {
    cardTitle: "Riding a Unicycle",
    image: "./assets/riding-a-unicycle.gif",
  },
  {
    cardTitle: "Doing a Magic Trick",
    image: "./assets/doing-a-magic-trick.gif",
  },
  {
    cardTitle: "Taking a Selfie",
    image: "./assets/taking-a-selfie.gif",
  },
  {
    cardTitle: "Playing Tug-of-War",
    image: "./assets/playing-tug-of-war.gif",
  },
  {
    cardTitle: "Escaping from Jail",
    image: "./assets/escaping-from-jail.gif",
  },
  {
    cardTitle: "Dancing in the Rain",
    image: "./assets/dancing-in-the-rain.gif",
  },
  {
    cardTitle: "On a Blind Date",
    image: "./assets/on-a-blind-date.gif",
  },
  {
    cardTitle: "Riding a Roller Skate",
    image: "./assets/riding-a-roller-skate.gif",
  },
  {
    cardTitle: "Doing the Robot Dance",
    image: "./assets/doing-the-robot-dance.gif",
  },
];
function randomDrinks() {
  const number = "123456";
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return { randomNumber };
}
(() => {
  const button = document.querySelector(".generate-button");
  button.addEventListener("click", function () {
    displayRandomValue(cardVal);
  });
})();

function generateRandomCard(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return { card: array[randomIndex], index: randomIndex };
}

function displayRandomValue(array) {
  if (array.length === 0) {
    alert("No more cards left to display.");
    return;
  }
  const { card, index } = generateRandomCard(array);
  const image = document.querySelector(".card-image");
  image.style.backgroundImage = `url(${card.image})`;
  const cardTitle = document.querySelector(".card-title");
  cardTitle.innerHTML = card.cardTitle;
  document.querySelector(".mid-content").innerHTML = "Or";
  const getSloshed = document.querySelector(".drinks");
  const { randomNumber } = randomDrinks();
  getSloshed.innerHTML = `${randomNumber} drink!!!!`;
  array.splice(index, 1);
}
