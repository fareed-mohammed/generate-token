const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    jwtIssuer:  process.env.JWT_ISSUER,
    jwtAudience: process.env.JWT_AUDIENCE,    
    jwtSubject: process.env.JWT_SUBJECT,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    jwtEmailAddress: process.env.JWT_EMAIL_ADDRESS,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN
};