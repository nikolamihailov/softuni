function deckOfCards(cards) {
    function createCard(face, suit) {
        const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const suits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
        if (!faces.includes(face)) return `Invalid card: ${face}${suit}`;
        if (!suits.hasOwnProperty(suit)) return `Invalid card: ${face}${suit}`;

        const obj = {
            face,
            suit,
            toString() {
                return `${this.face}${suits[this.suit]}`;
            }
        };
        return obj;
    }
    const allCards = [];
    for (const card of cards) {
        let [face, suit] = card.split("");
        if (card.includes("10")) { face = "10"; suit = card.slice(-1); }
        const createdCard = createCard(face, suit);
        if (typeof createdCard === "string") return console.log(createdCard);;
        allCards.push(createdCard.toString());
    }
    console.log(allCards.join(" "));
}
//deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);