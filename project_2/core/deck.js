// core/deck.js

export function build_standard_deck() {
    const suits = ["H", "C", "D", "S"];
    const ranks = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

    const deck = [];

    for (const suite of suits) {
        for (const rank of ranks) {
            deck.push({ rank, suite });
        }
    }

    return deck; // 52 קלפים
}

export function shuffle_by_suit(deck, swaps = 5000) {
    const n = deck.length;

    for (let i = 0; i < swaps; i++) {
        const idx1 = Math.floor(Math.random() * n);
        let idx2 = Math.floor(Math.random() * n);

        const suite = deck[idx1].suite;

        while (
            idx1 === idx2 ||
            !isIndexAllowedForSuite(suite, idx2)
        ) {
            idx2 = Math.floor(Math.random() * n);
        }

        // swap
        [deck[idx1], deck[idx2]] = [deck[idx2], deck[idx1]];
    }

    return deck;
}

function isIndexAllowedForSuite(suite, j) {
    if (suite === "H") return j % 5 === 0;
    if (suite === "C") return j % 3 === 0;
    if (suite === "D") return j % 2 === 0;
    if (suite === "S") return j % 7 === 0;
    return false;
}
