import {Vehicule} from "../Vehicule";
import {Moteur} from "../../Moteurs/Moteur";


export class Moto extends Vehicule {
    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {
        super(marque, couleur, prix, moteur)
    }
}