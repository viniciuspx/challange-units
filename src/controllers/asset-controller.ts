/**
 * Controller for Asset nad Company Class, main middlewares
 */

import {
  handleDeleteAsset,
  handleGetAsset,
  handleUpdateAsset,
} from "../models/assetDBAccess";
import { Asset } from "../classes/asset";
import { Company } from "../classes/company";
import { User } from "../classes/user";
import { handleGetUser } from "../models/userDBAccess";


// Company Logic

var company: Company;
const ErrorMsg = "Company not defined, create one first!";

export const createCompany = (req, res) => {
  const { name, email, password, ID } = req.body;
  const manager = new User(name, email, password);
  company = new Company(ID, manager);

  res.status(200).json({ company, message: "Company Succefully Created!" });
};

export const addUserToCompany = (req, res) => {
  const { email, _ID } = req.body;
  var user : User;
  handleGetUser(email).then((u) => {
    user = u as User;
    if (company) {
      company.addUser(user);
      console.log(user);
      res.status(200).json({message: "Succefully added user to Company Users."})
    }
    else res.status(404).json({ message: ErrorMsg });
  });
};

// Get Method for specific Asset

export const get = (req, res) => {
  const { name } = req.body;

  if (company) {
    company.UnitA.findAsset(name).then((asset) => {
      res.status(200).json(asset);
    });
  } else res.status(404).json({ message: ErrorMsg });
};

// Get Method that returns all Assets

export const getAllAssets = (_req, res) => {
  if (company) {
    company.getAllAssets().then((assets) => {
      res.status(200).json(assets);
    });
  } else res.status(404).json({ message: ErrorMsg });
};

// Post New Asset

export const postAsset = (req, res) => {
  const { image, name, description, model, owner, status, healthLevel } =
    req.body;

  var asset = new Asset(
    image,
    name,
    description,
    model,
    owner,
    status,
    healthLevel
  );

  if (company) {
    if (model === 1) {
      company.UnitA.addAsset(asset);
    } else company.UnitB.addAsset(asset);
    res.status(201).json(asset);
  } else res.status(404).json({ message: ErrorMsg });
};

// Update Asset

export const patch = (req, res) => {
  const { image, name, description, model, owner, status, healthLevel } =
    req.body;

  if (company) {
    handleUpdateAsset(
      image,
      name,
      description,
      model,
      owner,
      status,
      healthLevel
    );
    res.status(200).json({message : "Asset Updated"})
  } else res.status(404).json({ message: ErrorMsg });

  res.status(200).json();
};

// Delete Asset

export const del = (req, res) => {
  const { name } = req.body;

  if (company) {
    company.UnitA.removeAsset(name);
  } else res.status(404).json({ message: ErrorMsg });

  res.status(200).json("Success");
};
