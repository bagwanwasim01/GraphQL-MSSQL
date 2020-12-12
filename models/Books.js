const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Books', {
    BookID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ISBN: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Abbrv: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    BookTitle: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    EditionNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TotalPages: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    AuthorID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Authors',
        key: 'AuthorID'
      }
    }
  }, {
    sequelize,
    tableName: 'Books',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BookID",
        fields: [
          { name: "BookID" },
        ]
      },
      {
        name: "BookTitle",
        fields: [
          { name: "BookTitle" },
        ]
      },
      {
        name: "PK_Books",
        unique: true,
        fields: [
          { name: "BookID" },
        ]
      },
      {
        name: "TotalPages",
        fields: [
          { name: "TotalPages" },
        ]
      },
    ]
  });
};
