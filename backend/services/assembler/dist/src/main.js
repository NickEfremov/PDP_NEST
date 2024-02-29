"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const core_1 = require("@nestjs/core");
const assembler_module_1 = require("./assembler.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(assembler_module_1.AssemblerModule, {
        transport: microservices_1.Transport.NATS,
        options: {
            servers: [`${process.env.NT_HOST}://${process.env.NT_HOST}`],
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map