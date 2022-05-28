import { Container } from "inversify";
import { TYPES } from "./src/types";
import { Warrior, Weapon, ThrowableWeapon } from "./src/interfaces";
import { Ninja, Katana, Shuriken } from "./src/entities";

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
