const { Site } = require("../models/site");

class SiteRepository {
  async getAllSites() {
    return Site.find().exec();
  }

  async getSiteById(id) {
    return Site.findById(id).exec();
  }

  async createSite(data) {
    const site = new Site(data);
    return site.save();
  }

  async updateSite(id, data) {
    return Site.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteSite(id) {
    return Site.findByIdAndRemove(id).exec();
  }
}

module.exports = new SiteRepository();
