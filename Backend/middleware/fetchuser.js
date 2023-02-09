const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Hp5741609@';

const fetchuser =async (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    console.log(token);
    if (!token) { 
        res.status(401).send({ error: "Please authenticate using a valid token" })
        console.log(token)
    }
    try { 
        const data = await jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
        console.log(error)
    }

}


module.exports = fetchuser;