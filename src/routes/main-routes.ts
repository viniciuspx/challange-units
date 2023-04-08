/**
 * Main Routes
 */

import {
  get,
  postAsset,
  patch,
  del,
  getAllAssets,
  createCompany,
  addUserToCompany,
} from "../controllers/asset-controller";
import { Router } from "express";
import { postUser } from "../controllers/user-controller";

export const defaultRouter = Router();

// Asset Routes

defaultRouter.get("/", get);

defaultRouter.get("/all", getAllAssets);

defaultRouter.post("/asset", postAsset);

defaultRouter.patch("/", patch);

defaultRouter.delete("/", del);

// User Routes

defaultRouter.post("/user", postUser);

// Company Route

defaultRouter.post("/create-company", createCompany);

defaultRouter.post("/company-enable-user", addUserToCompany);