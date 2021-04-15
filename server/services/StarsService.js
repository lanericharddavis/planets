import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";

class StarsService {
  async find(query = {}) {
    return await dbContext.stars.find(query)
      .populate('galaxy', 'name')
  }

  async findOne(id) {
    let data = await dbContext.stars.findOne({ _id: id }).populated('galaxy')
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(body) {
    return await dbContext.stars.create(body)
  }

  async edit(body) {
    let data = await dbContext.stars.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.stars.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted Star"
  }
}

export const starsService = new StarsService();