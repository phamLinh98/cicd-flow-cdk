import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AppBucket } from "./aws-services/s3";
import { AppLambda } from "./aws-services/lambda";
import { LambdaS3ListAllMyBucketsPolicy } from "./aws-services/iam";
import { envConfig } from "./config/envConfig";
import { AppSqs } from "./aws-services/sqs";

export class MainFlowCdk extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new AppBucket(this, "AppS3", {
      bucketName: envConfig.bucketName,
    });

    const appLambda = new AppLambda(this, "AppLambda", {
      lambdaName: envConfig.lambdaName,
    });

    const s3Policy = new LambdaS3ListAllMyBucketsPolicy(this, "S3Policy");

    appLambda.lambdaFunction.role?.attachInlinePolicy(s3Policy.policy);

    new AppSqs(this, "CdkSqsMessage", {
      queueName: "cdk-sqs-message"
    });

    new AppSqs(this, "LambdaDeadMessage", {
      queueName: "lambda-dead-message"
    });
  }
}
