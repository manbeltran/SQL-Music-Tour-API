'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet_greet.init({
    event_id: {
      type: DataTypes.INTEGER
    },
    band_id: {
      type: DataTypes.INTEGER
    },
    meet_start_time: {
      type: DataTypes.DATE
    },
    meet_end_time: {
      type: DataTypes.DATE
    },
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    sequelize,
    modelName: 'meet_greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return meet_greet;
};