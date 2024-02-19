// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
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
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy': `cd ${DEPLOY_PATH}/source/fontend/ && npm i && npm run build`
    },
  },
};
