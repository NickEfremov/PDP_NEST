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
exports.CarcassesService = void 0;
const common_1 = require("@nestjs/common");
const createCarcass_dto_1 = require("./dto/createCarcass.dto");
const carcasses_domain_service_1 = require("./carcasses.domain.service");
let CarcassesService = class CarcassesService {
    constructor(carcassesDomainService) {
        this.carcassesDomainService = carcassesDomainService;
    }
    createNewCarcass(car) {
        console.log("CARCASS ---> Create new order, ->DB");
        let data = new createCarcass_dto_1.CreateCarcassDto();
        data.car = car;
        this.carcassesDomainService.createCarcass(data).then((carcass) => {
            carcass.status = 'Done';
            carcass.completeAt = new Date();
            carcass.isExecuted = true;
            this.carcassesDomainService.update(carcass.id, carcass).then(() => {
                console.log("CARCASS ---> New order ready, ->DB");
            });
        });
    }
};
exports.CarcassesService = CarcassesService;
exports.CarcassesService = CarcassesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [carcasses_domain_service_1.CarcassesDomainService])
], CarcassesService);
//# sourceMappingURL=carcasses.service.js.map