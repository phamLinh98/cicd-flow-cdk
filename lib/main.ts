
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AppBucket } from "./aws-services/s3";
import { envConfig } from "./config/envConfig";

export class MainFlowCdk extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new AppBucket(this, "AppS3", {
      bucketName: envConfig.bucketName,
    });
  }
}
