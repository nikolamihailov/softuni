class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) return `${participantName} has already been added to the list`;
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) throw new Error(`${participantName} is not in the current participants list`);
        if (condition < 30) throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        const disciplines = Math.floor(condition / 30);
        if (disciplines <= 2) return `${participantName} could only complete ${disciplines} of the disciplines`;
        else {
            this.listOfFinalists.push({ participantName, participantGender: this.participants[participantName] });
            delete this.participants[participantName];
        }
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        const finalist = this.listOfFinalists.find(f => f.participantName === participantName);
        if (!finalist) return `${participantName} is not in the current finalists list`;
        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) return `There are no finalists in this competition`;
        if (criteria === "male") {
            const finalist = this.listOfFinalists.find(f => f.participantGender === "male");
            if (!finalist) return `There are no ${participantGender}'s that finished the competition`;
            else return `${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else if (criteria === "female") {
            const finalist = this.listOfFinalists.find(f => f.participantGender === "female");
            if (!finalist) return `There are no ${participantGender}'s that finished the competition`;
            else return `${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else if (criteria === "all") {
            const res = [`List of all ${this.competitionName} finalists:`];
            this.listOfFinalists.sort((a, b) => (a.participantName).localeCompare(b.participantName));
            this.listOfFinalists.forEach(f => {
                res.push(`${f.participantName}`);
            });
            return res.join("\n");
        }
    }
}
/*
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.completeness("George", 20));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));

const contest = new Triathlon("Dynamos");
console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));
*/
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));


