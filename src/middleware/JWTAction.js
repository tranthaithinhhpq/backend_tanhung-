import 'dotenv/config';
import jwt from 'jsonwebtoken';

const nonSecurePaths = ['/logout', '/login', '/register'];

const createJWT = (payload) => {
    let key = process.env.JWT_SECRET;
    let token = null;
    try {
        token = jwt.sign(payload, key, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
    } catch (err) {
        console.error('Error creating JWT:', err);
    }
    return token;
};

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET;
    let decoded = null;
    try {
        decoded = jwt.verify(token, key);
    } catch (err) {
        console.error('Error verifying JWT:', err);
    }
    return decoded;
};

const extractToken = (req) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
};

const checkUserJWT = (req, res, next) => {
    if (nonSecurePaths.includes(req.path)) return next();

    const cookies = req.cookies;
    const tokenFromHeader = extractToken(req);

    if ((cookies && cookies.jwt) || tokenFromHeader) {
        const token = cookies?.jwt || tokenFromHeader;
        const decoded = verifyToken(token);

        if (decoded) {
            req.user = decoded;
            req.token = token;
            next();
        } else {
            return res.status(401).json({
                EC: -1,
                DT: '',
                EM: 'Not authenticated the user',
            });
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user',
        });
    }
};

const checkUserPermission = (req, res, next) => {
    if (nonSecurePaths.includes(req.path) || req.path === '/account') return next();

    if (req.user) {
        const roles = req.user.groupWithRoles?.Roles;
        const currentUrl = req.path;

        if (!roles || roles.length === 0) {
            return res.status(403).json({
                EC: -1,
                DT: '',
                EM: "You don't have permission to access this resource...",
            });
        }

        const canAccess = roles.some(
            (item) => item.url === currentUrl || currentUrl.includes(item.url)
        );

        if (canAccess) {
            return next();
        } else {
            return res.status(403).json({
                EC: -1,
                DT: '',
                EM: "You don't have permission to access this resource...",
            });
        }
    } else {
        return res.status(401).json({
            EC: -1,
            DT: '',
            EM: 'Not authenticated the user',
        });
    }
};

export default {
    createJWT,
    verifyToken,
    checkUserJWT,
    checkUserPermission,
};
