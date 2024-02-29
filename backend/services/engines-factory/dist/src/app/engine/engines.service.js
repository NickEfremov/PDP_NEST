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
exports.EnginesService = void 0;
const common_1 = require("@nestjs/common");
const createEngine_dto_1 = require("./dto/createEngine.dto");
const engines_domain_service_1 = require("./engines.domain.service");
let EnginesService = class EnginesService {
    constructor(enginesDomainService) {
        this.enginesDomainService = enginesDomainService;
    }
    createNewEngine(car) {
        console.log("ENGINE ---> Create new order, ->DB");
        let data = new createEngine_dto_1.CreateEngineDto();
        data.car = car;
        this.enginesDomainService.createEngine(data).then((engine) => {
            engine.status = 'Done';
            engine.completeAt = new Date();
            engine.isExecuted = true;
            this.enginesDomainService.update(engine.id, engine).then(() => {
                console.log("ENGINE ---> New order ready, ->DB");
            });
        });
    }
};
exports.EnginesService = EnginesService;
exports.EnginesService = EnginesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [engines_domain_service_1.EnginesDomainService])
], EnginesService);
//# sourceMappingURL=engines.service.js.map