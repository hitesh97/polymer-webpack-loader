const Router = require('express').Router;

const userApi = require('../api/menu-api');
const {
    menuRoute
} = require('../endpoints');

const menuRouter = new Router();

menuRouter.get(menuRoute.getSlash(), userApi.getAppMenu);

module.exports = menuRouter;