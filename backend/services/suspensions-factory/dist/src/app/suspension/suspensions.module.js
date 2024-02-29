"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuspensionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const suspensions_domain_service_1 = require("./suspensions.domain.service");
const suspensions_controller_1 = require("./suspensions.controller");
const suspension_entity_1 = require("./suspension.entity");
const suspensions_service_1 = require("./suspensions.service");
const suspension_subscriber_1 = require("./subscribers/suspension.subscriber");
const messaging_module_1 = require("../messaging/messaging.module");
let SuspensionsModule = class SuspensionsModule {
};
exports.SuspensionsModule = SuspensionsModule;
exports.SuspensionsModule = SuspensionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([suspension_entity_1.Suspension]),
            (0, common_1.forwardRef)(() => messaging_module_1.MessagingModule)
        ],
        providers: [
            suspensions_domain_service_1.SuspensionsDomainService,
            suspensions_service_1.SuspensionsService,
            suspension_subscriber_1.SuspensionSubscriber
        ],
        controllers: [suspensions_controller_1.SuspensionsController],
        exports: [suspensions_service_1.SuspensionsService]
    })
], SuspensionsModule);
//# sourceMappingURL=suspensions.module.js.map