class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const namesSet = new Set();
        for (const line of footballPlayers) {
            const [name, age, playerValue] = line.split("/");
            const player = this.invitedPlayers.find(player => player.name === name);
            if (!player) this.invitedPlayers.push({ name, age, playerValue });
            else player.playerValue = playerValue;
            namesSet.add(name);
        }
        let res = "You successfully invite ";
        Array.from(namesSet).forEach(n => {
            res += `${n}, `;
        });
        return res.slice(0, -2) + ".";
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split("/");
        const player = this.invitedPlayers.find(player => player.name === name);
        if (!player) throw new Error(`${name} is not invited to the selection list!`);
        if (player.playerValue > playerOffer) throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`);
        player.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(player => player.name === name);
        if (!player) throw new Error(`${name} is not invited to the selection list!`);
        if (player.age < age) {
            if (age - player.age < 5) {
                return `${name} will sign a contract for ${age - player.age} years with ${this.clubName} in ${this.country}!`;
            } else if (age - player.age >= 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        const res = ["Players list:"];
        this.invitedPlayers.sort((a, b) => (a.name).localeCompare(b.name));
        this.invitedPlayers.forEach(pl => {
            res.push(`Player ${pl.name}-${pl.playerValue}`);
        });
        return res.join("\n");
    }
}
/*
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.ageLimit("Lionel Messi", 33));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
*/
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

