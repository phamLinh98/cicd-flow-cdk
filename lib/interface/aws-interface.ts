export interface AppSqsProps {
  queueName?: string;
  visibilityTimeout?: number;
  retentionPeriod?: number;
}
export interface AppBucketProps {
  bucketName: string;
}

export interface AppLambdaProps {
  lambdaName: string;
}
