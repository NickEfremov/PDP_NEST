import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
    @IsNotEmpty()
    readonly car: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
}