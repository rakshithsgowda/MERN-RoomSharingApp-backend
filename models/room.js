import mongoose from 'mongoose'

const roomSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    max_count: {
      type: Number,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    rent_per_day: {
      type: Number,
      required: true,
    },
    image_urls: [],
    current_booking: [],
    room_type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
)

const roomModel = mongoose.model('rooms', roomSchema)

export default roomModel
