class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const namesSet = new Set();
        for (const candidate of candidates) {
            const [name, education, yearsExperience] = candidate.split("-");
            const c = this.jobCandidates.find(c => c.name === name);
            if (c) {
                if (yearsExperience > c.yearsExperience) c.yearsExperience = yearsExperience;
            }
            else {
                this.jobCandidates.push({ name, education, yearsExperience: Number(yearsExperience) });
                namesSet.add(name);
            }
        }
        const allNames = Array.from(namesSet);
        return `You successfully added candidates: ${allNames.join(", ")}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split("-");
        const person = this.jobCandidates.find(p => p.name === name);
        if (!person) throw new Error(`${name} is not in the candidates list!`);
        if (Number(minimalExperience) > person.yearsExperience) throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        else person.yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const person = this.jobCandidates.find(p => p.name === name);
        if (!person) throw new Error(`${name} is not in the candidates list!`);
        const educataion = person.education;
        if (educataion === "Bachelor") return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        if (educataion === "Master") return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        if (educataion !== "Bachelor" || educataion !== "Master") return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) throw new Error("Candidate Database is empty!");
        const res = ["Candidates list:"];
        this.jobCandidates.sort((a, b) => (a.name).localeCompare(b.name));
        this.jobCandidates.forEach(c => {
            res.push(`${c.name}-${c.yearsExperience}`);
        });
        return res.join("\n");
    }
}
/*
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["Peter Parker-Bachelor-3", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

/*
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("John Jones-8"));

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));
*/
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication([]));
console.log(Jobs.candidatesDatabase());




