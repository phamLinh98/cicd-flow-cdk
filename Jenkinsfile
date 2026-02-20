pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID     = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        AWS_DEFAULT_REGION    = 'ap-northeast-1'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('CI - Install') {
            steps {
                sh '''
                    npm ci
                    npm install -g aws-cdk
                '''
            }
        }

        stage('CI - Build & Test') {
            steps {
                sh '''
                    npm run build
                    npm run auto-test
                '''
            }
        }

        stage('CI - Synth') {
            steps {
                sh '''
                    cdk synth
                '''
            }
        }

        stage('Manual Approval') {
            steps {
                input message: 'Deploy lên Production?', ok: 'Approve'
            }
        }

        stage('CD - Install') {
            steps {
                sh '''
                    npm ci
                    npm install -g aws-cdk
                '''
            }
        }

        stage('CD - Deploy Production') {
            steps {
                sh '''
                    cdk deploy --require-approval never --all
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deploy production thành công!'
        }
        failure {
            echo '❌ Pipeline thất bại!'
        }
    }
}