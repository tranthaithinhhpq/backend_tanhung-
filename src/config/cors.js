import 'dotenv/config';

const configCors = (app) => {
    // Add headers before the routes are defined
    app.use((req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);

        // Request methods you wish to allow
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        );

        // Request headers you wish to allow
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With,content-type, Authorization'
        );

        // Allow cookies in requests (for sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        if (req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }

        // Pass to next middleware
        next();
    });
};

export default configCors;
