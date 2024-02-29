"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransmissionsService = void 0;
const common_1 = require("@nestjs/common");
const createTransmission_dto_1 = require("./dto/createTransmission.dto");
const transmissions_domain_service_1 = require("./transmissions.domain.service");
let TransmissionsService = class TransmissionsService {
    constructor(transmissionsDomainService) {
        this.transmissionsDomainService = transmissionsDomainService;
    }
    createNewTransmission(car) {
        console.log("TRANSMISSIONS ---> Create new order, ->DB");
        let data = new createTransmission_dto_1.CreateTransmissionDto();
        data.car = car;
        this.transmissionsDomainService.createTransmission(data).then((transmission) => {
            transmission.status = 'Done';
            transmission.completeAt = new Date();
            transmission.isExecuted = true;
            this.transmissionsDomainService.update(transmission.id, transmission).then(() => {
                console.log("TRANSMISSIONS ---> New order ready, ->DB");
            });
        });
    }
};
exports.TransmissionsService = TransmissionsService;
exports.TransmissionsService = TransmissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transmissions_domain_service_1.TransmissionsDomainService])
], TransmissionsService);
//# sourceMappingURL=transmissions.service.js.map