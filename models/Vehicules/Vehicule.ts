import {Moteur} from "../Moteurs/Moteur";
import {StationEssence} from "../StationEssence/StationEssence";

export class Vehicule {
    private _marque: string;
    private _couleur: string;
    private _prix: number;
    private _moteur: Moteur;

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this._moteur = moteur;
    }

    faireLePleinEssence = (station : StationEssence, nbLitre: number) => {
        let prix = nbLitre * station.PrixEssence;
        console.log(`${this.marque} a payé ${prix}€ pour ${nbLitre}L d'essence `)
    }

    faireLePleinDiesel = (station : StationEssence, nbLitre: number) => {
        let prix = nbLitre * station.PrixDiesel;
        console.log(`${this.marque} a payé ${prix}€ pour ${nbLitre}L de Diesel `)
    }

    get marque(): string {
        return this._marque;
    }

    set marque(value) {
        this._marque = value;
    }

    get couleur(): string {
        return this._couleur;
    }

    set couleur(value) {
        this._couleur = value;
    }

    get prix(): number {
        return this._prix
    }

    set prix(value) {
        this._prix = value;
    }

    get moteur(): Moteur{
        return this._moteur;
    }

    set moteur(value) {
        this._moteur = value;
    }

}