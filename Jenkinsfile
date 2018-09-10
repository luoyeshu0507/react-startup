node {
    stage('Results') {
        sh 'git --version';
        git 'https://github.com/luoyeshu0507/react-startup';
        nodejs('nodejs') {
            sh 'pwd';
            sh 'node -v';
            sh 'npm i';
            sh 'npm run build';
        }
        wrap([$class: 'BuildUser']) {
            user = user? user: BUILD_USER_ID;
            echo "${user}";
            echo "${BUILD_USER_ID}"
            sh '''echo "server {
                listen       80;
                server_name  ${BUILD_USER_ID}.luoyeshu.com;

                location / {
                    root   /www/jenkins-dist/${BUILD_ID};
                    index  index.html index.htm;
                }
            }" > /www/jenkins-nginx-conf/${BUILD_USER_ID}.txt''';
        }
        build 'xx';
    }
}
