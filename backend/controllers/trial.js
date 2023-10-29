


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

