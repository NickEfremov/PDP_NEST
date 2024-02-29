import { Injectable } from '@nestjs/common';
import { CreateEngineDto } from './dto/createEngine.dto';
import { EnginesDomainService } from './engines.domain.service';


@Injectable()
export class EnginesService {
    constructor(private enginesDomainService: EnginesDomainService) {}

    public createNewEngine(car: string): void {
        console.log("ENGINE ---> Create new order, ->DB")
        let data = new CreateEngineDto();
        data.car = car;

        this.enginesDomainService.createEngine(data).then((engine) => {
            engine.status = 'Done';
            engine.completeAt = new Date();
            engine.isExecuted = true;

            this.enginesDomainService.update(engine.id, engine).then(() => {
                console.log("ENGINE ---> New order ready, ->DB")
            })
        });
    }
}