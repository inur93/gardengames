import { inject } from 'inversify';
import { Body, Controller, Get, Put, Route, Tags } from 'tsoa';
import { Settings } from '../entity/Settings';
import { provideSingleton } from '../inversify/provideSingleton';
import { SettingsRepository } from '../repositories/SettingsRepository';
@Tags('Settings')
@Route('api/settings')
@provideSingleton(SettingsApi)
export class SettingsApi extends Controller {

    constructor(
        @inject(SettingsRepository) private repo: SettingsRepository
    ) {
        super();
    }

    @Get("")
    public async getSettings(): Promise<Settings> {
        return await this.repo.get();
    }

    @Put("")
    public async UpdateSettings(
        @Body() settings: Settings
    ): Promise<Settings> {
        return await this.repo.update(settings);
    }
}