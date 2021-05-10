// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

//Crea un usuario
// api/usuarios
router.post('/',
    [
        check('nombre', 'El nombre es obligatoio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6, max: 12})
    ],
usuarioController.crearUsuario
);

module.exports = router;
