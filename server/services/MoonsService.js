import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";

class MoonsService {
  async find(query = {}) {
    return await dbContext.moons.find(query)
  }

  async findOne(id) {
    let data = await dbContext.moons.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(body) {
    return await dbContext.moons.create(body)
  }

  async edit(body) {
    let data = await dbContext.moons.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.moons.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted Moon"
  }
}

export const moonsService = new MoonsService();