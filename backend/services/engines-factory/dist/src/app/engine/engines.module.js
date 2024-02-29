"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnginesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const engines_domain_service_1 = require("./engines.domain.service");
const engines_controller_1 = require("./engines.controller");
const engine_entity_1 = require("./engine.entity");
const engines_service_1 = require("./engines.service");
const engine_subscriber_1 = require("./subscribers/engine.subscriber");
const messaging_module_1 = require("../messaging/messaging.module");
let EnginesModule = class EnginesModule {
};
exports.EnginesModule = EnginesModule;
exports.EnginesModule = EnginesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([engine_entity_1.Engine]),
            (0, common_1.forwardRef)(() => messaging_module_1.MessagingModule)
        ],
        providers: [
            engines_domain_service_1.EnginesDomainService,
            engines_service_1.EnginesService,
            engine_subscriber_1.EngineSubscriber
        ],
        controllers: [engines_controller_1.EnginesController],
        exports: [engines_service_1.EnginesService]
    })
], EnginesModule);
//# sourceMappingURL=engines.module.js.map