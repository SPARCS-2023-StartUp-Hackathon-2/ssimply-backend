import { FileUploadResponseDto } from './dtos/upload-response.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class FileConfigService {
  private s3 = new AWS.S3({
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: 'ap-northeast-2',
  });

  async upload(file: Express.Multer.File): Promise<FileUploadResponseDto> {
    let result: FileUploadResponseDto;
    try {
      result = await this.s3
        .upload({
          Bucket: process.env.S3_BUCKET_NAME,
          Body: file.buffer,
          Key: `${Date.now()}-${file.originalname}`,
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException('failed to upload file');
    }
    return result;
  }

  async uploadByBuffer(buffer: Buffer, name: string) {
    let result: FileUploadResponseDto;
    try {
      result = await this.s3
        .upload({
          Bucket: process.env.S3_BUCKET_NAME,
          Body: buffer,
          Key: `${Date.now()}-${name}`,
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException('failed to upload file');
    }
    return result;
  }

  async getURL(key: string): Promise<string> {
    return await this.s3.getSignedUrlPromise('getObject', {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key,
    });
  }

  async delete(key: string) {
    try {
      await this.s3
        .deleteObject({
          Bucket: process.env.S3_BUCKET_NAME,
          Key: key,
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException('failed to delete file');
    }
  }

  async download(key: string) {
    let result;
    try {
      result = await this.s3
        .getObject({
          Bucket: process.env.S3_BUCKET_NAME,
          Key: key,
        })
        .promise();
    } catch (e) {
      throw new InternalServerErrorException('cannot to download file');
    }
    return result;
  }
}
