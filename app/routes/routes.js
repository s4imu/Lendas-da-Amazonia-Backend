const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller')

// verificar status de servidor
router.get('/', controller.Index)

// cadastra o usuário
router.post('/user', controller.cadastrarUsuario)

// verifica os usuários
router.get('/user', controller.listarUsuarios)

module.exports = router
