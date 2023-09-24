import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Persona } from "./persona.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí
import { Rol } from "./rol.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí

export const Consorcio = sequelize.define('tb_consorcios', {
    ID_PERSONA: {
      type: DataTypes.INTEGER,
    },
    ID_ROL: {
      type: DataTypes.INTEGER,
    },
  });
  
  // Define las relaciones con otros modelos si es necesario
  Consorcio.belongsTo(Persona, { foreignKey: 'ID_PERSONA' });
  Consorcio.belongsTo(Rol, { foreignKey: 'ID_ROL' });
  
 