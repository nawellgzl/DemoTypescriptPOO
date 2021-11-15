import {Moteur} from "./models/Moteurs/Moteur";
import {Voiture} from "./models/Vehicules/Voiture/Voiture";
import {StationEssence} from "./models/StationEssence/StationEssence";


let s = new StationEssence(1.69, 1.59);

let m = new Moteur(150, 15000);
let v = new Voiture("BMW", "Noir", 25999, m);
v.moteur.km += 200;
console.log(v.moteur.km);
v.faireLePleinEssence(s, 50);


let m2 = new Moteur(130, 190000);
let v2 = new Voiture("Nissan", "Noir", 11000, m2);
v2.moteur.km += 1500;
console.log(v2.moteur.km);
v2.faireLePleinDiesel(s, 60);
