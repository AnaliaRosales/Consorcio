import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Expensa } from "./expensa.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí

const DetalleRecibo = sequelize.define('tb_detalle_recibo', {
    ID_DETALLE_RECIBO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
    },
    MONTO: {
      type: DataTypes.DECIMAL(16, 2),
    },
    ID_EXPENSA: {
      type: DataTypes.INTEGER,
    },
  });
  
  // Define la relación con el modelo TB_EXPENSA si es necesario
  DetalleRecibo.belongsTo(Expensa, { foreignKey: 'ID_EXPENSA' });