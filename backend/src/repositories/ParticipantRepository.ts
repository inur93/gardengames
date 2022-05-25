import { AppDataSource } from "../data-source";
import { CreateParticipant, Participant } from "../entity/Participant";
import { provideSingleton } from "../inversify/provideSingleton";

@provideSingleton(ParticipantRepository)
export class ParticipantRepository {


    private readonly repo = AppDataSource.getRepository(Participant);

    public async all(): Promise<Participant[]> {
        return this.repo.find();
    }

    public async create(participant: CreateParticipant): Promise<Participant> {
        const entity = await this.repo.create(participant);
        await this.repo.save(entity);
        return entity;
    }

}