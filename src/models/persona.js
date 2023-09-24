import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Persona = sequelize.define('tb_persona', {
    ID_PERSONA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE: {
      type: DataTypes.STRING(50),
    },
    APELLIDO: {
      type: DataTypes.STRING(50),
    },
    DOCUMENTO: {
      type: DataTypes.INTEGER,
    },
    FECHA_DE_NACIMIENTO: {
      type: DataTypes.DATE,
    },
    CORREO: {
      type: DataTypes.STRING(100),
    },
    TELEFONO_MOVIL: {
      type: DataTypes.BIGINT,
    },
    TELEFONO_FIJO: {
      type: DataTypes.BIGINT,
    },
    CUIL: {
      type: DataTypes.STRING(50),
    },
  });