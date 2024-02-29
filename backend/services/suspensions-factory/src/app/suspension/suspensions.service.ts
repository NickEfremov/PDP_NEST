import { Injectable } from '@nestjs/common';
import { CreateSuspensionDto } from './dto/createSuspension.dto';
import { SuspensionsDomainService } from './suspensions.domain.service';


@Injectable()
export class SuspensionsService {
    constructor(private suspensionsDomainService: SuspensionsDomainService) {}

    public createNewSuspension(car: string): void {
        console.log("SUSPENSIONS ---> Create new order, ->DB")
        let data = new CreateSuspensionDto();
        data.car = car;

        this.suspensionsDomainService.createSuspension(data).then((suspension) => {
            suspension.status = 'Done';
            suspension.completeAt = new Date();
            suspension.isExecuted = true;

            this.suspensionsDomainService.update(suspension.id, suspension).then(() => {
                console.log("SUSPENSIONS ---> New order ready, ->DB")
            })
        });
    }
}