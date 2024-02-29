"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssemblerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const data_source_1 = require("../data-source");
const orders_module_1 = require("./app/orders/orders.module");
const messaging_module_1 = require("./app/messaging/messaging.module");
let AssemblerModule = class AssemblerModule {
};
exports.AssemblerModule = AssemblerModule;
exports.AssemblerModule = AssemblerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '../../../../.env' }),
            typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOptions),
            orders_module_1.OrdersModule,
            messaging_module_1.MessagingModule,
        ]
    })
], AssemblerModule);
//# sourceMappingURL=assembler.module.js.map