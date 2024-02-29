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
exports.SuspensionsDomainService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const suspension_entity_1 = require("./suspension.entity");
let SuspensionsDomainService = class SuspensionsDomainService {
    constructor(suspensionsRepository) {
        this.suspensionsRepository = suspensionsRepository;
    }
    findAll() {
        return this.suspensionsRepository.find();
    }
    findOne(id) {
        return this.suspensionsRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.suspensionsRepository.delete(id);
    }
    async update(id, suspension) {
        await this.suspensionsRepository.update(id, suspension);
    }
    async createSuspension(createSuspensionDto) {
        const newSuspension = new suspension_entity_1.Suspension();
        Object.assign(newSuspension, createSuspensionDto);
        return await this.suspensionsRepository.save(newSuspension);
    }
};
exports.SuspensionsDomainService = SuspensionsDomainService;
exports.SuspensionsDomainService = SuspensionsDomainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(suspension_entity_1.Suspension)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SuspensionsDomainService);
//# sourceMappingURL=suspensions.domain.service.js.map