export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    protected balance: number = 0;
    private status: boolean = true;

    protected constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    public getName = (): string => {
        return this.name;
    };

    public getAccountNumber = (): number => {
        return this.accountNumber;
    };

    public deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value;
            console.log(`(+) Deposito de $${value} realizado com sucesso!`);
        }
    };

    public withdraw = (value: number): void => {
        if (this.validateStatus()) {
            if (this.balance > 0) {
                this.balance -= value;
                console.log(`(-) Retirada de $${value} foi realizada com sucesso!`);
            } else {
                console.log(`Você não pode sacar seu saldo é: $${this.balance}, por favor realize um depósito!`);
            }
        }
    };

    public getBalance = (): number => {
        return this.balance;
    };

    public setBalance = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value;
        }
    };

    protected validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error("Conta inválida");
    };
}
