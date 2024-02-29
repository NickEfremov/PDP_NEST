"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuspensionsFactoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const event_emitter_1 = require("@nestjs/event-emitter");
const data_source_1 = require("../data-source");
const suspensions_module_1 = require("./app/suspension/suspensions.module");
const messaging_module_1 = require("./app/messaging/messaging.module");
let SuspensionsFactoryModule = class SuspensionsFactoryModule {
};
exports.SuspensionsFactoryModule = SuspensionsFactoryModule;
exports.SuspensionsFactoryModule = SuspensionsFactoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '../../../../.env' }),
            typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOptions),
            event_emitter_1.EventEmitterModule.forRoot(),
            suspensions_module_1.SuspensionsModule,
            messaging_module_1.MessagingModule
        ]
    })
], SuspensionsFactoryModule);
//# sourceMappingURL=suspensions-factory.module.js.map