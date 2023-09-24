import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Persona } from "./persona.js"; // Asegúrate de importar el modelo PERSONA aquí
import { Departamento } from "./departamento.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí



 export const Inquilino = sequelize.define('tb_inquilino', {
    ID_INQUILINO: {
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
  
  // Define las relaciones con otros modelos si es necesario
  Inquilino.belongsTo(Persona, { foreignKey: 'ID_PERSONA' });
  Inquilino.belongsTo(Departamento, { foreignKey: 'ID_DEPARTAMENTO' });
  