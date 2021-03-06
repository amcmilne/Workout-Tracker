const path = require ("path");
const _dirname = path.resolve(path.dirname('')); 

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(_dirname, "./public/index.html"));
    });

    app.get ("/exercise", function (req, res) {
        res.sendFile(path.join(_dirname, "./public/exercise.html"));
    });

    app.get ("/stats", function (req, res) {
        res.sendFile(path.join(_dirname, "./public/stats.html"));
    });
};