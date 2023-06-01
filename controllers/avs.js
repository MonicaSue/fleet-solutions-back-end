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



module.exports = {
  create,
  index,
}