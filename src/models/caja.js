import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Cuenta } from "./cuenta.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí
import { Movimiento } from "./movimiento.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí
import { DetalleMovimiento } from "./detalle_movimiento.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí
import { Recibo} from "./recibo.js"; // Asegúrate de importar el modelo DEPARTAMENTO aquí




const Caja = sequelize.define('tb_caja', {
    ID_CAJA: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ID_CUENTA: {
      type: DataTypes.INTEGER,
    },
    ID_MOVIMIENTO: {
      type: DataTypes.INTEGER,
    },
    ID_DETALLE_MOVIMIENTO: {
      type: DataTypes.INTEGER,
    },
    ID_RECIBO: {
      type: DataTypes.INTEGER,
    },
    MONTO: {
      type: DataTypes.DECIMAL(16, 2),
    },
    TIPO_MOVIMIENTO: {
      type: DataTypes.STRING(50),
    },
    FECHA: {
      type: DataTypes.DATE,
    },
  });
  
  // Define las relaciones con otros modelos si es necesario
  Caja.belongsTo(Cuenta, { foreignKey: 'ID_CUENTA' });
  Caja.belongsTo(Movimiento, { foreignKey: 'ID_MOVIMIENTO' });
  Caja.belongsTo(DetalleMovimiento, { foreignKey: 'ID_DETALLE_MOVIMIENTO' });
  Caja.belongsTo(Recibo, { foreignKey: 'ID_RECIBO' });
  