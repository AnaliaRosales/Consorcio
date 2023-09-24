import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
    
export const Recibo = sequelize.define('tb_recibo', {
    ID_RECIBO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_INQUILINO: {
      type: DataTypes.INTEGER,
    },
    ID_DETALLE_RECIBO: {
      type: DataTypes.INTEGER,
    },
    TOTAL: {
      type: DataTypes.DECIMAL(16, 2),
    },
    FECHA: {
      type: DataTypes.DATE,
    },
  });