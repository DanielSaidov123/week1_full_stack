// main.js

import { build_standard_deck, shuffle_by_suit } from "./core/deck.js";
import { run_full_game } from "./core/game_logic.js";

const deck = shuffle_by_suit(build_standard_deck());

const player = { hand: [] };
const dealer = { hand: [] };

console.log("=== BLACKJACK ===");
await run_full_game(deck, player, dealer);

process.exit();
