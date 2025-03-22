import { DioAccount } from "./DioAccount";

export class UserVip extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    public deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value + 10;
            console.log(`(+) Deposito de $${value} realizado com sucesso!`);
        }
    };
}