import { Injectable } from '@nestjs/common';
import { CreateTransmissionDto } from './dto/createTransmission.dto';
import { TransmissionsDomainService } from './transmissions.domain.service';


@Injectable()
export class TransmissionsService {
    constructor(private transmissionsDomainService: TransmissionsDomainService) {}

    public createNewTransmission(car: string): void {
        console.log("TRANSMISSIONS ---> Create new order, ->DB")
        let data = new CreateTransmissionDto();
        data.car = car;

        this.transmissionsDomainService.createTransmission(data).then((transmission) => {
            transmission.status = 'Done';
            transmission.completeAt = new Date();
            transmission.isExecuted = true;

            this.transmissionsDomainService.update(transmission.id, transmission).then(() => {
                console.log("TRANSMISSIONS ---> New order ready, ->DB")
            })
        });
    }
}