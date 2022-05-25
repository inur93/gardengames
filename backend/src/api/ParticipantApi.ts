import { inject } from 'inversify';
import { Body, Controller, Get, Post, Route, Tags } from 'tsoa';
import { CreateParticipant, Participant } from '../entity/Participant';
import { provideSingleton } from '../inversify/provideSingleton';
import { ParticipantRepository } from '../repositories/ParticipantRepository';

@Tags('Participants')
@Route('api/participants')
@provideSingleton(ParticipantApi)
export class ParticipantApi extends Controller {

    constructor(
        @inject(ParticipantRepository) private repo: ParticipantRepository
    ) {
        super();
    }

    @Get("")
    public async getParticipants(): Promise<Participant[]> {
        return await this.repo.all();
    }

    @Post("")
    public async createParticipant(@Body() data: CreateParticipant): Promise<Participant> {
        return await this.repo.create(data);
    }
}