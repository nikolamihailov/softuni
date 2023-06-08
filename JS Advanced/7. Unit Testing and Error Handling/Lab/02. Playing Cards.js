function playingCards(face, suit) {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
    if (!faces.includes(face)) throw new Error("Error");
    if (!suits.hasOwnProperty(suit)) throw new Error("Error");

    const obj = {
        face,
        suit,
        toString() {
            return `${this.face}${suits[this.suit]}`;
        }
    };
    return obj;
}

const card = playingCards("K", "H");
console.log(card.toString());