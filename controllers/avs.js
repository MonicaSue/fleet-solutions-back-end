const { Av } = require('../models')

async function create (req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const av = await Av.create(req.body)
    res.status(200).json(av)
  } catch (error) {
    res.status(500).json({ err: error })
    console.log(error)
  }
}

async function index (req, res) {
  try {
    const avs = await Av.findAll()
    res.status(200).json(avs)
  } catch (error) {
    res.status(500).json({ err: error })
    console.log(error)
  }
}

async function show(req, res) {
  try {
    const av = await Av.findByPk(req.params.id)
    res.status(200).json(av)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

async function update (req, res) {
  try {
    const av = await Av.findByPk(req.params.id)

    av.set(req.body)
    await av.save()

    res.status(200).json(av)
  } catch (error) {
    res.status(500).json({ err: error })
    console.log(error)
  }
}

async function deleteAv (req, res) {
  try {
    const av = await Av.findByPk(req.params.id)
    await av.destroy()
    res.status(200).json(av)
  } catch (error) {
    res.status(500).json({ err: error })
    console.log(error)
  }
}



module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteAv,
}