/*
        Rutas de Usuaios / Auth
        host + /api/auth
*/

const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

router.post(
  "/new",
  [
    //midlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email no es válido").isEmail(),
    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario,
);

router.post(
  "/",
  [
    //midlewares
    check("email", "El email no es válido").isEmail(),
    check("password", "El password debe ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUsuario,
);

router.get("/renew", revalidarToken);

module.exports = router;
