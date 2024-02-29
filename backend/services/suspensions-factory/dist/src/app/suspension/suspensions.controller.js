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
exports.SuspensionsController = void 0;
const common_1 = require("@nestjs/common");
const suspensions_domain_service_1 = require("./suspensions.domain.service");
const createSuspension_dto_1 = require("./dto/createSuspension.dto");
let SuspensionsController = class SuspensionsController {
    constructor(suspensionsDomainService) {
        this.suspensionsDomainService = suspensionsDomainService;
    }
    async createSuspension(createSuspensionDto) {
        return await this.suspensionsDomainService.createSuspension(createSuspensionDto);
    }
    async findAll() {
        return await this.suspensionsDomainService.findAll();
    }
};
exports.SuspensionsController = SuspensionsController;
__decorate([
    (0, common_1.Post)('create_suspension'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('suspension')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSuspension_dto_1.CreateSuspensionDto]),
    __metadata("design:returntype", Promise)
], SuspensionsController.prototype, "createSuspension", null);
__decorate([
    (0, common_1.Get)('suspensions_list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SuspensionsController.prototype, "findAll", null);
exports.SuspensionsController = SuspensionsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [suspensions_domain_service_1.SuspensionsDomainService])
], SuspensionsController);
//# sourceMappingURL=suspensions.controller.js.map