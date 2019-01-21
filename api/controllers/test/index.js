const utils = require('../../lib/utils');

module.exports = {
    returnData: returnData,
    returnData2: returnData2
}

async function returnData(req, res) {
    try{
        return res.json({
            message: 'Hello World',
        })
    }

    catch (err) {
        res.status(500);
        console.log(err);
        res.json({ error: "____"})
    }
}


async function returnData2(req, res) {
    try{
        return res.json({
            message: '* Custom',
            name: "___",
            age: 24,
            eyeColor: "blue",
            isMarried: true,
            currentDate: Date.now()


        });
    }

    catch (err) {
        res.status(500);
        console.log(err);
        res.json({ error: "____2"})
    }
}


