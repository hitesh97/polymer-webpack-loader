var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const {
    menuRoute
} = require('./endpoints');

const menuRouter = require('./routes/menu-router');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

module.exports = (PORT) => {
    if (!PORT) {
        throw new Error('PORT must be defined');
    }
    // ROUTES FOR OUR API
    var router = express.Router();

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function (req, res) {
        res.json({
            message: 'api server working!'
        });
    });

    app.use(menuRoute.getUrl(), menuRouter);
    // REGISTER OUR ROUTES
    // all of our routes will be prefixed with /api
    app.use('/api', router);

    // START THE SERVER
    app.listen(PORT);
    console.log('server started on port ' + PORT);

};