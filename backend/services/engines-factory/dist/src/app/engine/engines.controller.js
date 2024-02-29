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
exports.EnginesController = void 0;
const common_1 = require("@nestjs/common");
const engines_domain_service_1 = require("./engines.domain.service");
const createEngine_dto_1 = require("./dto/createEngine.dto");
let EnginesController = class EnginesController {
    constructor(enginesDomainService) {
        this.enginesDomainService = enginesDomainService;
    }
    async createEngine(createEngineDto) {
        return await this.enginesDomainService.createEngine(createEngineDto);
    }
    async findAll() {
        return await this.enginesDomainService.findAll();
    }
};
exports.EnginesController = EnginesController;
__decorate([
    (0, common_1.Post)('create_engine'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('engine')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createEngine_dto_1.CreateEngineDto]),
    __metadata("design:returntype", Promise)
], EnginesController.prototype, "createEngine", null);
__decorate([
    (0, common_1.Get)('engines_list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnginesController.prototype, "findAll", null);
exports.EnginesController = EnginesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [engines_domain_service_1.EnginesDomainService])
], EnginesController);
//# sourceMappingURL=engines.controller.js.map