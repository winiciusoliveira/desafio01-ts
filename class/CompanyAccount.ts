import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        const user_balance = this.getBalance();

        if (this.validateStatus()) {
            if (user_balance > 0) {
                this.setBalanceLoan(value);
            }
        }
    };

    protected setBalanceLoan = (value: number): void => {
        if (this.validateStatus()) {
            if (this.balance > 0) {
                this.balance += value;
            } else {
                console.log("Você não pode fazer um empréstimo com o valor negativo!");
            }
        }
    };
}
