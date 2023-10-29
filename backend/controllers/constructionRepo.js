const { Construction } = require("../models/Construction");

class ConstructionRepository {
  async getAllConstructions() {
    return Construction.find().exec();
  }

  async getConstructionById(id) {
    return Construction.findById(id).exec();
  }

  async createConstruction(data) {
    const construction = new Construction(data);
    return construction.save();
  }

  async updateConstruction(id, data) {
    return Construction.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteConstruction(id) {
    return Construction.findByIdAndRemove(id).exec();
  }
}

module.exports = new ConstructionRepository();
