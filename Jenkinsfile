pipeline {
    agent {
        docker { 
            image: 'google/cloud-sdk'
        }
    }

    stages {
        stage('Deploy') {
            steps {
                sh '. ./_deploy.sh'
            }
        }
    }
}