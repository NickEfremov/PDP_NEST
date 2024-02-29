import { Injectable } from '@nestjs/common';
import { CreateCarcassDto } from './dto/createCarcass.dto';
import { CarcassesDomainService } from './carcasses.domain.service';


@Injectable()
export class CarcassesService {
    constructor(private carcassesDomainService: CarcassesDomainService) {}

    public createNewCarcass(car: string): void {
        console.log("CARCASS ---> Create new order, ->DB")
        let data = new CreateCarcassDto();
        data.car = car;

        this.carcassesDomainService.createCarcass(data).then((carcass) => {
            carcass.status = 'Done';
            carcass.completeAt = new Date();
            carcass.isExecuted = true;

            this.carcassesDomainService.update(carcass.id, carcass).then(() => {
                console.log("CARCASS ---> New order ready, ->DB")
            })
        });
    }
}