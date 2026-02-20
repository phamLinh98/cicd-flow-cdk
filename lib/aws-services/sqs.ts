import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as cdk from 'aws-cdk-lib';
import type { AppSqsProps } from '../interface/aws-interface';

export class AppSqs extends Construct {
  public readonly queue: sqs.Queue;

  constructor(scope: Construct, id: string, props?: AppSqsProps) {
    super(scope, id);

    this.queue = new sqs.Queue(this, 'Queue', {
      queueName: props?.queueName,
      visibilityTimeout: props?.visibilityTimeout ? cdk.Duration.seconds(props.visibilityTimeout) : undefined,
      retentionPeriod: props?.retentionPeriod ? cdk.Duration.seconds(props.retentionPeriod) : undefined
    });
  }
}
