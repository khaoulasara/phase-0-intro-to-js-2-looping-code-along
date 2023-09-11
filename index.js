// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(namesArray, event) {
  let thankYouCards = [];
  for (let i = 0; i < namesArray.length; i++) {
    let thankYouMessage = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
    thankYouCards.push(thankYouMessage);
    console.log(thankYouMessage);
  }
  return thankYouCards;
}

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber -= 1;
  }
}

// Example usages:
writeCards(["Charlie", "Samip", "Ali"], "birthday");
countDown(10);
