node {
    def userid;
    stage('Compare') {
        git branch: 'develop', url: 'https://github.com/luoyeshu0507/react-startup';
        sh 'git branch -a';
        
        echo "${branch}";
        if (branch.length() > 0) {
            echo "Merge all branchs(${branch}) to develop...";
            barr = branch.split();
            echo "${barr}";
            for (item in barr) {
                sh "git merge origin/${item}";
            }
        }
        
        wrap([$class: 'BuildUser']) {
            userid = env.BUILD_USER_ID;
        }
        
        echo "${userid} triggerd this build!";
    }
    stage('Install') {
        nodejs('nodejs') {
            sh 'node -v';
            sh 'npm i';
        }
    }
    stage('Lint') {
        echo 'Run es lint...';
    }
    stage('Tests') {
        echo 'Run tests...';
    }
    stage('Build') {
        nodejs('nodejs') {
            sh 'npm run build';
        }
    }
    stage('Personal Deploy') {
        if (userid) {
            echo "deoloping for ${userid}...";
            def distpath = "/www/jenkins-dist/${userid}-${BUILD_ID}";
            sh '''if [ ! -d "${distpath}" ]; then
              mkdir -p "${distpath}"
            fi''';

            sh "cp -R ./dist/* ${distpath}";

            sh '''echo "server {
                listen       80;
                server_name  ${userid}.oa.luoyeshu.com;

                location / {
                    root   ${distpath};
                    index  index.html index.htm;
                }
            }" > /www/jenkins-nginx-conf/${userid}.txt''';
            build 'xx';
        }
    }
    stage('oa Deploy') {
    
    }
    stage('prod Deploy') {
    
    }
    stage('online Deploy') {
    
    }
}
