import app from "./app.js";
import { sequelize } from "./database/database.js";

import './models/servicio.js'
import './models/rol.js'
import './models/recibo.js'
import './models/persona.js'
import './models/propietario.js'
import './models/pagos_mantenimiento.js'
import './models/movimiento.js'
import './models/mora.js'
import './models/mantenimiento_edilicio.js'
import './models/inquilino.js'
import './models/expensa.js'
import './models/detalle_recibo.js'
import './models/detalle_movimiento.js'
import './models/departamento.js'
import './models/cuenta.js'
import './models/cuenta.js'
import './models/consorcio.js'
import './models/caja.js'



async function main() {
    try {
        await sequelize.sync();
        app.listen(3000);
        console.log('Server is listening on port', 3000);
    }
    catch (error) {
        console.error("Unable to conect to the database:", error);
    }
}
main();

