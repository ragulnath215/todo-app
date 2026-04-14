pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/YOUR_USERNAME/todo-app.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests (Optional)') {
            steps {
                echo "No tests added yet"
            }
        }

        stage('Build') {
            steps {
                echo "Build step (not required for this simple project)"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying..."
                sh 'nohup node backend/server.js &'
            }
        }
    }
}