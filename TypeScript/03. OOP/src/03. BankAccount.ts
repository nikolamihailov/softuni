interface BankAccountInfo {
  id: number;
  balance: number;
  interestRate: number;
  deposit: (sum: number) => void;
}

class BankAccount implements BankAccountInfo {
  static currentId: number = 1;
  private _id: number;
  private _balance: number;
  private _interestRate: number = 0.02;

  constructor(balance: number) {
    this._id = BankAccount.currentId++;
    this._balance = balance;
    console.log(`Account ID${this.id} created!`);
  }

  get id(): number {
    return this._id;
  }

  get balance(): number {
    return this._balance;
  }

  get interestRate(): number {
    return this._interestRate;
  }

  set interestRate(interestRate: number) {
    if (interestRate > 0) {
      this._interestRate = interestRate;
    }
  }

  deposit(sum: number) {
    this._balance += sum;
    console.log(`Deposited ${sum} to ID${this.id}.`);
  }
}

const bankAcc1 = new BankAccount(1000);
console.log(bankAcc1);
console.log(bankAcc1.interestRate);
bankAcc1.interestRate = 2;
bankAcc1.deposit(200);
console.log(bankAcc1);

const bankAcc2 = new BankAccount(100);
bankAcc2.deposit(100000);
console.log(bankAcc2);
