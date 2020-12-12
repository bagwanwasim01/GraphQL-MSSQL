var DataTypes = require("sequelize").DataTypes;
var _Authors = require("./Authors");
var _Books = require("./Books");

function initModels(sequelize) {
  var Authors = _Authors(sequelize, DataTypes);
  var Books = _Books(sequelize, DataTypes);

  Authors.belongsTo(Books, { foreignKey: "BookID"});
  Books.hasMany(Authors, { foreignKey: "BookID"});
  Books.belongsTo(Authors, { foreignKey: "AuthorID"});
  Authors.hasMany(Books, { foreignKey: "AuthorID"});

  return {
    Authors,
    Books,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
