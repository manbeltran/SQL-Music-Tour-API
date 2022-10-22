'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  set_time.init({
    event_id: {
      type: DataTypes.INTEGER
    },
    stage_id: {
      type: DataTypes.INTEGER
    },
    band_id: {
      type: DataTypes.INTEGER
    },
    start_time: {
      type: DataTypes.DATE
    },
    end_time: {
      type: DataTypes.DATE
    },
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  }
}, {
    sequelize,
    modelName: 'set_time',
    tableName: 'set_time',
    timestamps: false
  });
  return set_time;
};