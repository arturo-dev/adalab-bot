pipeline {
    agent {
        node: 'google/cloud-sdk'
    }

    stages {
        stage('Deploy') {
            steps {
                sh '. ./_deploy.sh'
            }
        }
    }
}