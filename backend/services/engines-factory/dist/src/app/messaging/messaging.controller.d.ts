import { EnginesService } from '../engine/engines.service';
export declare class MessagingController {
    enginesService: EnginesService;
    constructor(enginesService: EnginesService);
    createEngine(msg: string): Promise<void>;
}
