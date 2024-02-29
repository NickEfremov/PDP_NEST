import { IsNotEmpty } from 'class-validator';

export class CreateTransmissionDto {
    @IsNotEmpty()
    car: string;
}