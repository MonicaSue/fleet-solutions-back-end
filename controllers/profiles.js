const { Profile, User } = require('../models')
const cloudinary = require('cloudinary').v2

async function index(req, res) {
  try {
    if (req.user.role === 'Admin') {
    const profiles = await Profile.findAll()
    console.log('user consolelog', req.user.role)
    res.json(profiles)
    } else {
      throw new Error('Access Denied: User trying to access profiles')
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findByPk(req.params.id)

    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url

    await profile.save()
    res.status(201).json(profile.photo)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = { index, addPhoto }
