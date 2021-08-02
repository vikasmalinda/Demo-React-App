pipeline {
  
  agent any

  stages {
    stage('Startup') {
      steps {
        script {
          bat 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          bat 'npm run test'
        }
      }
//       post {
//         always {
//           junit 'output/coverage/junit/junit.xml'
//         }
//       }
    }
    stage('Build') {
      steps {
        script {
          bat 'npm start'
          bat 'npm pack'
        }
      }
    }
  }
}
// def uploadArtifact(server) {
//   def uploadSpec = """{
//             "files": [
//               {
//                 "pattern": "continuous-test-code-coverage-guide*.tgz",
//                 "target": "npm-stable/"
//               }
//            ]
//           }"""
//   server.upload(uploadSpec)
//   def buildInfo = Artifactory.newBuildInfo()
//   server.upload spec: uploadSpec, buildInfo: buildInfo
//   server.publishBuildInfo buildInfo
// }
