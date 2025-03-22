import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { UserVip } from "./class/UserVip";

// People Account
console.log("\nMétodo People Account");

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(500);

console.log(`(!) Nome: ${peopleAccount.getName()}, Conta: ${peopleAccount.getAccountNumber()}, Saldo: ${peopleAccount.getBalance()}`);
peopleAccount.withdraw(150);
console.log(`(!) Nome: ${peopleAccount.getName()}, Conta: ${peopleAccount.getAccountNumber()}, Saldo: ${peopleAccount.getBalance()}`);

// Company Account
console.log("\nMétodo Company Account");

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(`(!) Nome: ${companyAccount.getName()}, Conta: ${companyAccount.getAccountNumber()}, Saldo: ${companyAccount.getBalance()}`);
companyAccount.deposit(500);
console.log(`(!) Nome: ${companyAccount.getName()}, Conta: ${companyAccount.getAccountNumber()}, Saldo: ${companyAccount.getBalance()}`);
companyAccount.withdraw(200);

console.log("\nMétodo Loan");
console.log(`(!) Nome: ${companyAccount.getName()}, Conta: ${companyAccount.getAccountNumber()}, Saldo: ${companyAccount.getBalance()}`);
companyAccount.getLoan(1000);
console.log(`(!) Nome: ${companyAccount.getName()}, Conta: ${companyAccount.getAccountNumber()}, Saldo (após empréstimo): ${companyAccount.getBalance()}`);

// VIP Account 
console.log("\nVIP ACCOUNT");

const userVip: UserVip = new UserVip("Nath", 11);
console.log(`(!) Nome: ${userVip.getName()}, Conta: ${userVip.getAccountNumber()}, Saldo: ${userVip.getBalance()}`);
userVip.deposit(100);
console.log(`(!) Nome: ${userVip.getName()}, Conta: ${userVip.getAccountNumber()}, Saldo: ${userVip.getBalance()}`);
userVip.deposit(100);
console.log(`(!) Nome: ${userVip.getName()}, Conta: ${userVip.getAccountNumber()}, Saldo: ${userVip.getBalance()}`);
userVip.withdraw(230);
console.log(`(!) Nome: ${userVip.getName()}, Conta: ${userVip.getAccountNumber()}, Saldo: ${userVip.getBalance()}\n`);
userVip.withdraw(5);
console.log(`\n(!) Nome: ${userVip.getName()}, Conta: ${userVip.getAccountNumber()}, Saldo: ${userVip.getBalance()}`);

