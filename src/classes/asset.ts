/**
 * Asset Class
 */

export class Asset {
  image: String;
  name: String;
  description: String;
  model: Number;
  owner: String;
  status: String;
  healthLevel: Number;

  constructor(
    image: String,
    name: String,
    description: String,
    model: Number,
    owner: String,
    status: String,
    healthLevel: Number
  ) {
    this.image = image;
    this.name = name;
    this.description = description;
    this.model = model;
    this.owner = owner;
    this.status = status;
    this.healthLevel = healthLevel;
  }

  update = (
    image: String,
    name: String,
    description: String,
    model: Number,
    owner: String,
    status: String,
    healthLevel: Number
  ) => {
    this.image = image;
    this.name = name;
    this.description = description;
    this.model = model;
    this.owner = owner;
    this.status = status;
    this.healthLevel = healthLevel;
  };
}
