pipeline {
    agent {
        label 'google/cloud-sdk'
    }

    stages {
        stage('Deploy') {
            steps {
                sh '. ./_deploy.sh'
            }
        }
    }
}