/**
 * This class is responsible for accesing and fetchinh data from our
 * DB, exclusively to assets, CRUD funtionalities
 */

import { Schema, model, connect, Collection } from "mongoose";
import { Asset } from "../classes/asset";

interface IAsset {
  image: String;
  name: String;
  description: String;
  model: Number;
  owner: String;
  status: String;
  healthLevel: Number;
}

const assetSchema = new Schema<IAsset>({
  image: String,
  name: { type: String, required: true },
  description: { type: String, required: true },
  model: { type: Number, required: true },
  owner: { type: String, required: true },
  status: { type: String, required: true },
  healthLevel: { type: Number, required: true },
});

const AssetModel = model<IAsset>("Asset", assetSchema);

export const handleSaveAsset = (asset) => {
  saveAsset(asset).catch((err) => console.log(err));
};

export const handleGetAsset = async (name) => {
  const asset = await getAsset(name).catch((err) => console.log(err));
  return asset;
};

export const handleGetAllAssets = async (model) => {
  const assets = await getAllAssets(model).catch((err) => console.log(err));
  return assets;
};

export const handleDeleteAsset = (name) => {
  deleteAsset(name).catch((err) => console.log(err));
};

export const handleUpdateAsset = (
  image,
  name,
  description,
  model,
  owner,
  status,
  healthLevel
) => {
  updateAsset(
    image,
    name,
    description,
    model,
    owner,
    status,
    healthLevel
  ).catch((err) => console.log(err));
};

async function saveAsset(Asset: Asset) {
  await connect("mongodb://127.0.0.1:27017/assets");

  const asset = new AssetModel({
    ...Asset,
  });

  await asset.save();

  console.log(asset);
}

async function getAsset(Name: String) {
  await connect("mongodb://127.0.0.1:27017/assets");

  const asset = (await AssetModel.find({ name: Name })) as unknown as Asset;

  return asset;
}

async function getAllAssets(model: Number) {
  await connect("mongodb://127.0.0.1:27017/assets");

  const asset = (await AssetModel.find({
    model: { $in: model },
  }));

  return asset;
}

async function deleteAsset(Name: String) {
  await connect("mongodb://127.0.0.1:27017/assets");

  await AssetModel.deleteOne({ name: Name });
}

async function updateAsset(
  image: String,
  name: String,
  description: String,
  model: Number,
  owner: String,
  status: String,
  healthLevel: Number
) {
  const update = {
    image,
    name,
    description,
    model,
    owner,
    status,
    healthLevel,
  };
  const filter = { name: name };

  await connect("mongodb://127.0.0.1:27017/assets");

  await AssetModel.findOneAndUpdate(filter, update);
}
