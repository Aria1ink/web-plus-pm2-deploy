// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH_FRONT,
  DEPLOY_REPO,
  DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      key: '~/.ssh/id_ed25519',
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH_FRONT,
      'pre-deploy': `cd ${DEPLOY_PATH_FRONT}/source && git sparse-checkout add frontend`,
      'post-deploy': `cd ${DEPLOY_PATH_FRONT}/source/fontend/ && npm i && npm run build`
    },
  },
};
