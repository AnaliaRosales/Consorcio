import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Movimiento } from "./movimiento.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí
import { Servicio } from "./servicio.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí

import { PagosMantenimiento } from "./pagos_mantenimiento.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí

export const DetalleMovimiento = sequelize.define('tb_detalle_movimientos', {
    ID_DETALLE_MOVIMIENTO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_MOVIMIENTO: {
      type: DataTypes.INTEGER,
    },
    DESCRIPCION_MOVIMIENTO: {
      type: DataTypes.STRING(1000),
    },
    MONTO_MOVIMIENTO: {
      type: DataTypes.DECIMAL(16, 2),
    },
    ID_SERVICIO: {
      type: DataTypes.INTEGER,
    },
    ID_PAGOS_MANTENIMIENTO: {
      type: DataTypes.INTEGER,
    },
  });
  
  // Define las relaciones con otros modelos si es necesario
  DetalleMovimiento.belongsTo(Movimiento, { foreignKey: 'ID_MOVIMIENTO' });
  DetalleMovimiento.belongsTo(Servicio, { foreignKey: 'ID_SERVICIO' });
  DetalleMovimiento.belongsTo(PagosMantenimiento, { foreignKey: 'ID_PAGOS_MANTENIMIENTO' });
  
  