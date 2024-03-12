import {DataSource} from "typeorm";
import {User} from "../entities/User";
import {Settings} from "../entities/Settings";

export const dataSourese = new DataSource({
    type: 'react-native',
    database: 'test',
    location: 'default',
    logging: ['error', 'query', 'schema'],
    synchronize: true,
    entities: [User, Settings]
});