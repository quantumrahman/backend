import 'dotenv/config';

const configure = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
};

const config = Object.freeze(configure);

export default config;
