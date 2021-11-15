export class StationEssence {

    private prixEssence : number;
    private prixDiesel : number;

    constructor(prixEssence: number, prixDiesel: number) {
        this.prixDiesel = prixDiesel;
        this.prixEssence = prixEssence;
    }

    get PrixEssence() : number {
        return this.prixEssence;
    }

    get PrixDiesel() : number {
        return this.prixDiesel;
    }

}