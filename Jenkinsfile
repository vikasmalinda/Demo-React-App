pipeline {
  
  agent any

  stages {
    stage('Startup') {
      steps {
          bat 'npm install'
      }
    }
//     stage('Test') {
//       steps {
//         script {
//           bat 'npm run test'
//         }
//       }

    stage('Build') {
      steps {
          bat 'npm run build'
      }
    }
  }
 }
