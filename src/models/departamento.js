import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
    

export const Departamento = sequelize.define('tb_departamento', {
    ID_DEPARTAMENTO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TORRE: {
      type: DataTypes.STRING(50),
    },
    PISO: {
      type: DataTypes.STRING(50),
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(50),
    },
  });
  