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
exports.CarcassesController = void 0;
const common_1 = require("@nestjs/common");
const carcasses_domain_service_1 = require("./carcasses.domain.service");
const createCarcass_dto_1 = require("./dto/createCarcass.dto");
let CarcassesController = class CarcassesController {
    constructor(carcassesDomainService) {
        this.carcassesDomainService = carcassesDomainService;
    }
    async createCarcass(createCarcassDto) {
        return await this.carcassesDomainService.createCarcass(createCarcassDto);
    }
    async findAll() {
        return await this.carcassesDomainService.findAll();
    }
};
exports.CarcassesController = CarcassesController;
__decorate([
    (0, common_1.Post)('create_carcass'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('carcass')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCarcass_dto_1.CreateCarcassDto]),
    __metadata("design:returntype", Promise)
], CarcassesController.prototype, "createCarcass", null);
__decorate([
    (0, common_1.Get)('carcasses_list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarcassesController.prototype, "findAll", null);
exports.CarcassesController = CarcassesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [carcasses_domain_service_1.CarcassesDomainService])
], CarcassesController);
//# sourceMappingURL=carcasses.controller.js.map