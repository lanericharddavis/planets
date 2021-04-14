import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets");
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
      const data = await planetsService.find(req.query)
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
      const data = await planetsService.findOne({ _id: req.params.id })
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
      const data = await planetsService.create(req.body)
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
      const data = await planetsService.edit(req.body)
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
      const data = await planetsService.delete(req.params.id)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}