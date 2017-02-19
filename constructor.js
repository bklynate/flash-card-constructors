const fs = require('fs');

function BasicCard(front, back, topic) {
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back);
  }
  this.front = front;
  this.back = back;

  // fs.appendFile('basic_cards.txt', JSON.stringify(this), (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // })
}

let cardOne = new BasicCard("Who is the leader of the ASAP MOB?", "Yamborghini");

function ClozeCard(text, cloze) {

  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze);
  }

  this.text = text;
  this.cloze = cloze;
}

ClozeCard.prototype.createPartial = function() {
  let newArr = this.text.split(' ')
  newArr[0] = "..."
  return this.partial = newArr.join(' ')
}

ClozeCard.prototype.fulltext = function() {
  return this.text;
}

let cardTwo = new ClozeCard("Who is the leader of the ASAP MOB?", "Yamborghini");
