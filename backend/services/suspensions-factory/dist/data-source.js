"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'root',
    password: 'password',
    database: 'api',
    schema: 'suspensions',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['../../migrations/**/*{.ts,.js}']
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map