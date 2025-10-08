module.exports = {
  apps: [
    {
      name: 'webapp',
      script: './node_modules/.bin/http-server',
      args: '. --port 3000 --host 0.0.0.0 --cors',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}