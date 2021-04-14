import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService";

export class SpeciesController extends BaseController {
  constructor() {
    super("api/species");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  /**
   * Sends found data to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const data = await speciesService.find(req.query)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  /**
 * Sends found data to a client by request
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
  async getById(req, res, next) {
    try {
      const data = await speciesService.findOne({ _id: req.params.id })
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Creates a data from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const data = await speciesService.create(req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  /**
 * Creates a data from request body and returns it
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await speciesService.edit(req.body)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  /**
 * Creates a data from request body and returns it
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
  async delete(req, res, next) {
    try {
      const data = await speciesService.delete(req.params.id)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}