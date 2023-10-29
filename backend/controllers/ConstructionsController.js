// const express = require("express");
// // var { Construction } = require("../models/Construction");
// // var { Site } = require("../models/site");
// var ObjectID = require("mongoose").Types.ObjectId;

const express = require("express");
const ObjectID = require("mongoose").Types.ObjectId;

const ConstructionRepository = require("./constructionRepo");
const SiteRepository = require("./siteRepo");

class RouterSingleton {
  constructor() {
    this.router = express.Router();
    this.initRoutes();
  }

  initRoutes() {
    // Construction routes
    this.router.get("/const", async (req, res) => {
      try {
        const constructions = await ConstructionRepository.getAllConstructions();
        res.json(constructions);
      } catch (error) {
        console.error("Error fetching construction records:", error);
        res.status(500).json({ error: "Error fetching construction records" });
      }
    });

    this.router.get("/:id", async (req, res) => {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
      }

      try {
        const construction = await ConstructionRepository.getConstructionById(req.params.id);
        res.json(construction);
      } catch (error) {
        console.error("Error fetching construction record:", error);
        res.status(500).json({ error: "Error fetching construction record" });
      }
    });

    this.router.post("/", async (req, res) => {
      try {
        const newConstruction = await ConstructionRepository.createConstruction(req.body);
        res.json(newConstruction);
      } catch (error) {
        console.error("Error creating construction record:", error);
        res.status(500).json({ error: "Error creating construction record" });
      }
    });

    this.router.put("/:id", async (req, res) => {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
      }

      try {
        const updatedConstruction = await ConstructionRepository.updateConstruction(
          req.params.id,
          req.body
        );
        res.json(updatedConstruction);
      } catch (error) {
        console.error("Error updating construction record:", error);
        res.status(500).json({ error: "Error updating construction record" });
      }
    });

    this.router.delete("/:id", async (req, res) => {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
      }

      try {
        const deletedConstruction = await ConstructionRepository.deleteConstruction(req.params.id);
        res.json(deletedConstruction);
      } catch (error) {
        console.error("Error deleting construction record:", error);
        res.status(500).json({ error: "Error deleting construction record" });
      }
    });

    // Site routes
    this.router.post("/addSites", async (req, res) => {
      try {
        const newSite = await SiteRepository.createSite(req.body);
        res.json(newSite);
      } catch (error) {
        console.error("Error creating site record:", error);
        res.status(500).json({ error: "Error creating site record" });
      }
    });

    this.router.get("/", async (req, res) => {
      try {
        const constructionRecords = await SiteRepository.getAllSites();
        res.json(constructionRecords);
      } catch (error) {
        console.error("Error fetching site records:", error);
        res.status(500).json({ error: "Error fetching site records" });
      }
    });

    this.router.put("/site/:id", async (req, res) => {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
      }

      try {
        const updatedSite = await SiteRepository.updateSite(req.params.id, req.body);
        res.json(updatedSite);
      } catch (error) {
        console.error("Error updating site record:", error);
        res.status(500).json({ error: "Error updating site record" });
      }
    });

    this.router.delete("/siteRemove/:id", async (req, res) => {
      if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send(req.params.id);
      }

      try {
        const deletedSite = await SiteRepository.deleteSite(req.params.id);
        res.json(deletedSite);
      } catch (error) {
        console.error("Error deleting site record:", error);
        res.status(500).json({ error: "Error deleting site record" });
      }
    });
  }

  getRouter() {
    return this.router;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new RouterSingleton();
    }
    return this.instance;
  }
}

module.exports = RouterSingleton.getInstance().getRouter();




// const express = require("express");
// var router = express.Router();
// var ObjectID = require("mongoose").Types.ObjectId;

// var { Construction } = require("../models/Construction");
// var { Site } = require("../models/site");

// router.get("/const", (req, res) => {
//   Construction.find((err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log(JSON.stringify(err, undefined, 2));
//     }
//   });
// });

// router.get("/:id", (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send(req.params.id);
//   }

//   Construction.findById(req.params.id, (err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log(JSON.stringify(err, undefined, 2));
//     }
//   });
// });

// router.post("/", (req, res) => {
//   var newRecord = new Construction({
//     date: req.body.date,
//     location: req.body.location,
//     suppiler: req.body.suppiler,
//     budget: req.body.budget,
//   });

//   newRecord.save((err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log(err);
//       res.status(200).send({ err: "error" });
//     }
//   });
// });

// router.put("/:id", (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send(req.params.id);
//   }

//   var updateRecords = {
//     date: req.body.date,
//     location: req.body.location,
//     suppiler: req.body.suppiler,
//     budget: req.body.budget,
//   };

//   Construction.findByIdAndUpdate(
//     req.params.id,
//     { $set: updateRecords },
//     { new: true },
//     (err, docs) => {
//       if (!err) {
//         res.send(docs);
//       } else {
//         console.log(err);
//         res.status(200).send({ err: "error" });
//       }
//     }
//   );
// });

// router.get("/:id", (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send(req.params.id);
//   }

//   Site.findById(req.params.id, (err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log(JSON.stringify(err, undefined, 2));
//     }
//   });
// });

// router.delete("/:id", (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send(req.params.id);
//   }

//   Construction.findByIdAndRemove(req.params.id, (err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       res.send(err);
//     }
//   });
// });

// router.post("/addSites", (req, res) => {
//   var newSite = new Site({
//     orderNo: req.body.orderNo,
//     quantity: req.body.quantity,
//     supplier: req.body.supplier,
//     description: req.body.description,
//     selectedSite: req.body.selectedSite,
//     constructionPhase: req.body.constructionPhase,
//     location: req.body.location,
//     specialRequirements: req.body.specialRequirements,
//   });

//   newSite.save((err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log(err);
//       res.status(200).send({ err: "error" });
//     }
//   });
// });

// router.get("/", async (req, res) => {
//   try {
//     console.log("Before fetching data");
//     const constructionRecords = await Site.find();
//     console.log("After fetching data");
//     console.log(constructionRecords);
//     res.json(constructionRecords);
//   } catch (error) {
//     console.error("Error fetching construction records:", error);
//     res.status(500).json({ error: "Error fetching construction records" });
//   }
// });

// router.put("/site/:id", (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send(req.params.id);
//   }

//   var updateRecords = {
//     orderNo: req.body.orderNo,
//     quantity: req.body.quantity,
//     supplier: req.body.supplier,
//     description: req.body.description,
//     selectedSite: req.body.selectedSite,
//     constructionPhase: req.body.constructionPhase,
//     location: req.body.location,
//     specialRequirements: req.body.specialRequirements,
//   };

//   Site.findByIdAndUpdate(
//     req.params.id,
//     { $set: updateRecords },
//     { new: true },
//     (err, docs) => {
//       if (!err) {
//         res.send(docs);
//       } else {
//         console.log(err);
//         res.status(200).send({ err: "error" });
//       }
//     }
//   );
// });

// router.delete("/siteRemove/:id", (req, res) => {
//   if (!ObjectID.isValid(req.params.id)) {
//     return res.status(400).send(req.params.id);
//   }

//   Site.findByIdAndRemove(req.params.id, (err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       res.send(err);
//     }
//   });
// });

// module.exports = router;
