const Menu = require("../../models/Menu");

const findAllMenus = async (req, res) => {
    const result = await Menu.find().exec();
    res.send(result);
}

module.exports = findAllMenus;