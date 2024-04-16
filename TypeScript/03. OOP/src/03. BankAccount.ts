interface BankAccountInfo {
  id: number;
  balance: number;
  interestRate: number;
}

class BankAccount implements BankAccountInfo {
  private id: number;
  private balance: number;
  private interestRate: number;
}
