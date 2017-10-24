const {
    HttpStatus,
    RequestMethod
} = require('../utils/http');

function getAppMenu(req, res) {

    const response = {
      login: "hitesh97",
      name:"Hitesh",
      html_url:"https://github.com/hitesh97",
      avatar_url:"https://avatars3.githubusercontent.com/u/3694489?v=4"
    };

    res.status(HttpStatus.OK).json(response);
}

module.exports = {
    getAppMenu
};
