import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";

class PlanetsService {
  async find(query = {}) {
    return await dbContext.planets.find(query)
      .populate('galaxy', 'name')
      .populate('star', 'name')
  }

  async findOne(id) {
    let data = await dbContext.planets.findOne({ _id: id }).populate('star')
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(body) {
    return await dbContext.planets.create(body)
  }

  async edit(body) {
    let data = await dbContext.planets.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.planets.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted Planet"
  }
}

export const planetsService = new PlanetsService();