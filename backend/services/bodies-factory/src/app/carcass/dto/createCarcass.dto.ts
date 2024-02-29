import { IsNotEmpty } from 'class-validator';

export class CreateCarcassDto {
    @IsNotEmpty()
    car: string;
}