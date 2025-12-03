// core/player_io.js

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function ask_player_action() {
    return new Promise(resolve => {
        rl.question("Hit or Stand? (H/S): ", ans => {
            ans = ans.trim().toUpperCase();

            if (ans !== "H" && ans !== "S") {
                console.log("Invalid input. Try again.");
                resolve(ask_player_action());
                return;
            }

            resolve(ans);
        });
    });
}
