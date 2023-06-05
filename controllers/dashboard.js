const { Av, Performance, Maintenance } = require('../models')

async function index (req, res) {
  try {
    const avs = await Av.findAll({
      include: [
        { model: Performance, as: "performances"}, 
        {model: Maintenance, as: "maintenances" }
      ]
    })
    res.status(200).json(avs)
  } catch (error) {
    res.status(500).json({ err: error })
    console.log(error)
  }
}

module.exports = { index }