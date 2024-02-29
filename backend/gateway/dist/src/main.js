"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!process.env.IS_TS_NODE) {
    require('module-alias/register');
}
const core_1 = require("@nestjs/core");
const gateway_module_1 = require("./gateway.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(gateway_module_1.GatewayModule);
    await app.listen(process.env.GT_PORT);
    app.connectMicroservice({
        transport: microservices_1.Transport.NATS,
        options: {
            servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
        },
    });
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map