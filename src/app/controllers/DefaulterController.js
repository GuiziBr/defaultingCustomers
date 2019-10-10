const Defaulter = require("../models/defaulter");

class DefaulterController {
  async list(req, res) {
    const defaulters = await Defaulter.find();
    return res.json(defaulters);
  }

  async store(req, res) {
    const defaulter = await Defaulter.create(req.body);
    return res.json(defaulter);
  }
}

module.exports = new DefaulterController();
