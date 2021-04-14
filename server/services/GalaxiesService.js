import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";

class GalaxiesService {
  async find(query = {}) {
    return await dbContext.galaxies.find(query)
  }

  async findOne(id) {
    let data = await dbContext.galaxies.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(body) {
    return await dbContext.galaxies.create(body)
  }

  async edit(body) {
    let data = await dbContext.galaxies.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.galaxies.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted Galaxy"
  }
}

export const galaxiesService = new GalaxiesService();