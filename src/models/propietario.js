import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
    
const Propietario = sequelize.define('tb_propietario', {
    ID_PROPIETARIO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_PERSONA: {
      type: DataTypes.INTEGER,
    },
    ID_DEPARTAMENTO: {
      type: DataTypes.INTEGER,
    },
    FECHA_INGRESO: {
      type: DataTypes.DATE,
    },
  });
  