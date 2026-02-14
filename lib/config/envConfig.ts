import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  bucketName: process.env.BUCKET_NAME || "",
  cdkRegion: process.env.CDK_DEFAULT_REGION,
};