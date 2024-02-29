import { IsNotEmpty } from 'class-validator';

export class CreateSuspensionDto {
    @IsNotEmpty()
    car: string;
}