const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Authors', {
    AuthorID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Abbrv: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FirstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DOD: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    BookID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Books',
        key: 'BookID'
      }
    }
  }, {
    sequelize,
    tableName: 'Authors',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Abbrv",
        fields: [
          { name: "Abbrv" },
        ]
      },
      {
        name: "FirstName",
        fields: [
          { name: "FirstName" },
        ]
      },
      {
        name: "LastName",
        fields: [
          { name: "LastName" },
        ]
      },
      {
        name: "PK_Authors",
        unique: true,
        fields: [
          { name: "AuthorID" },
        ]
      },
    ]
  });
};
