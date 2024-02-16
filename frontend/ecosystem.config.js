// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH_FRONT,
  DEPLOY_REPO,
  DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      key: '~/.ssh/id_ed25519',
      repo: `${DEPLOY_REPO}/frontend`,
      path: DEPLOY_PATH_FRONT,
      'post-deploy': 'npm i && npm run build'
    },
  },
};
