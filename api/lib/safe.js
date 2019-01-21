const bcrypt = require('bcryptjs');
const saltRounds = 12;

module.exports = {
    //Put only one generatePasswordHash
    generatePasswordHash: generatePasswordHash
};

async function generatePasswordHash(password) {
    return bcrypt.hash(password, saltRounds)
    .then(hash => hash)
    .catch(err => {
        throw err; 
    });
};

