/**
 * Created by alberto on 20/10/16.
 */

var api = {
    get: function (req, res, next) {
        if (req.param.length < 0) {
            return next();
        }

        var context = req.azureMobile;
        var userId = context.user.id;
        var query = {
            sql: "select * from Authors"
        };

        context.data.execute(query)
            .then(function (result) {
                res.json(result);
            });
    }

    //put: functi..
};

api.get.access = 'authenticated';

module.exports = api;