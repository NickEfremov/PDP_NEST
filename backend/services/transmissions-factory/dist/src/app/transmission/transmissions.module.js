"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransmissionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transmissions_domain_service_1 = require("./transmissions.domain.service");
const transmissions_controller_1 = require("./transmissions.controller");
const transmission_entity_1 = require("./transmission.entity");
const transmissions_service_1 = require("./transmissions.service");
const transmission_subscriber_1 = require("./subscribers/transmission.subscriber");
const messaging_module_1 = require("../messaging/messaging.module");
let TransmissionsModule = class TransmissionsModule {
};
exports.TransmissionsModule = TransmissionsModule;
exports.TransmissionsModule = TransmissionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([transmission_entity_1.Transmission]),
            (0, common_1.forwardRef)(() => messaging_module_1.MessagingModule)
        ],
        providers: [
            transmissions_domain_service_1.TransmissionsDomainService,
            transmissions_service_1.TransmissionsService,
            transmission_subscriber_1.TransmissionSubscriber
        ],
        controllers: [transmissions_controller_1.TransmissionsController],
        exports: [transmissions_service_1.TransmissionsService]
    })
], TransmissionsModule);
//# sourceMappingURL=transmissions.module.js.map