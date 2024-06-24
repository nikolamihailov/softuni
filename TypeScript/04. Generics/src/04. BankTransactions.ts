abstract class CreateAccount<T, U> {
  bankName: T;
  bankId: U;

  constructor(bankName: T, bankId: U) {
    this.bankName = bankName;
    this.bankId = bankId;
  }
}

class PersonalAccount<T, U> extends CreateAccount<T, U> {
  private ownerName: string;
  money = 0;
  recentTransactions = {};

  constructor(bankName: T, bankId: U, ownerName: string) {
    super(bankName, bankId);
    this.ownerName = ownerName;
  }

  deposit(amount: number) {
    this.money += amount;
  }

  expense(amount: number, expenseType: string) {
    if (this.money >= 0 && this.money > this.money - amount) {
      if (this.recentTransactions[expenseType]) {
        this.recentTransactions[expenseType] += amount;
        this.money -= amount;
        return;
      }
      this.recentTransactions[expenseType] = amount;
      this.money -= amount;
    }

    if (this.money < 0 || this.money < this.money - amount) {
      throw new Error(`You cant make ${expenseType} transaction`);
    }
  }
  showDetails() {
    const accountDetails = [];
    const moneySpent = Object.values(this.recentTransactions).reduce(
      (sum: number, amount: number) => sum + amount,
      0
    );
    accountDetails.push(`Bank name: ${this.bankName}`);
    accountDetails.push(`Bank ID: ${this.bankId}`);
    accountDetails.push(`Owner name: ${this.ownerName}`);
    accountDetails.push(`Money: ${this.money}`);
    accountDetails.push(`Money spent: ${moneySpent}`);
    return accountDetails.join("\n");
  }
}

const account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");

account.deposit(1000);

account.deposit(1000);

account.expense(700, "Buy new phone");

account.expense(400, "Book a vacation");

account.expense(400, "Book a vacation");

account.expense(100, "Buy food");

console.log(account.showDetails());
