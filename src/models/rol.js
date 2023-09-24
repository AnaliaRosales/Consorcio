import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
  

export const Rol = sequelize.define('tb_rol', {
    ID_ROL: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE_ROL: {
      type: DataTypes.STRING(50),
    },
  });
  