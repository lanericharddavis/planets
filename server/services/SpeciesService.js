import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";

class SpeciesService {
  async find(query = {}) {
    return await dbContext.species.find(query)
  }

  async findOne(id) {
    let data = await (await dbContext.species.findOne({ _id: id }))
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(body) {
    return await dbContext.species.create(body)
  }

  async edit(body) {
    let data = await dbContext.species.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.species.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted Species"
  }
}

export const speciesService = new SpeciesService();