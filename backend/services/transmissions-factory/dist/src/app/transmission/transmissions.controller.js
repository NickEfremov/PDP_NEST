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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransmissionsController = void 0;
const common_1 = require("@nestjs/common");
const transmissions_domain_service_1 = require("./transmissions.domain.service");
const createTransmission_dto_1 = require("./dto/createTransmission.dto");
let TransmissionsController = class TransmissionsController {
    constructor(transmissionsDomainService) {
        this.transmissionsDomainService = transmissionsDomainService;
    }
    async createTransmission(createTransmissionDto) {
        return await this.transmissionsDomainService.createTransmission(createTransmissionDto);
    }
    async findAll() {
        return await this.transmissionsDomainService.findAll();
    }
};
exports.TransmissionsController = TransmissionsController;
__decorate([
    (0, common_1.Post)('create_transmission'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('transmission')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTransmission_dto_1.CreateTransmissionDto]),
    __metadata("design:returntype", Promise)
], TransmissionsController.prototype, "createTransmission", null);
__decorate([
    (0, common_1.Get)('transmissions_list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransmissionsController.prototype, "findAll", null);
exports.TransmissionsController = TransmissionsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [transmissions_domain_service_1.TransmissionsDomainService])
], TransmissionsController);
//# sourceMappingURL=transmissions.controller.js.map