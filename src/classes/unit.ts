/**
 * Main Unit class
 */

import {
  handleDeleteAsset,
  handleGetAllAssets,
  handleGetAsset,
  handleSaveAsset,
} from "../models/assetDBAccess";
import { Asset } from "./asset";
import { User } from "./user";

export class Unit {
  Assets: Array<Asset>;
  ID: Number;
  Manager: User;

  constructor(ID: Number, Manager: User) {
    this.Assets = [];
    this.ID = ID;
    this.Manager = Manager;
  }

  addAsset = (asset) => {
    this.Assets.push(asset);
    handleSaveAsset(asset);
  };

  findAsset = async (name) => {
    return await handleGetAsset(name);
  };

  removeAsset = (name) => {
    this.Assets = this.Assets.filter((n) => n.name !== name);
    handleDeleteAsset(name);
  };

  getAllAssets = async () => {
    return await handleGetAllAssets(this.ID);
  }
}
