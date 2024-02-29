import { IsNotEmpty } from 'class-validator';

export class CreateEngineDto {
    @IsNotEmpty()
    car: string;
}