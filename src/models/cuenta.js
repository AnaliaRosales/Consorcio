import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Persona } from "./persona.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí
export const Cuenta = sequelize.define('tb_cuenta', {
    ID_CUENTA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_PERSONA: {
      type: DataTypes.INTEGER,
    },
    ENTIDAD_BANCARIA: {
      type: DataTypes.STRING(1000),
    },
    CBU: {
      type: DataTypes.BIGINT,
    },
    ALIAS: {
      type: DataTypes.STRING(100),
    },
  });
  
  // Define la relación con el modelo TB_PERSONA si es necesario
  Cuenta.belongsTo(Persona, { foreignKey: 'ID_PERSONA' });
  