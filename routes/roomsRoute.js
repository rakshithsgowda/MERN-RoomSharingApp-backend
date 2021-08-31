import { Router } from 'express'
import Room from '../models/room'

const router = Router()
// connecting router to rooms route
router.get('/getallrooms', async (req, res) => {
  try {
    const rooms = await Room.find({})
    return res.send({ rooms })
  } catch (err) {
    return res.status(400).json({ message: err })
  }
})

export default router
