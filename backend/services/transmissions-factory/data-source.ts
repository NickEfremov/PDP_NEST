import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'root',
    password: 'password',
    database: 'api',
    schema: 'transmissions',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['../../migrations/**/*{.ts,.js}']
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
