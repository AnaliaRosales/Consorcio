import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Movimiento = sequelize.define('tb_movimientos', {
    ID_MOVIMIENTO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE_MOVIMIENTO: {
      type: DataTypes.STRING(1000),
    },
  });
  