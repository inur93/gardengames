import { AppDataSource } from "../data-source";
import { CreateMedia, Media } from "../entity/Media";
import { provideSingleton } from "../inversify/provideSingleton";

@provideSingleton(MediaRepository)
export class MediaRepository {

    private readonly repo = AppDataSource.getRepository(Media);

    public async all(): Promise<Media[]> {
        return this.repo.find();
    }

    public async create(media: CreateMedia): Promise<Media> {
        const entity = await this.repo.create(media);
        await this.repo.save(entity);
        return entity;
    }

}