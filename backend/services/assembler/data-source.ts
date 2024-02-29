import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    // host: configService.get<string>('DB_HOST'),
    // port: configService.get<number>('DB_PORT'),
    // username: configService.get<string>('DB_USER'),
    // password: configService.get<string>('DB_PASSWORD'),
    // database: configService.get<string>('DB_NAME'),
    host: 'postgres',
    port: 5432,
    username: 'root',
    password: 'password',
    database: 'api',
    schema: 'assembler',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['../../migrations/**/*{.ts,.js}']
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
