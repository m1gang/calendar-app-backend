/*
        Rutas de Eventos 
        host + /api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();

const {
  actualizarEvento,
  crearEvento,
  eliminarEvento,
  getEventos,
} = require("../controllers/events");

// Todas tienen que pasar por la validación del JWT
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear un nuevo evento
router.post("/", crearEvento);

// Actualizar evento
router.put("/:id", actualizarEvento);

// Eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
