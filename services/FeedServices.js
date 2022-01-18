const feedModelJson = require("../models/MOCK_DATA (3) (1).json");

exports.getFeed = (req, res) => {
  res.send(feedModelJson);
};

// exports.getFeed = (req, res) => {
//   res.json(feedModel);
// };

exports.getPast30Feed = (req, res) => {
  res.json(feedModel);
};
