const API_BASE = "/api";
const bd = require("../db/index");

module.exports = function(app) {
  app.get(`${API_BASE}/userss`, (req, res) => {
    const quey = bd.getUsers();
    res.json(quey);
  }),
    app.get(`${API_BASE}/user/:id`, (req, res) => {
      const query = db.getUserById(req.params.id);
      res.json(query);
    });
};
