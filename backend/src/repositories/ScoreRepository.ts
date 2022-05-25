import { AppDataSource } from "../data-source";
import { Score } from "../entity/Score";
import { provideSingleton } from "../inversify/provideSingleton";

@provideSingleton(ScoreRepository)
export class ScoreRepository {


    private readonly repo = AppDataSource.getRepository(Score);


    public async create(score: Score): Promise<Score> {
        const entity = this.repo.create(score);

        await this.repo.save(entity);
        return entity;
    }

    public async delete(id: number): Promise<void> {
        await this.repo.delete(id);
    }

}