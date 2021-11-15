import {Moteur} from "../Moteurs/Moteur";

export class Vehicule {
    private _marque: string;
    private _couleur: string;
    private _prix: number;
    private moteur: Moteur;

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this.moteur = moteur;
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

}