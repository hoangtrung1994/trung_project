const UserDM = require ('../database/datamodels/User');
const crypt = require ('../safe');

class User {
    async create ({username, password}) {
        let hashpassword = password;
        //let hashpassword = await crypt.generatePasswordHash(password);

        const newUser = new UserDM ({
            username:username,
            password:hashpassword
        });

        console.log(newUser);
        console.log(hashpassword);

        await newUser.save()
        return newUser
    };
};

module.exports = exports.default = User;
