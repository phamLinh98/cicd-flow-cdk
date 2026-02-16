import { Construct } from "constructs";
import * as iam from "aws-cdk-lib/aws-iam";
import { envConfig } from "../config/envConfig";

export class LambdaS3ListAllMyBucketsPolicy extends Construct {
  public readonly policy: iam.Policy;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.policy = new iam.Policy(this, "LambdaS3ListAllMyBucketsPolicy", {
      policyName: envConfig.lambdaPolicyName,
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: ["s3:ListAllMyBuckets"],
          resources: ["*"],
        }),
      ],
    });
  }
}
