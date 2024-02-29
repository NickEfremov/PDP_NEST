import { CarcassesService } from '../carcass/carcasses.service';
export declare class MessagingController {
    carcassesService: CarcassesService;
    constructor(carcassesService: CarcassesService);
    createBody(msg: string): Promise<void>;
}
