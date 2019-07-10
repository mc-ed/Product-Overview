module.exports = {
    apps: [{
      name: 'Product-Overview',
      script: 'server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-188-213-241.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FECPO.pem',
        ref: 'origin/boilerplate',
        repo: 'https://github.com/mc-ed/Product-Overview.git',
        path: '/home/ubuntu/server',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
  