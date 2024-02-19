// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH_BACK,
  DEPLOY_REF = 'origin/master',
  DEPLOY_REPO,
} = process.env;

module.exports = {
  apps: [
    {
      name: 'kupipodariday-back',
      script: './dist/app.js',
    },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      key: '~/.ssh/id_ed25519',
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH_BACK,
      'pre-deploy': `cd ${DEPLOY_PATH_BACK}/source && git sparse-checkout add backend`,
      'pre-deploy-local': `scp ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH_BACK}/source/backend`,
      'post-deploy': `cd ${DEPLOY_PATH_BACK}/source/backend/ && npm i && npm run build`,
    },
  },
};
