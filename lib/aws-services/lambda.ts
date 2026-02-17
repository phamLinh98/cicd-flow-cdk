import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import type { AppLambdaProps } from '../interface/aws-interface';

export class AppLambda extends Construct {
  public readonly lambdaFunction: lambda.Function;

  constructor(scope: Construct, id: string, props: AppLambdaProps) {
    super(scope, id);

    this.lambdaFunction = new lambda.Function(this, "LambdaFunction", {
      functionName: props.lambdaName,
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(
        'export const handler = async () => { return "Lambda sample code"; };',
      ),
      environment: {
        AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        NODE_OPTIONS: '--enable-source-maps',
      },
    });
  }
}
