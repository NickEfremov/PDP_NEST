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
exports.SuspensionsService = void 0;
const common_1 = require("@nestjs/common");
const createSuspension_dto_1 = require("./dto/createSuspension.dto");
const suspensions_domain_service_1 = require("./suspensions.domain.service");
let SuspensionsService = class SuspensionsService {
    constructor(suspensionsDomainService) {
        this.suspensionsDomainService = suspensionsDomainService;
    }
    createNewSuspension(car) {
        console.log("SUSPENSIONS ---> Create new order, ->DB");
        let data = new createSuspension_dto_1.CreateSuspensionDto();
        data.car = car;
        this.suspensionsDomainService.createSuspension(data).then((suspension) => {
            suspension.status = 'Done';
            suspension.completeAt = new Date();
            suspension.isExecuted = true;
            this.suspensionsDomainService.update(suspension.id, suspension).then(() => {
                console.log("SUSPENSIONS ---> New order ready, ->DB");
            });
        });
    }
};
exports.SuspensionsService = SuspensionsService;
exports.SuspensionsService = SuspensionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [suspensions_domain_service_1.SuspensionsDomainService])
], SuspensionsService);
//# sourceMappingURL=suspensions.service.js.map