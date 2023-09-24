import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
    
export const MantenimientoEdilicio = sequelize.define('tb_mantenimiento_edilicio', {
    ID_MANTENIMIENTO_EDILICIO: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE_MANTENIMIENTO: {
      type: DataTypes.STRING(100),
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
    },
  });
  