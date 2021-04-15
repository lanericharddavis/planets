import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    name: { type: String, required: true },
    galaxy: { type: ObjectId, ref: 'Galaxy', required: true },
    star: { type: ObjectId, ref: 'Star', required: true },
    planet: { type: ObjectId, ref: 'Planet', required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;