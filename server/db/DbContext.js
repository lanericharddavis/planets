import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
// import PlanetSchema from "../models/Planet";
// import MoonSchema from "../models/Moon";
// import SpeciesSchema from "../models/Species";
import mongoose from "mongoose";

class DbContext {
  galaxies = mongoose.model("Galaxy", GalaxySchema);
  stars = mongoose.model("Star", StarSchema);
  // planets = mongoose.model("Planet", PlanetSchema);
  // moons = mongoose.model("Moon", MoonSchema);
  // species = mongoose.model("Species", SpeciesSchema);


}

export const dbContext = new DbContext();
