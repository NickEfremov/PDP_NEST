"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarcassesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carcasses_domain_service_1 = require("./carcasses.domain.service");
const carcasses_controller_1 = require("./carcasses.controller");
const carcass_entity_1 = require("./carcass.entity");
const carcasses_service_1 = require("./carcasses.service");
const carcass_subscriber_1 = require("./subscribers/carcass.subscriber");
const messaging_module_1 = require("../messaging/messaging.module");
let CarcassesModule = class CarcassesModule {
};
exports.CarcassesModule = CarcassesModule;
exports.CarcassesModule = CarcassesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([carcass_entity_1.Carcass]),
            (0, common_1.forwardRef)(() => messaging_module_1.MessagingModule)
        ],
        providers: [
            carcasses_domain_service_1.CarcassesDomainService,
            carcasses_service_1.CarcassesService,
            carcass_subscriber_1.CarcassSubscriber
        ],
        controllers: [carcasses_controller_1.CarcassesController],
        exports: [carcasses_service_1.CarcassesService]
    })
], CarcassesModule);
//# sourceMappingURL=carcasses.module.js.map