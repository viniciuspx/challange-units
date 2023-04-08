/**
 * Company Class
 */

import { Unit } from "./unit";
import { User } from "./user";

// Took the liberty of implementing two main Units on the company and associating to a user

export class Company {
  UnitA: Unit;
  UnitB: Unit;
  Manager: User;
  Users: Array<User>;

  constructor(ID, Manager: User) {
    this.UnitA = new Unit(ID, Manager);
    this.UnitB = new Unit(ID, Manager);
    this.Manager = Manager;
    this.Users = [];
  }

  // Add a user to the list of permited users in this Company

  addUser = (user: User) => this.Users.push(user);
  
  getAllAssets = async () => {

    var resultA, resultB;

    resultA = await this.UnitA.getAllAssets();
    resultB = await this.UnitB.getAllAssets();

    return Object.assign({}, resultA, resultB);
    
  }

}
