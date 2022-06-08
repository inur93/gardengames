import { AppDataSource } from "../data-source";
import { Settings } from "../entity/Settings";
import { provideSingleton } from "../inversify/provideSingleton";

@provideSingleton(SettingsRepository)
export class SettingsRepository {

    private readonly repo = AppDataSource.getRepository(Settings);

    public async get(): Promise<Settings> {
        const settings = await this.repo.find();
        if (!settings.length) {
            const entity = this.repo.create(new Settings());
            return await this.repo.save(entity);
        }
        return settings[0];
    }

    public async update(settings: Settings): Promise<Settings> {
        await this.repo.update(settings.id, settings);
        return settings;
    }

}