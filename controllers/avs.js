const { Av, Performance, Maintenance } = require('../models')

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

async function createPerformance (req, res) {
  try {
    req.body.avId = req.params.id
    req.body.profileId = req.user.profile.id
    const performance = await Performance.create(req.body)
    res.status(200).json(performance)
  } catch (error) {
    res.status(500).json({ err: error })
    console.log(error)
  }
}

async function createMaintenance (req, res) {
  try {
    req.body.avId = req.params.id
    req.body.profileId = req.user.profile.id
    const maintenance = await Maintenance.create(req.body)
    res.status(200).json(maintenance)
  } catch (error) {
    res.status(500).json({ err: error })
    console.log(error)
  }
}

async function updateMaintenance (req, res) {
  try {
    const maintenance = await Maintenance.findByPk(req.params.maintenanceId)
    maintenance.set(req.body)
    await maintenance.save()

    res.status(200).json(maintenance)
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
  createPerformance,
  createMaintenance,
  updateMaintenance,
}