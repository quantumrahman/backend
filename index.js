import app from './src/app.js';
import config from './src/config/env.config.js';

const serverStart = async () => {
    const port = config.port || 5500;

    app.listen(port, () => {
        console.log(`server running on http://localhost:${port}`);
    });
};

serverStart();
