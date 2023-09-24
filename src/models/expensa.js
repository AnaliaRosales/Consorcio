import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Inquilino } from "./inquilino.js"; // Asegúrate de importar el modelo PERSONA aquí
import { Departamento } from "./departamento.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí

export const Expensa = sequelize.define('tb_expensas', {
    ID_EXPENSA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },      
    MONTO_EXPENSA: {
      type: DataTypes.DECIMAL(16, 2),
    },
    FECHA_EMISION: {
      type: DataTypes.DATE,
    },
    FECHA_PAGO: {
      type: DataTypes.DATE,
    },
    FECHA_VENCIMIENTO1: {
      type: DataTypes.DATE,
    },
    FECHA_VENCIMIENTO2: {
      type: DataTypes.DATE,
    },
    RECARGO: {
      type: DataTypes.DECIMAL(16, 2),
    },
    TIPO: {
      type: DataTypes.STRING(100),
    },
    PAGO_REALIZADO: {
      type: DataTypes.INTEGER,
    },
    ID_DEPARTAMENTO: {
      type: DataTypes.INTEGER,
    },
    ID_INQUILINO: {
      type: DataTypes.INTEGER,
    },
  });
  
  // Define las relaciones con otros modelos si es necesario
  Expensa.belongsTo(Departamento, { foreignKey: 'ID_DEPARTAMENTO' });
  Expensa.belongsTo(Inquilino, { foreignKey: 'ID_INQUILINO' });