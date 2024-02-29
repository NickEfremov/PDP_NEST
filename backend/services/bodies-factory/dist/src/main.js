"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const core_1 = require("@nestjs/core");
const carcass_factory_module_1 = require("./carcass-factory.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(carcass_factory_module_1.CarcassFactoryModule, {
        transport: microservices_1.Transport.NATS,
        options: {
            servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map