// core/game_logic.js

import { ask_player_action } from "./player_io.js";

export function calculate_hand_value(hand) {
    let total = 0;

    for (const card of hand) {
        const r = card.rank;
        if (["J", "Q", "K"].includes(r)) total += 10;
        else if (r === "A") total += 1; 
        else total += Number(r);
    }

    return total;
}

export function deal_two_each(deck, player, dealer) {
    for (let i = 0; i < 2; i++) {
        player.hand.push(deck.shift());
        dealer.hand.push(deck.shift());
    }

    console.log("Player hand:", player.hand, "=>", calculate_hand_value(player.hand));
    console.log("Dealer hand:", dealer.hand, "=>", calculate_hand_value(dealer.hand));
}

export function dealer_play(deck, dealer) {
    while (calculate_hand_value(dealer.hand) < 17) {
        dealer.hand.push(deck.shift());
        console.log("Dealer hits:", dealer.hand);
    }

    const val = calculate_hand_value(dealer.hand);

    if (val > 21) {
        console.log("Dealer BUSTED!");
        return false;
    }

    return true;
}

export function run_full_game(deck, player, dealer) {
    deal_two_each(deck, player, dealer);

    // Player turn
    while (true) {
        const action = ask_player_action();

        if (action === "H") {
            player.hand.push(deck.shift());
            const v = calculate_hand_value(player.hand);
            console.log("Player hits:", player.hand, "=>", v);

            if (v > 21) {
                console.log("PLAYER BUSTED! Dealer wins.");
                return;
            }
        } else {
            break;
        }
    }

    // Dealer turn
    const dealer_ok = dealer_play(deck, dealer);
    if (!dealer_ok) {
        console.log("Player wins!");
        return;
    }

    // Compare hands
    const p = calculate_hand_value(player.hand);
    const d = calculate_hand_value(dealer.hand);

    console.log(`Final — Player: ${p}, Dealer: ${d}`);

    if (p > d) console.log("Player wins!");
    else if (d > p) console.log("Dealer wins!");
    else console.log("Tie!");
}
