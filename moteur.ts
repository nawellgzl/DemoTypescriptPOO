export class Moteur {
    private _vitesse: number;
    private _km: number;

    constructor(vitesse : number, km: number) {
        this._vitesse= vitesse;
        this._km= km;
    }

    get vitesse(): number {
        return this._vitesse;
    }

    set vitesse(value) {
        this._vitesse = value;
    }

    get km(): number {
        return this._km;
    }

    set km(value) {
        this._km = value;
    }
}