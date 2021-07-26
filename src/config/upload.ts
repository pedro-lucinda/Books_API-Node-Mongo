/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { S3 } from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

export const bucketName = process.env.AWS_S3_NAME;
const region = process.env.AWS_S3_REGION;
const accessKeyId = process.env.AWS_S3_ACCESS_KEY;
const secretAccessKey = process.env.AWS_S3_SECRET_KEY;

export const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});
export const upload = multer({
  limits: {
    fileSize: 1000000, // 1mb
  },
  fileFilter(req, file, cb): any {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
  storage: multerS3({
    s3,
    bucket: bucketName,
    acl: "public-read",
    metadata(req: any, file: any, cb: any) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req: any, file: any, cb: any) {
      cb(null, Date.now().toString());
    },
  }),
});
