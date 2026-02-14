#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MainFlowCdk } from '../lib/main';

const app = new cdk.App();

new MainFlowCdk(app, "MainFlowCdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});