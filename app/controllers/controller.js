const mongoose = require('mongoose')

//exportar os modelos
const Usuarios = mongoose.model('usuarios')

exports.Index = async (req, res) => {
  res.send('Servidor Online')
}

// Listar usuários

exports.listarUsuarios = async (req, res) => {
  try {
    let encontrados = await Usuarios.find({}, { _id: 0 })
    let total = await Usuarios.find({}).count()
    res.status(200).json({ message: `${total} usuarios cadastrados`, encontrados })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

// Cadastra usuários

exports.cadastrarUsuario = async (req, res) => {
  try {
    let usuarioNovo = await Usuarios.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha
    })
    res.status(200).json({ message: "Usuário Cadastrado", usuarioNovo })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
