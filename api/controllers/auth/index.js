const util = require('../../lib/utils');
const User = require('../../lib/models/user');

module.exports = {signUp};

/**
 * Attepmt to log the user in
 * @Param {*} req
 * @Param {*} res
 */

async function signUp(req, res) {
    try {
        const userModel = new User();
        const newUser = await userModel.create(req.body);
        return res.json(newUser);
    }

    catch (err) {
        res.status(500)
        console.log(err)
        res.json({
            err:'Internal Server Error'
        })
    };
};