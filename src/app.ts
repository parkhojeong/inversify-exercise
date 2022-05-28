import { TYPES } from "./types";
import { Warrior } from "./interfaces";
import {myContainer} from "../inversify.config";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight() === "cut!")
console.log(ninja.sneak() === "hit!")
