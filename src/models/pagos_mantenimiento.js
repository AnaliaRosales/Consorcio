import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { MantenimientoEdilicio } from "./mantenimiento_edilicio.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí

export const PagosMantenimiento = sequelize.define('tb_pagos_mantenimientos', {
  ID_PAGOS_MANTENIMIENTO: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ID_MANTENIMIENTO_EDILICIO: {
    type: DataTypes.INTEGER,
  },
  MONTO_MANTENIMIENTO: {
    type: DataTypes.DECIMAL(16, 2),
  },
});

// Define la relación con el modelo TB_MANTENIMIENTO_EDILICIO si es necesario
PagosMantenimiento.belongsTo(MantenimientoEdilicio, { foreignKey: 'ID_MANTENIMIENTO_EDILICIO' });
