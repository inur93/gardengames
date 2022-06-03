import { UploadApiResponse, v2 } from 'cloudinary';

class CDN {

    constructor() {
        v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        })
    }

    public async upload(file: Express.Multer.File, folder: string) {
        return new Promise<UploadApiResponse>((resolve, reject) => {
            v2.uploader
                .upload_stream({
                    folder: folder,
                    filename_override: file.originalname,
                    format: file.mimetype.replace('image/', '')
                }, (error, result) => {
                    if (error || !result) {
                        console.log('error', error);
                        reject();
                    } else {
                        resolve(result)
                    }
                })
                .end(file.buffer);
        })
    }
}

export default new CDN();