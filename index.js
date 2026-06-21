import app from './src/app.js';
import config from './src/config/env.config.js';
import dbConnect from './src/db/db.connect.js';

const serverStart = async () => {
    await dbConnect();

    const port = config.port || 5500;

    app.listen(port, () => {
        console.log(`server running on http://localhost:${port}`);
    });
};

serverStart();
