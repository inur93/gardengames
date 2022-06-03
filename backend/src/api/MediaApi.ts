import { inject } from 'inversify';
import { Controller, Get, Post, Route, Tags, UploadedFile } from 'tsoa';
import CDN from '../cdn/Cloudinary';
import { Media } from '../entity/Media';
import { provideSingleton } from '../inversify/provideSingleton';
import { MediaRepository } from '../repositories/MediaRepository';
@Tags('Media')
@Route('api/media')
@provideSingleton(MediaApi)
export class MediaApi extends Controller {

    constructor(
        @inject(MediaRepository) private repo: MediaRepository
    ) {
        super();
    }

    @Get("")
    public async getMedia(): Promise<Media[]> {
        return await this.repo.all();
    }

    @Post("")
    public async uploadMedia(
        @UploadedFile() file: Express.Multer.File
    ): Promise<Media> {

        const res = await CDN.upload(file, process.env.CLOUDINARY_FOLDER || 'development')
        return await this.repo.create({
            url: res.public_id,
            width: res.width,
            height: res.height
        })
    }
}