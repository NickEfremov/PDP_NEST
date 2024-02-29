"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const core_1 = require("@nestjs/core");
const suspensions_factory_module_1 = require("./suspensions-factory.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(suspensions_factory_module_1.SuspensionsFactoryModule, {
        transport: microservices_1.Transport.NATS,
        options: {
            servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map