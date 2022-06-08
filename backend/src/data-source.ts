import { DataSource } from "typeorm"
import { Game } from "./entity/Game"
import { Media } from "./entity/Media"
import { Participant } from "./entity/Participant"
import { Score } from "./entity/Score"
import { Settings } from "./entity/Settings"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [
        Game,
        Participant,
        Score,
        Media,
        Settings
    ],
    migrationsTableName: "postgres_migrations",
    metadataTableName: 'entity_metadata',
    /*
    from the docker container run the following to apply migrations:
    yarn run tsc && yarn run typeorm migration:run -d build/src/data-source.js
    */
    migrations: ["/app/build/src/migrations/*.js"],
    subscribers: [],
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {
        // here you can start to work with your database
        await AppDataSource.synchronize();
        await AppDataSource.runMigrations()
    })
    .catch((error) => console.log(error))