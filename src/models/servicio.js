import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
  

export const Servicio = sequelize.define('tb_servicios', {
    ID_SERVICIO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE_SERVICIO: {
      type: DataTypes.STRING(100),
    },
    DESCRIPCION_SERVICIO: {
      type: DataTypes.STRING(1000),
    },
    MONTO_SERVICIO: {
      type: DataTypes.DECIMAL(16, 2),
    },
  });