import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
)

const UserModel = mongoose.models?.User || mongoose.model('User', UserSchema)
export default UserModel
export type OrderItem = {
  name: string
  slug: string
  qty: number
  image: string
  price: number
  color: string
  size: string
}
