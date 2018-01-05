export enum PaymentType {DEPOSIT, WITHDRAW};

export class Payment{
  constructor(public id: string, public amount: number, public paymentType: PaymentType, public walletNumber: string, public createDate: string){}
}
