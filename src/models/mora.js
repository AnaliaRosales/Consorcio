import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
const Mora = sequelize.define('tb_mora', {
    ID_MORA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_INQUILINO: {
      type: DataTypes.INTEGER,
    },
    ID_EXPENSA: {
      type: DataTypes.INTEGER,
    },
  });